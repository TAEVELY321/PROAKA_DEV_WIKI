/*
 * 프로젝트: 아카데미아 위키 콘텐츠 데이터
 * ------------------------------------------------------------
 * 캐릭터 추가 방법:
 * 1) 아래 characters 배열의 기존 항목 하나를 복사합니다.
 * 2) id는 영문 소문자와 하이픈으로 고유하게 작성합니다.
 * 3) 이미지가 있다면 assets/images/characters에 넣고 image 경로를 적습니다.
 * 4) 저장하면 학생 명부, 검색, 상세 문서에 자동으로 반영됩니다.
 */

window.WIKI_DATA = {
  project: {
    name: '프로젝트: 아카데미아',
    nameEn: 'Project: Academia',
    tagline: '전투는 자동, 승리는 설계하라!',
    updatedAt: '2026.09.05',
    source: '프로젝트 아카데미아 통합 게임 디자인 문서 v2.3',
    sourceDate: '2026.08.20',
    statuses: ['확정', '권장안', '데모 검증', '후속 설계', '그래픽 추가 예정', 'TBD']
  },
  characters: [
    {
      id: 'usami-carrot',
      name: '우사미 카롯', nameEn: 'Usami Carrot', quote: '걱정 마! 내가 전부 뚫어버릴 테니까!',
      image: 'assets/images/characters/우사미 카롯.png', color: '#d53b88', rarity: '대표 캐릭터',
      school: '센추리온 아카데미', club: '선도부', major: '강습학', role: '메인 딜러',
      position: '지속 화력형 중거리 딜러', species: '인간', weaponType: '권총', weapon: '래피드 버니',
      summary: '빠른 기본공격과 연속 사격으로 안정적인 피해를 누적하는 센추리온 아카데미의 강습학 학생.',
      overview: ['프로젝트: 아카데미아의 플레이어블 캐릭터이자 대표 캐릭터이다.', '밝고 적극적인 성격과 뛰어난 전투 감각을 지닌 이능력자. 위험한 상황에서도 가장 먼저 앞으로 뛰어나가며 동료를 지키기 위해 몸을 사리지 않는다.'],
      appearance: '연분홍색 장발과 붉은 눈동자, 토끼를 연상시키는 헤어스타일이 특징이다. 센추리온 아카데미 교복을 활동성 위주로 개조하고 경량 전술 장비를 착용한다.',
      personality: ['밝고 긍정적인 행동파', '정의감이 강하고 솔직함', '생각이 얼굴에 그대로 드러나는 타입'],
      history: [
        { title: '센추리온 아카데미', body: '강습학 학생으로 활동하며 천공의 탑 공략을 누구보다 동경한다.' },
        { title: '천공의 탑', body: '스쿼드의 선봉에서 빠른 사격으로 길을 열고 동료들의 진입을 돕는다.' }
      ],
      skills: [
        { type: '기본공격', name: '당근권총 사격', trigger: '상시', body: '가장 가까운 적을 향해 빠르게 권총을 사격한다.', effects: ['중거리 단일 공격', '빠른 공격 속도', '적중 효과와 높은 궁합'] },
        { type: '액티브', name: '풀 버스트 러시', trigger: '기본공격 3회 후 자동 발동', body: '대상에게 빠른 연속 사격을 가해 순간 화력을 집중한다.', effects: ['연속 사격', '기본공격 피해 연계', '짧은 스킬 주기'] },
        { type: '패시브', name: '전투 본능', trigger: '기본공격 적중', body: '기본공격 시 전투 본능 중첩을 얻어 공격 템포를 끌어올린다.', effects: ['기본공격 중첩', '공격속도 성장', '스킬 회전 보조'] }
      ],
      strengths: ['쉬운 운용과 안정적인 지속 화력', '공격속도·적중 효과 빌드 적응력', '초반 친화적인 스킬 구조'],
      weaknesses: ['단독 생존력이 낮음', '순간 폭발력은 전문 처형 딜러보다 낮음'],
      protocols: ['화염', '전격', '연쇄'], tags: ['중거리', '연속 사격', '공격속도', '스타팅'],
      internal: { code: 'PC1001', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: 'TBD', measurements: 'TBD', illustrator: 'TBD', voice: 'TBD', range: '중거리', status: 'TBD · 기존 위키 기준', source: '01_Wiki/03_Characters/우사미 카롯.md', note: '대표 캐릭터. 기본공격 기반의 직관적인 입문형 메인 딜러로 포지셔닝.' }
    },
    {
      id: 'shido-ayane',
      name: '시도 아야네', nameEn: 'Shido Ayane', quote: '…다가오지 마. 지금은 나도, 내가 무서우니까.',
      image: 'assets/images/characters/시도 아야네.png', color: '#8f3449', rarity: '메인',
      school: '센추리온 아카데미', club: '중전술부', major: '강습학', role: '버서커 브루저',
      position: '근접 버서커 브루저 / 전열 돌파자', species: '인간', weaponType: '부스터 액스', weapon: '나이트폴 리코일',
      summary: '거대한 도끼와 부스터로 전열을 돌파하고 상흔 게이지가 차면 버서커 상태에 돌입하는 강습학 학생.',
      overview: ['센추리온 아카데미 내에서도 독보적인 근접 전투 재능을 지닌 학생이다.', '무뚝뚝하고 타인과 거리를 두지만, 관심을 받은 경험이 적어 표현 방법에 서툰 인물이다.'],
      appearance: '검붉은색의 긴 머리와 금빛 눈동자, 큰 체격이 특징이다. 교복 위에 중전투용 보호 장비를 덧입고 초대형 부스터 액스를 사용한다.',
      personality: ['무뚝뚝하고 경계심이 강함', '낯선 호의에 서툴지만 정이 많음', '강한 보호 본능을 숨김'],
      history: [
        { title: '과거의 사건', body: '과거 작전 이후 공포와 압박 상황에서 트라우마가 이능과 연결되어 폭주 형태로 발현된다.' },
        { title: '우사미 카롯과의 관계', body: '거리낌 없이 다가오는 카롯을 귀찮아하지만, 혼자 두지 않는 카롯에게 큰 위안을 받는다.' },
        { title: '천공의 탑', body: '위험한 적진을 찢고 들어가 교두보를 만드는 전열 돌파 전력으로 투입된다.' }
      ],
      skills: [
        { type: '기본공격', name: '리코일 액스', trigger: '상시', body: '거대한 도끼로 전방의 적을 강하게 타격하고 작은 충격파를 일으킨다.', effects: ['강한 단일 타격', '소형 범위 피해', '버서커 상태에서 템포 증가'] },
        { type: '액티브', name: '브레이크 다운 블러드', trigger: '상흔 게이지 100', body: '부스터를 점화해 돌진·내려찍기 후 일정 시간 버서커 상태에 들어간다.', effects: ['돌진 후 범위 강타', '공격력·공격속도 증가', '흡혈', '종료 후 탈진'] },
        { type: '패시브', name: '상흔 과부하', trigger: '피격 또는 전투 지속', body: '상흔 게이지가 높아질수록 공격력이 증가하고 최대치에서 액티브가 발동한다.', effects: ['피격 기반 성장', '저체력 고화력', '장기전 강화'] }
      ],
      strengths: ['후반에 강해지는 폭발적인 전투력', '높은 돌파력과 범위 압박', '흡혈 기반 자기 회복'], weaknesses: ['게이지 전 생존 관리 필요', '버서커 종료 후 탈진 구간'],
      protocols: ['방호', '화력', '기동'], tags: ['근접', '버서커', '흡혈', '저체력'],
      internal: { code: 'PC1012', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: 'TBD', measurements: 'TBD', illustrator: 'TBD', voice: 'TBD', range: '근거리', status: 'TBD · 기존 위키 기준', source: '01_Wiki/03_Characters/시도 아야네.md', note: '트라우마와 폭주 설정은 스토리 스포일러 등급 검토 필요. 방호/보조 캐릭터와의 조합을 전제로 밸런싱.' }
    },
    {
      id: 'aqua-rio',
      name: '아쿠아 리오', nameEn: 'Aqua Rio', quote: '가만히 있으라고? 그건 나한테 제일 어려운 작전인데!',
      image: 'assets/images/characters/아쿠아 리오.png', color: '#22aecd', rarity: '스탠다드',
      school: '루미나리에 여학원', club: '익스트림 스포츠부', major: '공작학', role: '기동 교란 딜러',
      position: '중거리 기동 교란 딜러', species: '상어 세리안', weaponType: '워터보드 코어', weapon: '블루 핀 라이더',
      summary: '워터보드로 전장을 빠르게 이동하고 표식·방어력 감소로 적 진형을 흔드는 상어 세리안.',
      overview: ['루미나리에 여학원 소속 공작학 학생이다.', '수압 조작형 이능과 뛰어난 균형 감각으로 무기 없이도 날카로운 물결을 만들어 공격한다.'],
      appearance: '푸른색 장발과 눈동자, 상어 꼬리와 지느러미 장식이 특징이다. 교복을 스포츠웨어처럼 개조하고 특수 워터보드를 탄다.',
      personality: ['한시도 가만히 있지 못하는 활동가', '실패를 빨리 털어내는 낙천가', '감정 표현이 솔직한 분위기 메이커'],
      history: [{ title: '익스트림 스포츠부', body: '속도와 균형 감각이 필요한 종목에서 뛰어난 실력을 보이며 동아리의 분위기 메이커로 활동한다.' }, { title: '천공의 탑', body: '붕괴 수로와 수몰 구역도 새로운 코스로 여기며 탐색에 적극적으로 나선다.' }],
      skills: [
        { type: '기본공격', name: '샤크 커터', trigger: '상시', body: '워터보드를 회전시켜 날카로운 물결을 발사한다.', effects: ['중거리 단일 공격', '표식 부여 가능', '파도 게이지 획득'] },
        { type: '액티브', name: '샤크 서핑 러시', trigger: '파도 게이지 100', body: '적진을 가로지르며 경로상의 적에게 피해와 약화 효과를 준다.', effects: ['경로 피해', '방어력 감소', '후열 표식', '사용 후 회피 증가'] },
        { type: '패시브', name: '파도 추진', trigger: '기본공격 적중 또는 이동', body: '파도 게이지에 따라 회피율과 공격속도가 상승한다.', effects: ['이동 기반 성장', '공격속도 증가', '회피율 증가'] }
      ],
      strengths: ['뛰어난 기동력', '표식과 방어력 감소를 통한 파티 보조', '다양한 전술 시너지 적응력'], weaknesses: ['낮은 정면 유지력', '이동 제한 효과에 취약', '전문 딜러보다 낮은 단일 폭딜'],
      protocols: ['기동', '제압'], tags: ['중거리', '이동', '방어력 감소', '상어 수인'],
      internal: { code: 'PC1021', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: 'TBD', measurements: 'TBD', illustrator: 'TBD', voice: 'TBD', range: '중거리', status: 'TBD · 기존 위키 기준', source: '01_Wiki/03_Characters/아쿠아 리오.md', note: '소스 문서에서 표기가 아쿠아리오/아쿠아 리오로 혼재. 표시명은 띄어쓰기 버전으로 통일.' }
    },
    {
      id: 'haru-nene',
      name: '하루 네네', nameEn: 'Haru Nene', quote: '잠깐만요! 이 장면, 완전 베스트 컷이에요!',
      image: 'assets/images/characters/하루 네네.png', color: '#ef799b', rarity: '스탠다드',
      school: '루미나리에 여학원', club: '방송사진부', major: '관제학', role: '원거리 버퍼',
      position: '원거리 버퍼 / 현장 기록자', species: '친칠라 세리안', weaponType: '카메라', weapon: '스냅 하트',
      summary: '카메라로 적의 약점을 포착하고 아군의 공격속도를 높이는 밝고 직관적인 관제학 버퍼.',
      overview: ['루미나리에 여학원 소속 관제학 학생으로, 카메라를 이용해 전술 지원을 제공한다.', '초기 프로토타입부터 등장하며 복잡한 조건보다 직관적인 버프와 표식 지원을 담당한다.'],
      appearance: '부드러운 갈색 머리와 큰 눈, 친칠라를 연상시키는 둥근 귀와 풍성한 꼬리가 특징이다. 분홍색과 하늘색의 활동적인 교복을 입는다.',
      personality: ['밝고 명랑한 분위기 메이커', '새로운 장면에 대한 호기심', '중요한 순간을 놓치지 않는 관찰력'],
      history: [{ title: '방송사진부', body: '전투 훈련과 원정 기록을 맡는 현장 리포터로 활동하며 사진은 훈련 분석 자료로도 활용된다.' }, { title: '천공의 탑', body: '위험한 전장을 두려워했지만 동료들의 싸움을 기록하고 돕는 것 역시 자신의 역할이라고 받아들인다.' }],
      skills: [
        { type: '기본공격', name: '포토 플래시', trigger: '상시', body: '카메라 플래시로 가장 가까운 적에게 에너지 피해를 준다.', effects: ['원거리 단일 공격', '낮은 확률로 표식', '낮은 직접 피해'] },
        { type: '액티브', name: '스마일! 베스트 컷', trigger: '전투 시작 후 9초마다', body: '전장 전체를 촬영해 아군을 강화하고 가장 위협적인 적의 약점을 노출한다.', effects: ['아군 공격속도 증가', '명중·집중 보조', '고위협 적 표식', '받는 피해 증가'] },
        { type: '패시브', name: '베스트 샷', trigger: '아군 공격 중 일정 주기', body: '결정적인 순간을 촬영해 표식과 짧은 공격속도 버프를 제공한다.', effects: ['자동 전투 보조', '표식 지원', '꾸준한 버프'] }
      ],
      strengths: ['복잡한 조건이 없는 쉬운 운용', '대부분의 파티에 맞는 범용성', '표식과 공격속도 지원'], weaknesses: ['낮은 직접 화력', '강한 한방 버프 부족', '표식 면역 적에게 효율 감소'],
      protocols: ['보조', '제압', '에너지'], tags: ['원거리', '버퍼', '카메라', '공격속도'],
      internal: { code: 'PC1022', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: 'TBD', measurements: 'TBD', illustrator: 'TBD', voice: 'TBD', range: '원거리', status: 'TBD · 기존 위키 기준', source: '01_Wiki/03_Characters/하루 네네.md', note: '초기 프로토타입용 표준 관제학 버퍼. 오필리아보다 직관적이고 낮은 상한을 의도.' }
    },
    {
      id: 'shirakami-rei',
      name: '시라카미 레이', nameEn: 'Shirakami Rei', quote: '규칙은 지키라고 있는 거야. 어기겠다면, 내가 직접 가르쳐줄게.',
      image: 'assets/images/characters/시라카미 레이.png', color: '#e24a4a', rarity: 'Core-V',
      school: '텐도잔 학원', club: '학생회', major: '강습학', role: 'Core-V 처형 딜러',
      position: '근접 폭발 딜러 / 규율 집행자', species: '구미호 세리안', weaponType: '죽도·벌점 공책', weapon: '별도 전용무기 없음',
      summary: '벌점을 누적한 고위협 적을 강력한 징계집행으로 처형하는 텐도잔 학원의 학생회장.',
      overview: ['텐도잔 학원 학생회장이자 세계관 최상위 학생 이능력자 Core-V 중 한 명이다.', '여유로운 미소와 장난기를 보이지만 규칙을 어긴 학생에게는 누구보다 엄격하다.'],
      appearance: '긴 은백색 머리와 여우 귀, 풍성한 꼬리가 특징인 구미호 세리안. 이능 개방 시 귀와 꼬리 끝에 붉은 불꽃이 피어오른다.',
      personality: ['침착하고 여유로운 태도', '질서에 관해서는 단호하고 엄격함', '장난스러운 압박을 즐기는 리더'],
      history: [{ title: '학생회', body: '문제아 관리, 교내 질서 유지, 외부 작전 조율을 담당하며 벌점 공책은 학생들의 공포의 대상이다.' }, { title: 'Core-V', body: '각 학원과 세력의 균형에 영향을 줄 수 있는 특급 전력 중 규율과 제압에 특화된 인물이다.' }, { title: '천공의 탑', body: '탑을 학생들이 감당해야 할 책임과 시험의 장소로 바라본다.' }],
      skills: [
        { type: '기본공격', name: '홍련 죽도술', trigger: '상시', body: '죽도에 붉은 불꽃을 둘러 가까운 적을 빠르게 타격한다.', effects: ['근거리 단일 공격', '화염 피해', '벌점 대상 추가 피해'] },
        { type: '액티브', name: '구미호식 징계집행', trigger: '벌점 5중첩 대상 존재', body: '벌점이 가장 높은 적에게 파고들어 강력한 연속 참격을 가한다.', effects: ['중첩 비례 추가 피해', '엘리트·보스 추가 피해', '처치 시 화염 피해와 표식'] },
        { type: '패시브', name: '징계명부', trigger: '고위협 적의 행동', body: '가장 위협적인 적에게 벌점을 기록하고 누적할수록 피해를 증폭한다.', effects: ['고위협 적 집중', '벌점 누적', '최대 중첩에서 스킬 강화'] }
      ],
      strengths: ['강력한 단일 제압력', '엘리트·보스 대응력', '표식·화염·폭발 전술 연계'], weaknesses: ['벌점 누적 전 예열 필요', '다수의 약한 적 상대로 과투자 가능성'],
      protocols: ['화염', '제압', '화력'], tags: ['근접', '처형', '구미호', 'Core-V'],
      internal: { code: 'PC1031', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: 'TBD', measurements: 'TBD', illustrator: 'TBD', voice: 'TBD', range: '근거리', status: 'TBD · 기존 위키 기준', source: '01_Wiki/03_Characters/시라카미 레이.md', note: '고성능 Core-V 캐릭터. 문서 DB의 패시브명이 공포의 공책/징계명부로 혼재되어 위키 최신 서술인 징계명부를 사용.' }
    },
    {
      id: 'kazamine-rubia',
      name: '카자미네 루비아', nameEn: 'Kazamine Rubia', quote: '뒤는 맡겨. 적어도 내가 쓰러지기 전까지는.',
      image: 'assets/images/characters/카자미네 루비아.png', color: '#b43b42', rarity: '스타팅',
      school: '발할라 아카데미', club: '기사단', major: '방호학', role: '메인 탱커',
      position: '전열 방호 탱커', species: '인간', weaponType: '방패', weapon: '레드 퀸',
      summary: '도발과 보호막, 피격 중첩을 활용해 파티의 최전선을 지키는 발할라 아카데미의 방호학 학생.',
      overview: ['발할라 아카데미 출신의 방호학 학생으로 최전선에서 공격을 받아낸다.', '거칠어 보이는 외형과 달리 책임감이 강하고 후배들을 세심하게 챙긴다.'],
      appearance: '붉은 장발과 금빛 눈동자, 큰 신장과 모델 같은 체형이 특징이다. 개조 교복 위에 긴 망토와 방호 장비를 착용한다.',
      personality: ['전투에서 먼저 나서는 책임감', '후배를 살뜰히 챙기는 다정함', '강한 상대를 즐기는 승부욕'],
      history: [{ title: '발할라 아카데미', body: '높은 방호 능력과 책임감으로 전열을 맡으며 후배들에게 의지가 되는 선배로 평가받는다.' }, { title: '천공의 탑', body: '원정 스쿼드의 방패가 되어 적의 시선을 자신에게 집중시킨다.' }],
      skills: [
        { type: '기본공격', name: '레드 퀸 강타', trigger: '상시', body: '가장 가까운 적에게 접근해 방패로 강하게 타격한다.', effects: ['근거리 단일 공격', '높은 안정성', '반격·도발 연계'] },
        { type: '액티브', name: '가디언 브레이크', trigger: '피격 5회 후', body: '방패를 지면에 내려찍어 주변 적을 도발하고 보호막을 얻는다.', effects: ['주변 도발', '보호막과 피해 감소', '짧은 반격 강화'] },
        { type: '패시브', name: '철벽', trigger: '피격', body: '피해를 받을 때마다 철벽 중첩을 얻어 받는 피해를 줄인다.', effects: ['피격 기반 피해 감소', '최대 중첩 보호막', '장기전 강화'] }
      ],
      strengths: ['매우 높은 생존력', '도발을 통한 파티 보호', '피격을 공격 기회로 바꾸는 반격'], weaknesses: ['낮은 순수 공격력', '상태이상 대응 수단 부족'],
      protocols: ['방호', '보조'], tags: ['근접', '탱커', '도발', '보호막'],
      internal: { code: 'PC1041', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: 'TBD', measurements: 'TBD', illustrator: 'TBD', voice: 'TBD', range: '근거리', status: 'TBD · 기존 위키 기준', source: '01_Wiki/03_Characters/카자미네 루비아.md', note: '프로토타입 기준 가장 안정적인 메인 탱커. 상태이상 취약점은 모듈로 보완.' }
    },
    {
      id: 'akatsuki-ren',
      name: '아카츠키 렌', nameEn: 'Akatsuki Ren', quote: '이길 수 있는데 굳이 위험하게 싸울 필요가 있어?',
      image: null, color: '#8b2738', rarity: '스타팅',
      school: '크림슨 아카데미', club: '게임개발부', major: '강습학', role: '근접 전격 딜러',
      position: '암살자 / 처형 딜러', species: '인간', weaponType: '검', weapon: '블랙 스파크',
      summary: '감전 대상에게 에너지를 빠르게 축적해 고위협 적을 처형하는 냉철한 근접 딜러.',
      overview: ['높은 기동성과 치명타를 활용하는 크림슨 아카데미의 강습학 학생이다.', '정면 돌파를 선호하는 카롯과 달리 가장 효율적인 승리 방법을 찾는다.'],
      appearance: '흑적색 장발과 붉은 눈동자, 날카로운 눈매가 특징이다. 교복 위에 실용적인 후드 재킷을 착용한다.',
      personality: ['겉으로 무관심한 냉소가', '결과를 중시하는 현실주의자', '강한 경쟁심과 숨겨진 배려심'],
      history: [{ title: '게임개발부', body: '게임 제작을 좋아해 부실에 틀어박혀 밤을 새우는 일이 많다.' }, { title: '천공의 탑', body: '전투 패턴을 빠르게 분석하고 효율적인 공략법을 연구한다.' }],
      skills: [
        { type: '기본공격', name: '블랙 스파크 참격', trigger: '상시', body: '검에 전격을 둘러 가까운 적을 빠르게 벤다.', effects: ['근거리 단일 공격', '전격 속성', '감전 연계 에너지 획득'] },
        { type: '액티브', name: '썬더 브레이커', trigger: '에너지 최대치', body: '가장 위협적인 적에게 돌진해 강력한 전격 참격을 가한다.', effects: ['고공격력 적 우선', '감전 부여', '저체력 대상 추가 피해'] },
        { type: '패시브', name: '결투 전압', trigger: '기본공격 적중', body: '적중 시 에너지를 얻고 감전 상태 적을 공격하면 추가 에너지를 얻는다.', effects: ['에너지 획득', '감전 연계', '스킬 주기 단축'] }
      ],
      strengths: ['높은 순간 화력', '보스와 고체력 적 처치', '우수한 기동성'], weaknesses: ['낮은 생존력', '부족한 광역 성능'],
      protocols: ['전격', '화력', '기동'], tags: ['근접', '감전', '돌진', '처형'],
      internal: { code: 'PC1051', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: 'TBD', measurements: 'TBD', illustrator: 'TBD', voice: 'TBD', range: '근거리', status: 'TBD · 기존 위키 기준', source: '01_Wiki/03_Characters/아카츠키 렌.md', note: '소스 하단의 구형 스킬명 약점 간파/데드 아이와 최신 전투 정보가 충돌. 최신 DB 기준을 사용.' }
    },
    {
      id: 'shiranui-kaede',
      name: '시라누이 카에데', nameEn: 'Shiranui Kaede', quote: '보이지 않는다고 해서 존재하지 않는 것은 아니에요.',
      image: null, color: '#6d283e', rarity: '스타팅',
      school: '음양학원', club: '초자연연구부', major: '이상학', role: '상태이상 딜러',
      position: '중거리 상태이상 딜러', species: '인간', weaponType: '부적', weapon: '봉마의 부적',
      summary: '여러 상태이상을 부여·확산하고 이상 현상을 감지하는 음양학원의 이상학 학생.',
      overview: ['상태이상과 특수 현상을 연구하는 초자연연구부 소속 학생이다.', '평소 조용하지만 대균열과 천공의 탑 이야기가 나오면 놀라울 정도로 적극적이다.'],
      appearance: '긴 흑발과 붉은 눈동자의 동양적인 인상. 교복 위에 여러 부적과 영적 매개체를 착용한다.',
      personality: ['필요한 말만 하는 조용한 성격', '남들이 놓치는 것을 찾는 관찰력', '미지의 현상에 대한 강한 호기심'],
      history: [{ title: '초자연연구부', body: '학생 신분임에도 연구부 내에서 상당한 영향력을 가지고 있다.' }, { title: '천공의 탑', body: '다른 학생들이 인식하지 못하는 현상을 목격했다고 주장한다.' }],
      skills: [
        { type: '기본공격', name: '봉마의 부적', trigger: '상시', body: '가장 가까운 적에게 부적을 날려 무작위 상태이상을 부여한다.', effects: ['중거리 마법 피해', '무작위 상태이상', '영시 연계'] },
        { type: '액티브', name: '봉마진', trigger: '상태이상 적 3명 이상', body: '적이 모인 지점에 결계를 펼쳐 여러 상태이상을 부여한다.', effects: ['범위 마법 피해', '화상·감전·빙결·중독', '상태이상 대상 추가 피해와 확산'] },
        { type: '패시브', name: '영시(靈視)', trigger: '상태이상 적 공격', body: '상태이상 대상에게 추가 피해를 주고 효과 하나를 주변으로 전이한다.', effects: ['상태이상 대상 강화', '확산', '다속성 빌드 연계'] }
      ],
      strengths: ['다양한 상태이상 활용', '상태이상 빌드의 핵심 연계', '우수한 광역 약화'], weaknesses: ['낮은 즉발 화력', '상태이상 면역 적에게 취약'],
      protocols: ['화염', '전격', '빙결', '독성'], tags: ['중거리', '상태이상', '확산', '마법 피해'],
      internal: { code: 'PC1061', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: 'TBD', measurements: 'TBD', illustrator: 'TBD', voice: 'TBD', range: '중거리', status: 'TBD · 기존 위키 기준', source: '01_Wiki/03_Characters/시라누이 카에데.md', note: '파괴자와 연결된 복선 담당. 스포일러 정보는 외부 공개 문서와 분리 필요.' }
    },
    {
      id: 'ophelia-chronos',
      name: '오필리아 크로노스', nameEn: 'Ophelia Chronos', quote: '우연은 존재하지 않아요. 단지 아직 계산하지 못한 변수일 뿐.',
      image: null, color: '#7662b5', rarity: '스타팅',
      school: '세인트 아르카디아', club: '학생회', major: '관제학', role: '전략 지원형 서포터',
      position: '버퍼 / 전략 지원', species: '인간', weaponType: '마도서', weapon: '크로노스 코드',
      summary: '전장의 변수를 계산해 공격력·에너지·스킬 회전을 동시에 끌어올리는 전략형 서포터.',
      overview: ['세인트 아르카디아 학생회 소속의 관제학 학생이다.', '뛰어난 지성과 판단력으로 움직이는 전략본부라 불리며 전장의 흐름을 통제한다.'],
      appearance: '은빛 장발과 보라색 눈동자. 단정한 자세와 정규 교복, 학생회 완장이 특징이다.',
      personality: ['감정보다 논리를 우선하는 냉철함', '예상 밖의 상황을 싫어하는 완벽주의', '학생회 간부로서 강한 책임감'],
      history: [{ title: '세인트 아르카디아', body: '아카데미아 내에서도 손꼽히는 우등생으로 알려져 있다.' }, { title: '학생회', body: '정보를 동시에 처리하고 작전 변수를 정리해 원정대의 의사결정을 지원한다.' }],
      skills: [
        { type: '기본공격', name: '크로노스 코드', trigger: '상시', body: '마도서를 펼쳐 가까운 적에게 시간 에너지 탄환을 발사한다.', effects: ['원거리 단일 공격', '에너지 속성', '낮은 직접 피해'] },
        { type: '액티브', name: '오버클럭 브리핑', trigger: '전투 시작 후 10초마다', body: '아군 전체에 최적의 행동 지시를 내려 전투 성능을 강화한다.', effects: ['공격력 증가', '에너지 획득 증가', '쿨타임 회복 가속', '활성 시너지 보너스'] },
        { type: '패시브', name: '전술 예측', trigger: '아군 스킬 사용', body: '스킬을 사용한 아군의 공격력과 에너지 획득량을 높인다.', effects: ['스킬 회전 연계', '공격력 강화', '파티 전체 효율 증가'] }
      ],
      strengths: ['어떤 파티에도 맞는 범용성', '시너지와 스킬 회전 강화', '꾸준한 파티 성능 상승'], weaknesses: ['낮은 직접 화력', '핵심 딜러의 성능에 의존'],
      protocols: ['보조', '에너지', '기동'], tags: ['원거리', '버퍼', '에너지', '쿨타임'],
      internal: { code: 'PC1071', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: 'TBD', measurements: 'TBD', illustrator: 'TBD', voice: 'TBD', range: '원거리', status: 'TBD · 기존 위키 기준', source: '01_Wiki/03_Characters/오필리아 크로노스.md', note: '상한이 높은 전략 버퍼. 프로토콜 보너스 수치와 중첩 규칙 확정 필요.' }
    },
    {
      id: 'elina-astra',
      name: '엘리나 아스트라', nameEn: 'Elina Astra', quote: '괜찮아요. 제가 있으니까.',
      image: null, color: '#d0a640', rarity: '스타팅',
      school: '세인트 아르카디아', club: '천문부', major: '구호학', role: '메인 힐러',
      position: '회복·보호막 지원', species: '인간', weaponType: '스태프', weapon: '스타 폴',
      summary: '위기에 처한 아군을 크게 회복하고 초과 회복을 보호막으로 바꾸는 파티 생존의 중심.',
      overview: ['세인트 아르카디아 소속 구호학 학생으로 뛰어난 치유와 보호 능력을 보유했다.', '상냥하고 따뜻한 태도로 학생들 사이에서 성녀, 천사, 이동식 응급실이라 불린다.'],
      appearance: '긴 금발과 하늘색 눈동자가 특징. 흰색 중심의 교복과 의료용 장비, 마도 장치를 함께 사용한다.',
      personality: ['누구에게나 친절한 상냥함', '타인을 먼저 생각하는 책임감', '생명과 관련된 문제에서는 완고함'],
      history: [{ title: '세인트 아르카디아', body: '입학 직후부터 뛰어난 치유 능력으로 주목받았다.' }, { title: '천문부', body: '별을 관찰하는 것을 좋아해 야간 관측 활동에 자주 참여한다.' }, { title: '천공의 탑', body: '여러 원정에서 부상자를 치료해 엘리나가 있는 원정은 생존률이 높다는 평가를 받는다.' }],
      skills: [
        { type: '기본공격', name: '스타 볼트', trigger: '상시', body: '별빛 탄환을 발사해 가까운 적에게 낮은 에너지 피해를 준다.', effects: ['원거리 단일 공격', '에너지 속성', '낮은 직접 피해'] },
        { type: '액티브', name: '스타 레인', trigger: '아군 체력 50% 이하', body: '가장 위급한 아군을 크게 회복하고 파티 전체에 회복과 보호막을 준다.', effects: ['최저 체력 아군 집중 회복', '전체 회복', '보호막', '약한 상태이상 해제'] },
        { type: '패시브', name: '별빛의 축복', trigger: '저체력 아군 회복', body: '체력이 낮은 아군의 회복량을 높이고 초과분 일부를 보호막으로 전환한다.', effects: ['저체력 회복 강화', '과잉 회복 보호막 전환', '장기전 유지력'] }
      ],
      strengths: ['뛰어난 장기전 유지력', '높은 범용성', '회복·보호막·정화 동시 제공'], weaknesses: ['매우 낮은 직접 화력', '생존이 충분할 때 과잉 회복 가능'],
      protocols: ['보조', '방호', '에너지'], tags: ['원거리', '힐러', '보호막', '정화'],
      internal: { code: 'PC1081', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: 'TBD', measurements: 'TBD', illustrator: 'TBD', voice: 'TBD', range: '원거리', status: 'TBD · 기존 위키 기준', source: '01_Wiki/03_Characters/엘리나 아스트라.md', note: '스타팅 6인 중 순수 힐러. 초과 회복 보호막의 상한과 정화 가능한 상태이상 등급 확정 필요.' }
    }
  ]
};

/* v2.3에서 개별 확정을 확인할 수 없는 프로필·아트 필드는 TBD로 통일합니다. */
window.WIKI_DATA.characters.forEach((character) => {
  character.gender ??= '여성';
  character.coreColor ??= 'TBD';
  character.palette ??= ['#3f3f3f', '#666666', '#8c8c8c', '#b3b3b3', '#d9d9d9'];
  character.protocolStatus ??= '후속 설계';
  character.resource ??= {
    bodyType: 'TBD',
    proportions: 'TBD',
    silhouette: 'TBD',
    hairAndEyes: 'TBD',
    costumeBreakdown: 'TBD',
    propBreakdown: 'TBD',
    materialNotes: 'TBD',
    vfxNotes: 'TBD',
    expressionSet: 'TBD',
    riggingNotes: 'TBD',
    assetStatus: '그래픽 추가 예정'
  };
});
