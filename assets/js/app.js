(function () {
  const root = document.documentElement;
  const body = document.body;
  const modeButton = document.querySelector('.mode-toggle');
  const modeLabel = document.querySelector('.mode-label');
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-button');
  const sidebar = document.querySelector('.sidebar');
  const scrim = document.querySelector('.sidebar-scrim');

  function setMode(mode) {
    const internal = mode === 'internal';
    body.classList.toggle('internal-mode', internal);
    if (modeButton) modeButton.setAttribute('aria-pressed', String(internal));
    if (modeLabel) modeLabel.textContent = internal ? '내부 개발' : '외부 공개';
    localStorage.setItem('proaka-mode', internal ? 'internal' : 'public');
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem('proaka-theme', theme);
  }

  setMode(localStorage.getItem('proaka-mode') || 'public');
  setTheme(localStorage.getItem('proaka-theme') || 'light');

  modeButton?.addEventListener('click', () => setMode(body.classList.contains('internal-mode') ? 'public' : 'internal'));
  themeButton?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  function closeMenu() {
    body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (scrim) scrim.hidden = true;
  }

  menuButton?.addEventListener('click', () => {
    const open = !body.classList.contains('menu-open');
    body.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    if (scrim) scrim.hidden = !open;
  });
  scrim?.addEventListener('click', closeMenu);
  sidebar?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

  const esc = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
  const initials = (name) => name.split(' ').map((part) => part[0]).join('').slice(0, 2);
  const imageOrPlaceholder = (character, className) => character.image
    ? `<img class="${className}" src="${encodeURI(character.image)}" alt="${esc(character.name)} 캐릭터 설정화">`
    : `<div class="${className} portrait-placeholder" style="--character-color:${esc(character.color)}" role="img" aria-label="${esc(character.name)} 이미지 준비 중"><b>${esc(initials(character.name))}</b><span>IMAGE<br>COMING SOON</span></div>`;
  const dataValue = (value) => !value || value === 'TBD' ? '<span class="tbd-value">TBD</span>' : esc(value);
  const statusClass = (status) => ({ '확정': 'confirmed', '권장안': 'proposed', '데모 검증': 'validation', '후속 설계': 'followup', '그래픽 추가 예정': 'art' }[status] || 'tbd');
  const statusBadge = (status) => `<span class="design-status ${statusClass(status)}">${esc(status)}</span>`;
  const paletteMarkup = (character, compact = false) => `<div class="color-palette${compact ? ' compact-palette' : ''}" aria-label="${esc(character.name)} 컬러 팔레트">${character.palette.slice(0, 5).map((color, index) => `<span style="--swatch:${esc(color)}" title="팔레트 ${index + 1}: ${esc(color)}"><i></i>${compact ? '' : `<b>${esc(color)}</b>`}</span>`).join('')}</div>`;
  const historyMarkup = (items = []) => items.map((item) => `<article class="history-entry"><h4>${esc(item.title)} ${item.status ? statusBadge(item.status) : ''}</h4><p>${esc(item.body)}</p></article>`).join('');
  const keywordMarkup = (items = []) => `<div class="keyword-row">${items.map((item) => `<span>${esc(item)}</span>`).join('')}</div>`;

  function allSearchText(character) {
    return [character.name, character.nameEn, character.school, character.club, character.major, character.role, character.position, character.summary, ...character.tags, ...character.protocols, ...character.personalityKeywords, ...character.moeElements, ...character.novelHistory.flatMap((item) => [item.title, item.body]), ...character.skills.flatMap((skill) => [skill.name, skill.type, skill.trigger])].join(' ').toLocaleLowerCase('ko');
  }

  function renderRoster() {
    const data = window.WIKI_DATA?.characters;
    const grid = document.querySelector('#character-grid');
    if (!data || !grid) return;
    const search = document.querySelector('#roster-search');
    const school = document.querySelector('#school-filter');
    const major = document.querySelector('#major-filter');
    const count = document.querySelector('#result-count');
    const empty = document.querySelector('#empty-state');
    const total = document.querySelector('#roster-total');
    const params = new URLSearchParams(location.search);

    function addOptions(select, values) {
      [...new Set(values)].sort((a, b) => a.localeCompare(b, 'ko')).forEach((value) => select.insertAdjacentHTML('beforeend', `<option value="${esc(value)}">${esc(value)}</option>`));
    }
    addOptions(school, data.map((item) => item.school));
    addOptions(major, data.map((item) => item.major));
    search.value = params.get('q') || '';
    if (total) total.textContent = data.length;

    function update() {
      const query = search.value.trim().toLocaleLowerCase('ko');
      const filtered = data.filter((item) => (!query || allSearchText(item).includes(query)) && (!school.value || item.school === school.value) && (!major.value || item.major === major.value));
      grid.innerHTML = filtered.map((item) => `<article class="character-card" style="--character-color:${esc(item.color)}">
        <a class="character-visual" href="character.html?id=${encodeURIComponent(item.id)}">${imageOrPlaceholder(item, 'card-portrait')}<span class="rarity-badge">${esc(item.rarity)}</span></a>
        <div class="character-card-body"><div class="character-card-head"><div><a href="character.html?id=${encodeURIComponent(item.id)}"><h2>${esc(item.name)}</h2></a><span>${esc(item.nameEn)}</span></div><span class="role-chip">${esc(item.major)}</span></div>
        <p>${esc(item.summary)}</p><dl><div><dt>소속</dt><dd>${esc(item.school)}</dd></div><div><dt>역할</dt><dd>${esc(item.role)}</dd></div><div class="internal-only"><dt>코드</dt><dd>${esc(item.internal.code)}</dd></div></dl>
        <div class="tag-row">${item.tags.slice(0, 3).map((tag) => `<span>${esc(tag)}</span>`).join('')}</div><a class="card-link" href="character.html?id=${encodeURIComponent(item.id)}">상세 문서 보기 <b>→</b></a></div>
      </article>`).join('');
      count.textContent = filtered.length;
      empty.hidden = filtered.length !== 0;
    }
    [search, school, major].forEach((control) => control.addEventListener(control === search ? 'input' : 'change', update));
    document.querySelector('#filter-reset')?.addEventListener('click', () => { search.value = ''; school.value = ''; major.value = ''; history.replaceState(null, '', 'characters.html'); update(); });
    update();
  }

  function renderCharacter() {
    const rootEl = document.querySelector('#character-detail');
    const data = window.WIKI_DATA?.characters;
    if (!rootEl || !data) return;
    const id = new URLSearchParams(location.search).get('id');
    const character = data.find((item) => item.id === id) || data[0];
    document.title = `${character.name} — 프로젝트: 아카데미아 위키`;
    document.querySelector('#character-crumb').textContent = character.name;
    const toc = [
      ['overview', '1. 개요', ''], ['profile', '2. 프로필', ''], ['personality', '3. 인물 소개', ''], ['history', '4. 작중 행적', ''], ['combat', '5. 인게임 정보', ''], ['evaluation', '6. 평가', ''], ['resources', 'DEV. 리소스 제작', 'internal-only'], ['related', '7. 관련 문서', '']
    ];
    const resource = character.resource;
    rootEl.innerHTML = `<header class="article-header character-title"><div><span class="eyebrow">PLAYABLE CHARACTER · ${esc(character.rarity)}</span><h1>${esc(character.name)}</h1><p class="lead">${esc(character.nameEn)}</p></div><div class="article-meta">${statusBadge('TBD')} 개별 사양 검수 필요</div></header>
      <blockquote class="character-quote">“${esc(character.quote)}”</blockquote>
      <div class="character-layout"><div class="character-copy">
        <nav class="toc-box" aria-label="문서 목차"><strong>목차</strong><ol>${toc.map(([href, label, className]) => `<li class="${className}"><a href="#${href}">${label}</a></li>`).join('')}</ol></nav>
        <section class="article-section" id="overview"><h2><span>1.</span> 개요</h2>${character.overview.map((paragraph) => `<p>${esc(paragraph)}</p>`).join('')}<div class="source-note"><b>자료 기준</b><span>학교·동아리·원작 시점의 인물 관계와 사건은 「원작소설 1편: 센추리온편」을 우선합니다. 게임 시스템과 전투 키트는 통합 게임기획서 v2.3을 기준으로 하며, 확인되지 않은 항목은 TBD 또는 후속 설계로 표시합니다.</span></div></section>
        <section class="article-section" id="profile"><h2><span>2.</span> 프로필</h2><div class="profile-facts extended-profile"><div><span>학교</span><b>${esc(character.school)}</b></div><div><span>전공</span><b>${dataValue(character.major)}</b></div><div><span>역할</span><b>${esc(character.role)}</b></div><div><span>전용무기</span><b>${dataValue(character.weapon)}</b></div><div><span>성격 키워드</span><b>${esc(character.personalityKeywords.join(' · '))}</b></div><div><span>모에 요소</span><b>${esc(character.moeElements.join(' · '))}</b></div><div><span>생일</span><b>${dataValue(character.internal.birthday)}</b></div><div><span>신장</span><b>${dataValue(character.internal.height)}</b></div><div><span>쓰리사이즈</span><b>${dataValue(character.internal.measurements)}</b></div><div><span>핵심 컬러</span><b>${dataValue(character.coreColor)}</b></div></div><h3>컬러 팔레트</h3>${paletteMarkup(character)}<p class="field-help">${character.coreColor === 'TBD' ? '최종 원화가 없어 회색 5색을 사용하는 임시 팔레트입니다.' : '현재 캐릭터 설정화에서 추출한 임시 5색 팔레트입니다. 최종 아트 승인 시 다시 검수합니다.'}</p></section>
        <section class="article-section" id="personality"><h2><span>3.</span> 인물 소개</h2><h3>외형</h3><p>${esc(character.appearance)}</p><h3>성격</h3><ul>${character.personality.map((item) => `<li>${esc(item)}</li>`).join('')}</ul><h3>성격 키워드</h3>${keywordMarkup(character.personalityKeywords)}<h3>모에 요소</h3>${keywordMarkup(character.moeElements)}</section>
        <section class="article-section" id="history"><h2><span>4.</span> 작중 행적</h2><div class="history-group"><h3>4.1 원작소설 1편 기준 작중행적</h3><p class="field-help">게임 본편보다 과거 시점인 「센추리온편」의 사건입니다.</p>${historyMarkup(character.novelHistory)}</div><div class="history-group"><h3>4.2 게임 본편 기준 작중행적</h3>${historyMarkup(character.history)}</div></section>
        <section class="article-section" id="combat"><h2><span>5.</span> 인게임 정보</h2><div class="combat-summary"><span>${esc(character.position)}</span><p>${esc(character.summary)}</p></div><div class="notice notice-compact"><strong>v2.3 전투 원칙</strong><span>패시브가 반복 규칙을 만들고 기본공격이 자원을 축적·소비하며 전투스킬이 변환·폭발의 결론을 만듭니다. 무기는 장기 운용 분기, 모듈은 개별 조건·대상·결과를 조정합니다.</span></div><div class="skill-list">${character.skills.map((skill) => `<article class="skill-card"><div class="skill-type">${esc(skill.type)}</div><div><h3>${esc(skill.name)} ${skill.status ? statusBadge(skill.status) : ''}</h3><span class="skill-trigger">발동 · ${esc(skill.trigger)}</span><p>${esc(skill.body)}</p><ul>${skill.effects.map((effect) => `<li>${esc(effect)}</li>`).join('')}</ul></div></article>`).join('')}</div><h3>추천 속성·전술 프로토콜 ${statusBadge(character.protocolStatus)}</h3><div class="synergy-row">${character.protocols.map((item) => `<span>${esc(item)}</span>`).join('')}</div><p class="field-help">학교·동아리는 탐험 사건, 시설 보너스, 관계 묘사의 문맥으로 사용하며 강한 글로벌 전투 시너지에는 사용하지 않습니다.</p></section>
        <section class="article-section" id="evaluation"><h2><span>6.</span> 평가</h2><div class="pros-cons"><div><b>장점</b><ul>${character.strengths.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></div><div><b>단점</b><ul>${character.weaknesses.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></div></div></section>
        <section class="article-section internal-only internal-section" id="resources"><h2><span>DEV.</span> 리소스 제작 가이드</h2><div class="resource-status"><div><span>제작 상태</span>${statusBadge(resource.assetStatus)}</div><div><span>핵심 컬러</span>${dataValue(character.coreColor)}</div><div><span>신장</span>${dataValue(character.internal.height)}</div><div><span>쓰리사이즈</span>${dataValue(character.internal.measurements)}</div></div><h3>컬러 지정</h3>${paletteMarkup(character)}<div class="resource-overview"><div><b>2D 방향</b><p>고품질 ACG 스타일 일러스트. 캐릭터의 식별 포인트와 반복 제작 일관성을 우선합니다.</p></div><div><b>3D 방향</b><p>툰 셰이딩 SD 캐릭터. 실제 모델 부피와 8×8 점유 칸을 분리해 전투 가독성을 확보합니다.</p></div></div><div class="wiki-table-wrap resource-table"><table class="wiki-table"><tbody><tr><th>체형</th><td>${dataValue(resource.bodyType)}</td><th>SD 비율</th><td>${dataValue(resource.proportions)}</td></tr><tr><th>실루엣 키</th><td>${dataValue(resource.silhouette)}</td><th>헤어·눈</th><td>${dataValue(resource.hairAndEyes)}</td></tr><tr><th>의상 분해</th><td>${dataValue(resource.costumeBreakdown)}</td><th>무기·소품 분해</th><td>${dataValue(resource.propBreakdown)}</td></tr><tr><th>재질 지정</th><td>${dataValue(resource.materialNotes)}</td><th>VFX 지정</th><td>${dataValue(resource.vfxNotes)}</td></tr><tr><th>표정 세트</th><td>${dataValue(resource.expressionSet)}</td><th>리깅 주의</th><td>${dataValue(resource.riggingNotes)}</td></tr></tbody></table></div><h3>권장 제작 패키지</h3><div class="deliverable-grid"><span>정면·측면·후면 턴어라운드</span><span>기본 표정 + 감정 6종</span><span>의상 레이어·소재 지정표</span><span>무기·소품 분해도와 스케일</span><span>VFX 발광색·형태·타이밍</span><span>SD 실루엣·점유 칸 검수</span></div></section>
        <section class="article-section internal-only internal-section" id="development"><h2><span>DEV.</span> 내부 개발 자료</h2><div class="internal-note"><strong>기획 메모</strong><p>${esc(character.internal.note)}</p></div><div class="wiki-table-wrap"><table class="wiki-table"><tbody><tr><th>캐릭터 코드</th><td>${esc(character.internal.code)}</td><th>문서 상태</th><td>${statusBadge('TBD')} ${esc(character.internal.status)}</td></tr><tr><th>생일 / 나이</th><td>${dataValue(character.internal.birthday)} / ${dataValue(character.internal.age)}</td><th>학년</th><td>${dataValue(character.internal.grade)}</td></tr><tr><th>신장</th><td>${dataValue(character.internal.height)}</td><th>쓰리사이즈</th><td>${dataValue(character.internal.measurements)}</td></tr><tr><th>성우</th><td>${dataValue(character.internal.voice)}</td><th>일러스트</th><td>${dataValue(character.internal.illustrator)}</td></tr><tr><th>소스 문서</th><td colspan="3"><code>${esc(character.internal.source)}</code></td></tr></tbody></table></div></section>
        <section class="article-section" id="related"><h2><span>7.</span> 관련 문서</h2><div class="related-links"><a href="characters.html?q=${encodeURIComponent(character.school)}">${esc(character.school)}</a><a href="characters.html?q=${encodeURIComponent(character.major)}">${esc(character.major)}</a><a href="characters.html?q=${encodeURIComponent(character.club)}">${esc(character.club)}</a><a href="characters.html">등장인물 목록</a></div></section>
      </div><aside class="character-infobox" style="--character-color:${esc(character.color)}"><div class="infobox-name"><strong>${esc(character.name)}</strong><span>${esc(character.nameEn)}</span></div><div class="portrait-frame">${imageOrPlaceholder(character, 'detail-portrait')}</div><dl class="compact-info"><div><dt>성별</dt><dd>${esc(character.gender)}</dd></div><div><dt>종족</dt><dd>${esc(character.species)}</dd></div><div><dt>학교</dt><dd>${esc(character.school)}</dd></div><div><dt>동아리</dt><dd>${esc(character.club)}</dd></div><div><dt>전공</dt><dd>${dataValue(character.major)}</dd></div><div><dt>포지션</dt><dd>${esc(character.position)}</dd></div><div><dt>무기 타입</dt><dd>${esc(character.weaponType)}</dd></div><div><dt>전용무기</dt><dd>${dataValue(character.weapon)}</dd></div><div><dt>성격 키워드</dt><dd>${esc(character.personalityKeywords.join(' · '))}</dd></div><div><dt>모에 요소</dt><dd>${esc(character.moeElements.join(' · '))}</dd></div><div><dt>핵심 컬러</dt><dd>${dataValue(character.coreColor)}</dd></div><div class="palette-info-row"><dt>컬러 팔레트</dt><dd>${paletteMarkup(character, true)}</dd></div><div><dt>신장</dt><dd>${dataValue(character.internal.height)}</dd></div><div><dt>쓰리사이즈</dt><dd>${dataValue(character.internal.measurements)}</dd></div><div><dt>생일</dt><dd>${dataValue(character.internal.birthday)}</dd></div></dl></aside></div>`;
  }

  if (body.dataset.page === 'characters') renderRoster();
  if (body.dataset.page === 'character') renderCharacter();
})();
