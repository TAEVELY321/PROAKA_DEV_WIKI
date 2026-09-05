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
    source: '통합 게임 디자인 문서 v2.3 · 원작소설 1편 센추리온편',
    sourceDate: '2026.08.20',
    statuses: ['확정', '권장안', '데모 검증', '후속 설계', '그래픽 추가 예정', 'TBD']
  },
  characters: [
    {
      id: 'usami-carrot',
      name: '우사미 카롯', nameEn: 'Usami Carrot', quote: '걱정 마! 내가 전부 뚫어버릴 테니까!',
      image: 'assets/images/characters/우사미 카롯.png', color: '#d53b88', rarity: '대표 캐릭터',
      school: '센추리온 아카데미', club: '센추리온 관광연구회 (설립 신청 중)', major: '강습학', role: '메인 딜러',
      position: '지속 화력형 중거리 딜러', species: '인간', weaponType: '권총', weapon: '래피드 버니',
      summary: '빠른 기본공격과 연속 사격으로 안정적인 피해를 누적하는 센추리온 아카데미의 강습학 학생.',
      overview: ['프로젝트: 아카데미아의 플레이어블 캐릭터이자 대표 캐릭터이다.', '밝고 적극적인 성격과 뛰어난 전투 감각을 지닌 이능력자. 위험한 상황에서도 가장 먼저 앞으로 뛰어나가며 동료를 지키기 위해 몸을 사리지 않는다.'],
      appearance: '연분홍색 단발과 양갈래 묶음머리, 붉은 눈동자, 커다란 토끼 귀 모티프 헤어 장식이 특징이다. 자홍색 재킷과 주황색 포인트, 비대칭 레그웨어를 사용한다.',
      personality: ['밝고 사교적이며 책임감이 강하다.', '누군가를 혼자 두지 못하고 위험한 상황에서도 먼저 손을 내민다.', '허술한 면이 있지만 실패를 빠르게 웃음으로 바꾸는 낙천가다.'],
      personalityKeywords: ['밝음', '사교적', '책임감', '낙천적'],
      moeElements: ['토끼 모티프', '당근형 쌍권총', '길 안내 담당', '덜렁이 리더'],
      novelHistory: [
        { title: '코디네이터의 현지 안내', body: '센추리온역에서 길을 잃은 코디네이터를 처음 발견하고 현지 안내 담당으로 맞이한다. 이후 ‘선생님’이라는 호칭을 가장 먼저 정착시킨다.' },
        { title: '시도 아야네와 특별조사팀', body: '폭주 위기에 놓인 아야네의 곁을 지키고 루비아와 함께 첫 균열을 막는다. 구 관측동 조사와 학생 대피를 거쳐 센추리온 균열사태 특별조사팀의 핵심 구성원이 된다.' },
        { title: '센추리온 크라운 전투', body: '쌍권총으로 관측장치를 파괴하고 루비아의 샷건 블레이드에 탄환을 도탄시키는 즉흥 전술로 최종전의 돌파구를 만든다.' },
        { title: '사건 이후', body: '센추리온 관광연구회의 공식 동아리 설립 신청서를 제출하고 코디네이터의 다음 여정을 배웅한다.' }
      ],
      history: [{ title: '게임 본편', body: '게임 본편 시점의 개별 작중 행적은 TBD.', status: 'TBD' }],
      skills: [
        { type: '기본공격', name: '당근권총 사격', trigger: '상시', body: '가장 가까운 적을 향해 빠르게 권총을 사격한다.', effects: ['중거리 단일 공격', '빠른 공격 속도', '적중 효과와 높은 궁합'] },
        { type: '액티브', name: '풀 버스트 러시', trigger: '기본공격 3회 후 자동 발동', body: '대상에게 빠른 연속 사격을 가해 순간 화력을 집중한다.', effects: ['연속 사격', '기본공격 피해 연계', '짧은 스킬 주기'] },
        { type: '패시브', name: '전투 본능', trigger: '기본공격 적중', body: '기본공격 시 전투 본능 중첩을 얻어 공격 템포를 끌어올린다.', effects: ['기본공격 중첩', '공격속도 성장', '스킬 회전 보조'] }
      ],
      strengths: ['쉬운 운용과 안정적인 지속 화력', '공격속도·적중 효과 빌드 적응력', '초반 친화적인 스킬 구조'],
      weaknesses: ['단독 생존력이 낮음', '순간 폭발력은 전문 처형 딜러보다 낮음'],
      protocols: ['화염', '전격', '연쇄'], tags: ['중거리', '연속 사격', '공격속도', '스타팅'],
      coreColor: '#c42670', palette: ['#4a3644', '#c42670', '#ef9cc6', '#f57b3a', '#fff4ee'],
      resource: { bodyType: '소형·경쾌한 실루엣', proportions: 'SD 3.5~4등신', silhouette: '대형 토끼 귀 장식, 양갈래 컬, 쌍권총', hairAndEyes: '연분홍 머리 / 자홍색 눈', costumeBreakdown: '자홍 재킷, 세일러 상의, 주름치마, 비대칭 스타킹', propBreakdown: '당근형 쌍권총, 헤드셋, 무릎 단말', materialNotes: '재킷은 무광 직물, 장식·총기는 반광 플라스틱/금속', vfxNotes: '자홍·주황 사격광과 푸른 방호 UI를 구분', expressionSet: '활짝 웃음, 당황, 걱정, 결의, 울먹임, 장난', riggingNotes: '귀 장식과 양갈래 컬의 과도한 관통 방지', assetStatus: '그래픽 추가 예정' },
      internal: { code: 'PC1001', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: '155cm', measurements: '82-56-83', illustrator: 'TBD', voice: 'TBD', range: '중거리', status: '소설 설정 반영 · 게임 세부 TBD', source: '원작소설 1편 센추리온편 · 01_Wiki/03_Characters/우사미 카롯.md', note: '대표 캐릭터. 소설에서는 센추리온 관광연구회 설립을 준비 중이며 쌍권총을 사용한다.' }
    },
    {
      id: 'shido-ayane',
      name: '시도 아야네', nameEn: 'Shido Ayane', quote: '…다가오지 마. 지금은 나도, 내가 무서우니까.',
      image: 'assets/images/characters/시도 아야네.png', color: '#8f3449', rarity: '메인',
      school: '센추리온 아카데미', club: 'TBD', major: '강습학', role: '버서커 브루저',
      position: '근접 버서커 브루저 / 전열 돌파자', species: '인간', weaponType: '대형 부스트 액스', weapon: '특례제압무장 AX-13',
      summary: '거대한 도끼와 부스터로 전열을 돌파하고 상흔 게이지가 차면 버서커 상태에 돌입하는 강습학 학생.',
      overview: ['센추리온 아카데미 내에서도 독보적인 근접 전투 재능을 지닌 학생이다.', '무뚝뚝하고 타인과 거리를 두지만, 관심을 받은 경험이 적어 표현 방법에 서툰 인물이다.'],
      appearance: '짙은 흑갈색 장발과 분홍색 안쪽 머리, 붉은 눈동자, X자 헤어핀이 특징이다. 어두운 크롭 교복과 붉은 리본, 제어 장치를 착용하며 초대형 부스트 액스를 운용한다.',
      personality: ['무뚝뚝하고 경계심이 강하며 타인과 거리를 둔다.', '자신의 힘으로 누군가가 다치는 것을 누구보다 두려워한다.', '말수는 적지만 친구를 지키려는 의지가 강하고 신뢰에는 행동으로 답한다.'],
      personalityKeywords: ['무뚝뚝', '경계심', '자기희생', '보호 본능'],
      moeElements: ['쿨데레', 'X자 헤어핀', '초대형 도끼', '작은 성공에 보이는 미소'],
      novelHistory: [
        { title: '특례관찰대상 S-13', body: '어린 시절 공명실험 사고 뒤 강력한 이능을 위험시당해 봉인 장치와 관리번호 아래 격리·관찰되었다. 제4훈련장에서 외부 명령으로 봉인이 해제되지만 코디네이터와 친구들의 도움으로 처음 힘을 통제한다.' },
        { title: '자신의 무기를 되찾다', body: '특례보관고에 봉인된 AX-13 부스트 액스를 되찾고, 사라지기만을 바라던 힘을 친구를 지키는 데 쓰기로 결심한다.' },
        { title: '폭주의 진실', body: '센추리온 중심부에서 일곱 살 때의 공명실험 기록을 확인한다. 사고가 자신의 잘못만이 아니었음을 받아들이고 오필리아에게도 모든 진실을 들은 뒤 판단하겠다고 말한다.' },
        { title: '기록에 없는 승리', body: '동료들과 함께 센추리온 크라운의 중심핵을 파괴하고 광역 균열을 닫는다. 사건 뒤 제한 훈련을 시작하며 지키고 싶은 사람들을 위해 힘을 익히기로 한다.' }
      ],
      history: [{ title: '게임 본편', body: '게임 본편 시점의 개별 작중 행적은 TBD.', status: 'TBD' }],
      skills: [
        { type: '기본공격', name: '리코일 액스', trigger: '상시', body: '거대한 도끼로 전방의 적을 강하게 타격하고 작은 충격파를 일으킨다.', effects: ['강한 단일 타격', '소형 범위 피해', '버서커 상태에서 템포 증가'] },
        { type: '액티브', name: '브레이크 다운 블러드', trigger: '상흔 게이지 100', body: '부스터를 점화해 돌진·내려찍기 후 일정 시간 버서커 상태에 들어간다.', effects: ['돌진 후 범위 강타', '공격력·공격속도 증가', '흡혈', '종료 후 탈진'] },
        { type: '패시브', name: '상흔 과부하', trigger: '피격 또는 전투 지속', body: '상흔 게이지가 높아질수록 공격력이 증가하고 최대치에서 액티브가 발동한다.', effects: ['피격 기반 성장', '저체력 고화력', '장기전 강화'] }
      ],
      strengths: ['후반에 강해지는 폭발적인 전투력', '높은 돌파력과 범위 압박', '흡혈 기반 자기 회복'], weaknesses: ['게이지 전 생존 관리 필요', '버서커 종료 후 탈진 구간'],
      protocols: ['방호', '화력', '기동'], tags: ['근접', '버서커', '부스트 액스', 'S-13'],
      coreColor: '#a92f45', palette: ['#302d35', '#a92f45', '#c8849c', '#e5d7d2', '#d0aa56'],
      resource: { bodyType: '소형 체형과 초대형 무장의 대비', proportions: 'SD 3.5~4등신', silhouette: '바닥까지 내려오는 장발, X자 핀, 거대 부스트 액스', hairAndEyes: '흑갈색+분홍 인너 / 붉은 눈', costumeBreakdown: '어두운 크롭 교복, 넓은 소매, 붉은 리본, 제어 장치', propBreakdown: 'AX-13 도끼날·손잡이·복수 부스터·봉인 단말', materialNotes: '교복은 무광, 제어 장치와 도끼는 중량감 있는 금속', vfxNotes: '검붉은 이능, 과출력 경고 적색, 부스터 화염을 분리', expressionSet: '무표정, 경계, 공포, 분노, 안도, 옅은 미소', riggingNotes: '긴 머리와 도끼 회전 반경, 손목·발목 장치 간섭 주의', assetStatus: '그래픽 추가 예정' },
      internal: { code: 'PC1012', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: '153cm', measurements: '79-54-80', illustrator: 'TBD', voice: 'TBD', range: '근거리', status: '소설 설정 반영 · 게임 세부 TBD', source: '원작소설 1편 센추리온편 · 01_Wiki/03_Characters/시도 아야네.md', note: 'S-13, 유년기 공명실험, 봉인 장치, AX-13은 원작소설 핵심 스포일러다. 외부 공개 범위를 별도 검토한다.' }
    },
    {
      id: 'aqua-rio',
      name: '아쿠아 리오', nameEn: 'Aqua Rio', quote: '가만히 있으라고? 그건 나한테 제일 어려운 작전인데!',
      image: 'assets/images/characters/아쿠아 리오.png', color: '#22aecd', rarity: '스탠다드',
      school: '루미나리에 여학원', club: 'TBD', major: '공작학', role: '기동 교란 딜러',
      position: '중거리 기동 교란 딜러', species: '상어 세리안', weaponType: '워터보드 코어', weapon: '블루 핀 라이더',
      summary: '워터보드로 전장을 빠르게 이동하고 표식·방어력 감소로 적 진형을 흔드는 상어 세리안.',
      overview: ['루미나리에 여학원 소속 공작학 학생이다.', '수압 조작형 이능과 뛰어난 균형 감각으로 무기 없이도 날카로운 물결을 만들어 공격한다.'],
      appearance: '푸른색 장발과 눈동자, 상어 꼬리와 지느러미 장식이 특징이다. 교복을 스포츠웨어처럼 개조하고 특수 워터보드를 탄다.',
      personality: ['한시도 가만히 있지 못하는 활동가', '실패를 빨리 털어내는 낙천가', '감정 표현이 솔직한 분위기 메이커'],
      personalityKeywords: ['활동적', '낙천적', '솔직함', '도전적'],
      moeElements: ['상어 모티프', '지느러미 귀', '워터보드', '스포츠웨어 교복'],
      novelHistory: [{ title: '미등장', body: '원작소설 1편 「센추리온편」에는 등장하지 않는다.' }],
      history: [{ title: '게임 본편', body: '게임 본편 시점의 개별 작중 행적과 동아리는 TBD.', status: 'TBD' }],
      skills: [
        { type: '기본공격', name: '샤크 커터', trigger: '상시', body: '워터보드를 회전시켜 날카로운 물결을 발사한다.', effects: ['중거리 단일 공격', '표식 부여 가능', '파도 게이지 획득'] },
        { type: '액티브', name: '샤크 서핑 러시', trigger: '파도 게이지 100', body: '적진을 가로지르며 경로상의 적에게 피해와 약화 효과를 준다.', effects: ['경로 피해', '방어력 감소', '후열 표식', '사용 후 회피 증가'] },
        { type: '패시브', name: '파도 추진', trigger: '기본공격 적중 또는 이동', body: '파도 게이지에 따라 회피율과 공격속도가 상승한다.', effects: ['이동 기반 성장', '공격속도 증가', '회피율 증가'] }
      ],
      strengths: ['뛰어난 기동력', '표식과 방어력 감소를 통한 파티 보조', '다양한 전술 시너지 적응력'], weaknesses: ['낮은 정면 유지력', '이동 제한 효과에 취약', '전문 딜러보다 낮은 단일 폭딜'],
      protocols: ['기동', '제압'], tags: ['중거리', '이동', '방어력 감소', '상어 수인'],
      coreColor: '#315fc4', palette: ['#263651', '#315fc4', '#51a9dc', '#ef6f66', '#d8ecb7'],
      resource: { bodyType: '민첩한 스포츠형', proportions: 'SD 3.5~4등신', silhouette: '상어 지느러미 귀, 장식 꼬리, 워터보드', hairAndEyes: '네이비+코발트 머리 / 보라·파랑 오드아이', costumeBreakdown: '크롭 세일러복, 스포츠 쇼츠, 수상 장비 스트랩', propBreakdown: '워터보드 코어, 관절 보호대, 추진 노즐', materialNotes: '젖은 광택을 과도하게 쓰지 않고 네오프렌과 금속을 구분', vfxNotes: '코발트·시안 수압 궤적과 흰 포말', expressionSet: '활짝 웃음, 도전, 놀람, 장난, 집중, 아쉬움', riggingNotes: '지느러미·보드·긴 머리의 고속 이동 관통 주의', assetStatus: '그래픽 추가 예정' },
      internal: { code: 'PC1021', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: 'TBD', measurements: 'TBD', illustrator: 'TBD', voice: 'TBD', range: '중거리', status: '소설 1편 미등장 · 게임 세부 TBD', source: '01_Wiki/03_Characters/아쿠아 리오.md', note: '원작소설 1편에는 등장하지 않는다. 학교는 사용자 확정값을 반영했고 동아리는 재확인 전까지 TBD.' }
    },
    {
      id: 'haru-nene',
      name: '하루 네네', nameEn: 'Haru Nene', quote: '잠깐만요! 이 장면, 완전 베스트 컷이에요!',
      image: 'assets/images/characters/하루 네네.png', color: '#ef799b', rarity: '스탠다드',
      school: '루미나리에 여학원', club: 'TBD', major: '관제학', role: '원거리 버퍼',
      position: '원거리 버퍼 / 현장 기록자', species: '친칠라 세리안', weaponType: '카메라', weapon: '스냅 하트',
      summary: '카메라로 적의 약점을 포착하고 아군의 공격속도를 높이는 밝고 직관적인 관제학 버퍼.',
      overview: ['루미나리에 여학원 소속 관제학 학생으로, 카메라를 이용해 전술 지원을 제공한다.', '초기 프로토타입부터 등장하며 복잡한 조건보다 직관적인 버프와 표식 지원을 담당한다.'],
      appearance: '부드러운 갈색 머리와 큰 눈, 친칠라를 연상시키는 둥근 귀와 풍성한 꼬리가 특징이다. 분홍색과 하늘색의 활동적인 교복을 입는다.',
      personality: ['밝고 명랑한 분위기 메이커', '새로운 장면에 대한 호기심', '중요한 순간을 놓치지 않는 관찰력'],
      personalityKeywords: ['명랑함', '호기심', '관찰력', '분위기 메이커'],
      moeElements: ['동물 귀', '파스텔 교복', '카메라 소녀', '베스트 컷 집착'],
      novelHistory: [{ title: '미등장', body: '원작소설 1편 「센추리온편」에는 등장하지 않는다.' }],
      history: [{ title: '게임 본편', body: '게임 본편 시점의 개별 작중 행적과 동아리는 TBD.', status: 'TBD' }],
      skills: [
        { type: '기본공격', name: '포토 플래시', trigger: '상시', body: '카메라 플래시로 가장 가까운 적에게 에너지 피해를 준다.', effects: ['원거리 단일 공격', '낮은 확률로 표식', '낮은 직접 피해'] },
        { type: '액티브', name: '스마일! 베스트 컷', trigger: '전투 시작 후 9초마다', body: '전장 전체를 촬영해 아군을 강화하고 가장 위협적인 적의 약점을 노출한다.', effects: ['아군 공격속도 증가', '명중·집중 보조', '고위협 적 표식', '받는 피해 증가'] },
        { type: '패시브', name: '베스트 샷', trigger: '아군 공격 중 일정 주기', body: '결정적인 순간을 촬영해 표식과 짧은 공격속도 버프를 제공한다.', effects: ['자동 전투 보조', '표식 지원', '꾸준한 버프'] }
      ],
      strengths: ['복잡한 조건이 없는 쉬운 운용', '대부분의 파티에 맞는 범용성', '표식과 공격속도 지원'], weaknesses: ['낮은 직접 화력', '강한 한방 버프 부족', '표식 면역 적에게 효율 감소'],
      protocols: ['보조', '제압', '에너지'], tags: ['원거리', '버퍼', '카메라', '공격속도'],
      coreColor: '#ef8fb4', palette: ['#ad967b', '#ef8fb4', '#bde8ec', '#e7b950', '#fff8ea'],
      resource: { bodyType: '작고 부드러운 실루엣', proportions: 'SD 3.5~4등신', silhouette: '큰 동물 귀, 풍성한 꼬리, 카메라', hairAndEyes: '연갈색+분홍 포인트 / 금빛 눈', costumeBreakdown: '분홍 세일러 칼라, 하늘색 리본, 하트 장식 치마', propBreakdown: '카메라 본체, 렌즈, 스트랩, 플래시 모듈', materialNotes: '파스텔 직물과 카메라의 유광 하드서피스 대비', vfxNotes: '하늘색 플래시, 분홍 하트형 초점 프레임', expressionSet: '웃음, 반짝임, 놀람, 집중, 뿌듯함, 당황', riggingNotes: '귀·꼬리 감정 연동과 카메라 스트랩 관통 주의', assetStatus: '그래픽 추가 예정' },
      internal: { code: 'PC1022', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: 'TBD', measurements: 'TBD', illustrator: 'TBD', voice: 'TBD', range: '원거리', status: '소설 1편 미등장 · 게임 세부 TBD', source: '01_Wiki/03_Characters/하루 네네.md', note: '원작소설 1편에는 등장하지 않는다. 학교는 사용자 확정값을 반영했고 동아리는 재확인 전까지 TBD.' }
    },
    {
      id: 'shirakami-rei',
      name: '시라카미 레이', nameEn: 'Shirakami Rei', quote: '규칙은 지키라고 있는 거야. 어기겠다면, 내가 직접 가르쳐줄게.',
      image: 'assets/images/characters/시라카미 레이.png', color: '#d52d3d', rarity: '프라임',
      school: '텐도잔 아카데미아', club: '학생회 (회장)', major: 'TBD', role: '프라임 / 근접 검사',
      position: '근접 참격 딜러 / 조사 지원', species: '구미호 세리안', weaponType: '일본도', weapon: 'TBD',
      summary: '최소한의 움직임으로 균열의 빈틈을 베어내는 텐도잔 아카데미아 학생회장이자 현 프라임.',
      overview: ['텐도잔 아카데미아 학생회장이자 현 프라임의 일원이다.', '중앙의 명령으로 센추리온 균열 조사를 보조하며, 현대 이능력과는 다른 오래된 힘의 흐름을 다룬다.'],
      appearance: '긴 은백색 머리와 동물 귀, 금빛 눈동자가 특징이다. 검은 교복에 붉은 리본과 장식을 사용하며 허리에 일본도를 찬다.',
      personality: ['감정을 크게 드러내지 않고 사실과 현재 상황을 바탕으로 판단한다.', '책임과 임무에 엄격하지만 학생을 도구로 취급하는 방식에는 단호히 맞선다.', '관계 표현에는 서툴지만 동료를 신뢰하면 위험한 순간에도 등을 맡긴다.'],
      personalityKeywords: ['침착함', '진지함', '원칙주의', '과묵함'],
      moeElements: ['은백색 장발', '동물 귀', '무표정 갭', '일본도 검사'],
      novelHistory: [
        { title: '센추리온 조사 지원', body: '텐도잔 아카데미아 학생회장이자 프라임 자격으로 센추리온에 파견되어 아야네의 특별관리동 이송을 보류시키고 균열 조사를 보조한다.' },
        { title: '특별조사팀의 검', body: '구 관측동과 중계기 전투에서 측정되지 않는 검술로 균열 침식을 베어내며 조사팀의 후방을 지킨다.' },
        { title: '센추리온 크라운 전투', body: '일본도를 내려놓고 현대 이능력과 다른 오래된 힘으로 크라운과 상공의 균열을 잇는 선을 끊는다. 오필리아가 자신을 막아줄 것이라 믿고 공격을 피하지 않는 선택도 한다.' },
        { title: '텐도잔으로 귀환', body: '사건 다음 날 크라운의 균열 잔재를 들고 텐도잔의 대균열 이전 기록을 확인하기 위해 떠난다.' }
      ],
      history: [{ title: '게임 본편', body: '게임 본편 시점의 개별 작중 행적은 TBD.', status: 'TBD' }],
      skills: [
        { type: '기본공격', name: '홍련 검술', trigger: '상시', body: '일본도로 가까운 적을 빠르게 베는 기존 게임 전투 키트.', effects: ['근거리 단일 공격', '화염 피해', '벌점 대상 추가 피해'], status: '후속 설계' },
        { type: '액티브', name: '구미호식 징계집행', trigger: '벌점 5중첩 대상 존재', body: '벌점이 가장 높은 적에게 파고들어 강력한 연속 참격을 가한다.', effects: ['중첩 비례 추가 피해', '엘리트·보스 추가 피해', '처치 시 화염 피해와 표식'], status: '후속 설계' },
        { type: '패시브', name: '징계명부', trigger: '고위협 적의 행동', body: '가장 위협적인 적에게 벌점을 기록하고 누적할수록 피해를 증폭한다.', effects: ['고위협 적 집중', '벌점 누적', '최대 중첩에서 스킬 강화'], status: '후속 설계' }
      ],
      strengths: ['강력한 단일 제압력', '엘리트·보스 대응력', '표식·화염·폭발 전술 연계'], weaknesses: ['벌점 누적 전 예열 필요', '다수의 약한 적 상대로 과투자 가능성'],
      protocols: ['화염', '제압', '화력'], tags: ['근접', '프라임', '일본도', '학생회장'],
      coreColor: '#d52d3d', palette: ['#343138', '#d52d3d', '#eeeef0', '#d7b34d', '#e8b8c1'],
      resource: { bodyType: '가늘고 정적인 검사 실루엣', proportions: 'SD 3.5~4등신', silhouette: '동물 귀, 긴 은발, 한쪽 땋은 머리, 일본도', hairAndEyes: '은백색 머리 / 금빛 눈', costumeBreakdown: '검은 세일러 교복, 붉은 리본, 비대칭 스타킹', propBreakdown: '일본도·검집·허리 고정구', materialNotes: '검은 직물과 칼날 금속의 명도차 확보', vfxNotes: '붉은 참격과 무채색 균열 절단선을 구분', expressionSet: '무표정, 의문, 경계, 결의, 미세한 미소, 당황', riggingNotes: '동물 귀·땋은 머리·칼집과 팔의 간섭 주의', assetStatus: '그래픽 추가 예정' },
      internal: { code: 'PC1031', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: '158cm', measurements: '83-56-84', illustrator: 'TBD', voice: 'TBD', range: '근거리', status: '소설 설정 반영 · 게임 키트 후속 설계', source: '원작소설 1편 센추리온편 · 01_Wiki/03_Characters/시라카미 레이.md', note: '프라임, 텐도잔 학생회장, 일본도, 대균열 이전의 힘은 소설 확정. 벌점 기반 게임 키트는 후속 설계로 구분.' }
    },
    {
      id: 'kazamine-rubia',
      name: '카자미네 루비아', nameEn: 'Kazamine Rubia', quote: '뒤는 맡겨. 적어도 내가 쓰러지기 전까지는.',
      image: 'assets/images/characters/카자미네 루비아.png', color: '#b43b42', rarity: '스타팅',
      school: '센추리온 아카데미', club: 'TBD', major: '방호학', role: '근접 방호 전투원',
      position: '근접 방호·반격 브루저', species: '인간', weaponType: '샷건 블레이드', weapon: 'TBD',
      summary: '샷건 블레이드의 폭발적 반동으로 공격을 받아내고 되돌려주는 센추리온 아카데미 전열 전투원.',
      overview: ['센추리온 아카데미 소속으로 카롯·아야네와 가까운 선배다.', '거침없는 말투와 장난기 뒤에 친구를 지키는 책임감과 냉정한 판단력을 갖추고 있다.'],
      appearance: '선명한 적홍색 장발과 금빛 눈동자, 볼의 밴드가 특징이다. 검은색과 붉은색의 개조 교복, 허벅지 스트랩과 금속 장식을 사용한다.',
      personality: ['처음 만난 상대도 가볍게 떠보는 장난기와 배짱이 있다.', '위기에서는 가장 먼저 친구의 앞을 막아서는 보호자 역할을 한다.', '규칙보다 사람을 우선하되 상황 판단은 현실적이고 빠르다.'],
      personalityKeywords: ['장난기', '대담함', '의리', '현실적'],
      moeElements: ['언니 포지션', '적홍색 장발', '볼 밴드', '샷건 블레이드'],
      novelHistory: [
        { title: '아야네의 곁을 지키는 선배', body: '카롯과 함께 코디네이터를 맞이하고 제4훈련장의 아야네를 찾아간다. 첫 균열에서는 카롯을 밀쳐 공격을 대신 맞고, 폭주하는 아야네에게 끝까지 응원을 보낸다.' },
        { title: '센추리온 특별조사팀', body: '구 관측동 조사와 중계기 파괴 작전에 참여해 샷건 블레이드로 동료의 전열과 후방을 지킨다.' },
        { title: '기록에 없는 전투', body: '샷건 반동을 이동과 방어에 응용하고, 카롯의 탄환을 칼날로 도탄시키는 즉흥 연계로 크라운의 관측장치를 파괴한다.' },
        { title: '사건 이후', body: '아야네의 제한 훈련을 지켜보고 코디네이터에게 위험하면 연락하라며 센추리온을 떠나는 길을 배웅한다.' }
      ],
      history: [{ title: '게임 본편', body: '게임 본편 시점의 개별 작중 행적과 동아리는 TBD.', status: 'TBD' }],
      skills: [
        { type: '기본공격', name: '샷건 블레이드 강타', trigger: '상시', body: '가장 가까운 적을 칼날로 베고 산탄 반동으로 자세를 유지한다.', effects: ['근거리 단일 공격', '산탄 추가 피해', '반격 연계'], status: '후속 설계' },
        { type: '액티브', name: '가디언 리코일', trigger: '피격 누적 후', body: '공격을 받아낸 뒤 샷건 블레이드의 폭발적 반동으로 주변 적을 밀어낸다.', effects: ['주변 도발', '피해 감소', '범위 반격'], status: '후속 설계' },
        { type: '패시브', name: '철벽', trigger: '피격', body: '피해를 받을 때마다 철벽 중첩을 얻어 받는 피해를 줄인다.', effects: ['피격 기반 피해 감소', '최대 중첩 보호막', '장기전 강화'], status: '후속 설계' }
      ],
      strengths: ['매우 높은 생존력', '도발을 통한 파티 보호', '피격을 공격 기회로 바꾸는 반격'], weaknesses: ['낮은 순수 공격력', '상태이상 대응 수단 부족'],
      protocols: ['방호', '보조'], tags: ['근접', '방호', '샷건 블레이드', '반격'],
      coreColor: '#d92f55', palette: ['#2d2731', '#d92f55', '#f05572', '#d7b653', '#e6c7bd'],
      resource: { bodyType: '늘씬한 장신형', proportions: 'SD 3.5~4등신', silhouette: '풍성한 적홍색 장발, 샷건 블레이드', hairAndEyes: '적홍색 머리 / 금빛 눈', costumeBreakdown: '검정 크롭 교복, 붉은 넥타이·치마, 망사 스타킹', propBreakdown: '샷건 총열·대형 칼날·반동 완충부', materialNotes: '모발은 선명한 무광, 무기는 흑철과 황동 포인트', vfxNotes: '산탄 폭발은 주황, 방호·반격 신호는 적색', expressionSet: '미소, 능청, 도발, 분노, 걱정, 결의', riggingNotes: '장발 볼륨과 무기 휘두르기 반경, 치마·스트랩 관통 주의', assetStatus: '그래픽 추가 예정' },
      internal: { code: 'PC1041', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: '160cm', measurements: '88-58-87', illustrator: 'TBD', voice: 'TBD', range: '근거리', status: '소설 설정 반영 · 게임 키트 후속 설계', source: '원작소설 1편 센추리온편 · 01_Wiki/03_Characters/카자미네 루비아.md', note: '학교는 센추리온으로 수정. 동아리는 소설에 명시되지 않아 TBD. 샷건 블레이드 기반 게임 키트는 후속 설계.' }
    },
    {
      id: 'minase-sumire',
      name: '미나세 스미레', nameEn: 'Minase Sumire', quote: '전부 매뉴얼이랑 다르잖아요!',
      image: null, color: '#777777', rarity: 'TBD',
      school: '센추리온 아카데미', club: '학생방재위원회 통제반', major: 'TBD', role: '초장거리 포격·분석 지원',
      position: '초장거리 레일건 사수 / 관측 담당', species: '인간', weaponType: '대형 레일건', weapon: 'TBD',
      summary: '방재 매뉴얼과 관측 데이터를 바탕으로 전장을 분석하고 대형 레일건으로 결정타를 만드는 1학년 통제반 학생.',
      overview: ['센추리온 아카데미 1학년이며 학생방재위원회 통제반 소속이다.', '규정과 수치를 중시하지만 매뉴얼에 답이 없을 때도 동료를 지키기 위해 스스로 새로운 절차를 찾아낸다.'],
      appearance: '보라색 양갈래 머리와 작은 체격이 특징이다. 두꺼운 방재 매뉴얼과 단말을 항상 들고 다니며 전투에서는 대형 레일건을 운용한다. 세부 의상과 눈 색은 TBD.',
      personality: ['규정과 절차를 정확히 숙지한 성실한 원칙주의자다.', '칭찬에 약하고 걱정을 솔직하게 표현하지 못해 잔소리로 돌려 말한다.', '잘못된 절차에는 선배나 학생회장 앞에서도 물러서지 않는 책임감이 있다.'],
      personalityKeywords: ['원칙주의', '성실함', '책임감', '츤데레'],
      moeElements: ['보라색 양갈래', '매뉴얼 집착', '작은 후배', '칭찬에 약함'],
      novelHistory: [
        { title: '매뉴얼에 없는 작전', body: '중앙광장 작전의 규정준수 보조요원으로 처음 등장해 코디네이터의 위반 사항을 지적한다. 관측망의 비정상적인 0 오차를 발견하고 역방향 회로를 이용한 우회 절차를 설계한다.' },
        { title: '특별조사팀 합류', body: '학생방재위원회 통제반의 지식으로 중계기 데이터선을 분리하고 숨겨진 시설과 관리자 기록을 분석한다. 아야네를 관리번호 대신 이름으로 부르기 시작한다.' },
        { title: '센추리온 크라운 전투', body: '초장거리 레일건의 사선과 출력 수치를 계산해 중심핵을 노린다. 손상된 포신은 오필리아와 함께 각도를 보정하고, 마지막에는 전원장치를 AX-13에 연결해 균열 폐쇄를 돕는다.' },
        { title: '사건 이후', body: '방재 매뉴얼 제18차 개정안과 코디네이터 행동수칙 728쪽을 작성한다. 아야네의 제한 훈련에서는 관측 담당을 맡고, 떠나는 코디네이터에게 계속 자료를 보내라고 당부한다.' }
      ],
      history: [{ title: '게임 본편', body: '게임 본편 시점의 개별 작중 행적은 TBD.', status: 'TBD' }],
      skills: [
        { type: '기본공격', name: 'TBD', trigger: 'TBD', body: '게임 기본공격 사양은 TBD. 원작소설에서는 대형 레일건과 관측 단말을 사용한다.', effects: ['후속 설계'], status: 'TBD' },
        { type: '액티브', name: 'TBD', trigger: 'TBD', body: '게임 전투스킬 사양은 TBD. 초장거리 충전 사격과 사선 계산 콘셉트를 참고할 수 있다.', effects: ['후속 설계'], status: 'TBD' },
        { type: '패시브', name: 'TBD', trigger: 'TBD', body: '게임 패시브 사양은 TBD. 관측·규정·출력제어 콘셉트를 참고할 수 있다.', effects: ['후속 설계'], status: 'TBD' }
      ],
      strengths: ['정확한 상황 분석과 수치 계산', '초장거리 고출력 사격', '시설·회로 해석 능력'], weaknesses: ['레일건 충전시간과 재사격 간격', '대형 장비의 낮은 기동성'],
      protocols: ['TBD'], tags: ['초장거리', '레일건', '학생방재위원회', '1학년'],
      coreColor: 'TBD', palette: ['#3f3f3f', '#666666', '#8c8c8c', '#b3b3b3', '#d9d9d9'],
      resource: { bodyType: '147cm의 소형 체형과 초대형 화기의 대비', proportions: 'TBD', silhouette: '보라색 양갈래, 두꺼운 매뉴얼, 대형 레일건', hairAndEyes: '보라색 양갈래 / 눈 색 TBD', costumeBreakdown: '센추리온 1학년 교복 세부 TBD, 통제반 표식 권장', propBreakdown: '대형 레일건 포신·충전부·운반장치·관측 단말·매뉴얼', materialNotes: '레일건 중량 금속과 휴대 단말의 발광 UI 대비', vfxNotes: '보라색 분석선·전류·사선, 고출력 탄자의 백색 코어', expressionSet: '화남, 잔소리, 당황, 뿌듯함, 집중, 안도', riggingNotes: '양갈래 머리와 레일건 운반장치, 충전 자세의 접지감 주의', assetStatus: '그래픽 추가 예정' },
      internal: { code: 'PC-TBD', birthday: 'TBD', age: 'TBD', grade: '1학년', height: '147cm', measurements: '72-52-74', illustrator: 'TBD', voice: 'TBD', range: '초장거리', status: '소설 프로필 확정 · 게임 키트 TBD', source: '원작소설 1편 센추리온편', note: '신규 등록 캐릭터. 외형 원화가 없어 팔레트는 회색 5색을 유지한다. 대형 레일건의 운반·충전·반동 애니메이션을 별도 검증한다.' }
    },
    {
      id: 'ophelia-chronos',
      name: '오필리아 크로노스', nameEn: 'Ophelia Chronos', quote: '우연은 존재하지 않아요. 단지 아직 계산하지 못한 변수일 뿐.',
      image: null, color: '#777777', rarity: 'TBD',
      school: '센추리온 아카데미', club: '학생회 (회장)', major: 'TBD', role: '전략 지원 / 미래 관측',
      position: '중거리 전술 지원 / 장창 전투원', species: '인간', weaponType: '장창', weapon: '학생회장 의장용 무장 (명칭 TBD)',
      summary: '다수의 미래를 관측해 피해를 최소화하는 센추리온 학생회장. 장창과 학생회 방재 권한으로 전장을 지원한다.',
      overview: ['센추리온 아카데미 학생회장이며 학원 행정과 도시 방재에서 높은 지지를 받았다.', '미래관측 능력 때문에 최선의 결과를 혼자 선택하려 했으나, 센추리온 사건을 통해 타인의 현재 판단을 믿는 법을 배운다.'],
      appearance: '의자 아래까지 흐르는 백금빛 장발과 단정한 자세가 특징이다. 센추리온 정식 교복 위에 흰색 학생회장 외투를 걸치고 검정·금색 회장 문장을 단다. 미래관측 시 눈에서 금빛이 흐른다.',
      personality: ['항상 차분하고 예의 바르지만 필요한 정보만 제한적으로 말한다.', '모든 피해를 계산해 혼자 책임지려는 강한 자기희생 성향이 있다.', '자신의 잘못을 회피하지 않으며 동료들의 판단을 받아들인 뒤에는 솔직한 관계를 배우려 한다.'],
      personalityKeywords: ['침착함', '책임감', '자기희생', '완벽주의'],
      moeElements: ['학생회장', '백금빛 장발', '시계 모티프', '사회성 갭'],
      novelHistory: [
        { title: '센추리온의 학생회장', body: '높은 지지율과 방재 성과를 지닌 학생회장으로, 프라임 후보 추천도 센추리온을 떠날 수 없다는 이유로 거절한다. 학생회실에서 미래를 관측하며 광역 균열실험의 피해를 줄이려 한다.' },
        { title: '재현실험의 승인', body: '사에구사의 더 큰 광역실험을 늦추기 위해 아야네 한 명에게 위험을 집중시키는 재현실험을 승인한다. 동시에 코디네이터를 부르고 AX-13 보관고와 중계기 접근 경로를 열어 반격의 가능성도 만든다.' },
        { title: '미래 대신 현재를 선택하다', body: '감시가 끊긴 180초 동안 진실을 밝히고, 학생들 앞에서 자신의 책임을 공개 사과한다. 사에구사의 명령을 거부하고 학생회 방재 권한을 전 학생에게 개방한다.' },
        { title: '기록에 없는 승리와 유임', body: '시계바늘 형태의 의장용 장창을 들고 크라운 전투와 균열 폐쇄에 합류한다. 사건 후 사임서를 제출하지만 학생 투표로 유임되고, 권한을 분산하는 중앙 코디네이터실 협력협정에 서명한다.' }
      ],
      history: [{ title: '게임 본편', body: '게임 본편 시점의 개별 작중 행적은 TBD.', status: 'TBD' }],
      skills: [
        { type: '기본공격', name: '의장창 타격', trigger: '상시', body: '시계바늘 형상의 장창으로 적을 견제하는 기존 콘셉트. 게임 수치와 명칭은 후속 설계한다.', effects: ['중거리 견제', '장창 공격', '낮은 직접 피해'], status: '후속 설계' },
        { type: '액티브', name: '미래관측 브리핑', trigger: '전투 시작 후 일정 주기', body: '아군 전체에 최적의 행동 지시를 내려 전투 성능을 강화한다.', effects: ['공격력 증가', '에너지 획득 증가', '쿨타임 회복 가속'], status: '후속 설계' },
        { type: '패시브', name: '미래관측', trigger: '아군 스킬 사용', body: '여러 가능성을 관측해 스킬을 사용한 아군의 행동 효율을 높인다.', effects: ['스킬 회전 연계', '피해 예측', '파티 전체 효율 증가'], status: '후속 설계' }
      ],
      strengths: ['어떤 파티에도 맞는 범용성', '시너지와 스킬 회전 강화', '꾸준한 파티 성능 상승'], weaknesses: ['낮은 직접 화력', '핵심 딜러의 성능에 의존'],
      protocols: ['보조', '에너지', '기동'], tags: ['전술 지원', '미래관측', '장창', '학생회장'],
      coreColor: 'TBD', palette: ['#3f3f3f', '#666666', '#8c8c8c', '#b3b3b3', '#d9d9d9'],
      resource: { bodyType: '161cm의 단정하고 가는 실루엣', proportions: 'TBD', silhouette: '의자 아래까지 오는 백금 장발, 흰 외투, 장창', hairAndEyes: '백금빛 장발 / 평상시 눈 색 TBD, 미래관측 시 금빛', costumeBreakdown: '센추리온 정식 교복, 흰 학생회장 외투, 검정·금색 회장 문장', propBreakdown: '시계바늘 형상 장창, 최고권한 검은 열쇠, 비상통신장치', materialNotes: '백색 직물·백금 모발·금속 창이 뭉개지지 않도록 명도 분리', vfxNotes: '금빛 미래관측, 다중 시계·궤적, 권한 UI', expressionSet: '무표정 미소, 냉정, 동요, 죄책감, 결의, 희미한 진짜 미소', riggingNotes: '초장발과 외투 자락, 장창 회전, 흉부 회장 문장 변형 주의', assetStatus: '그래픽 추가 예정' },
      internal: { code: 'PC1071', birthday: 'TBD', age: 'TBD', grade: 'TBD', height: '161cm', measurements: '85-57-87', illustrator: 'TBD', voice: 'TBD', range: '중거리', status: '소설 설정 반영 · 게임 키트 후속 설계', source: '원작소설 1편 센추리온편 · 01_Wiki/03_Characters/오필리아 크로노스.md', note: '재현실험 승인과 유년기 관측 보조는 핵심 스포일러. 최종 원화가 없어 핵심색과 팔레트는 회색 임시값을 유지한다.' }
    }
  ]
};

/* v2.3에서 개별 확정을 확인할 수 없는 프로필·아트 필드는 TBD로 통일합니다. */
window.WIKI_DATA.characters.forEach((character) => {
  character.gender ??= '여성';
  character.coreColor ??= 'TBD';
  character.palette ??= ['#3f3f3f', '#666666', '#8c8c8c', '#b3b3b3', '#d9d9d9'];
  character.personalityKeywords ??= ['TBD'];
  character.moeElements ??= ['TBD'];
  character.novelHistory ??= [{ title: 'TBD', body: '원작소설 1편 기준 작중 행적을 확인해 주세요.' }];
  character.history ??= [{ title: '게임 본편', body: '게임 본편 시점의 개별 작중 행적은 TBD.', status: 'TBD' }];
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
