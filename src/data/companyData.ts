export interface GasProduct {
  id: string;
  code: string;
  category: 'industrial' | 'fuel' | 'specialty' | 'medical' | 'standard' | 'equipment';
  categoryLabel: string;
  name: string;
  englishName: string;
  subtitle: string;
  formula: string;
  purity: string;
  description: string;
  image: string;
  tags: string[];
  deliveryFormat: string;
  applications: string[];
  storageType: string;
  msdsCode: string;
}

export interface NoticeItem {
  id: string;
  category: string;
  date: string;
  title: string;
  description: string;
  department: string;
  isFeatured?: boolean;
  content: string;
  attachments?: { name: string; size: string }[];
}

export interface BranchInfo {
  id: string;
  region: string;
  name: string;
  type: '본사 및 연구소' | '주요 생산 공장' | '직영 충전소/물류기지';
  address: string;
  tel: string;
  fax: string;
  keyFacilities: string[];
  lat: number;
  lng: number;
  tankersStationed: number;
}

export interface MSDSDocument {
  id: string;
  gasName: string;
  casNo: string;
  chemicalFormula: string;
  unNo: string;
  hazardClass: string;
  revisionDate: string;
  fileSize: string;
}

export const PRODUCTS_DATA: GasProduct[] = [
  {
    id: 'gas-01',
    code: 'GAS-01',
    category: 'industrial',
    categoryLabel: '기초 원료 에너지',
    name: '산업용 가스',
    englishName: 'Industrial Gas',
    subtitle: '대한민국 기간산업의 고순도 기초 원료 공급',
    formula: 'O₂, N₂, Ar, CO₂',
    purity: '99.99% ~ 99.999% (초고순도 벌크)',
    description: '산소(O₂), 질소(N₂), 아르곤(Ar), 탄산가스(CO₂) 등 철강 제조, 용접, 화학 플랜트 및 식품 급속 동결에 필수적인 고순도 대량 벌크 가스를 공급합니다.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClZfEwvOoTno15Yfyw99HfIOpiqNu_mK3LNtJDKXWeXNyq4leKKG9kisE39OzIKWmaZ8raDMPJ9k8LTOzNzL9951CF8G9GITEY8BRWP0G_PRByuJD9GyxyahiGi963LkE_8qWlB7MNonGhplP3fsLQoeLGiIKnwLxmRoxsaH8k6dbtrAKzT__whS-VSleEpwCMJZOvcpx7Z4QytCfb-cgtZY2vFT9IKCpy81sn37BEwZ9DUQSzW-WB',
    tags: ['L-O2', 'L-N2', 'L-Ar', 'L-CO2'],
    deliveryFormat: '초저온 탱크로리 (10톤~25톤) / 47L 고압실린더 번들',
    applications: ['철강 제련 및 절단·용접', '석유화학 반응 불활성화', '식품 급속 냉동 및 보존', '금속 열처리 공정'],
    storageType: '초저온 진공단열 저장탱크 (CE) 및 대기식 기화기',
    msdsCode: 'MSDS-IND-2025'
  },
  {
    id: 'gas-02',
    code: 'GAS-02',
    category: 'fuel',
    categoryLabel: '고효율 열원',
    name: '연료용 가스',
    englishName: 'Fuel & Hydrocarbon Gas',
    subtitle: '산업 플랜트 및 열공정을 위한 안정적 고열량 가스',
    formula: 'C₃H₈, C₄H₁₀, C₂H₆',
    purity: '고발열량 청정연료 99.5%+',
    description: '프로판(C₃H₈), 프라멕스(Pramax), 에탄, 부탄, 이소부탄 등 공장 열원, 난방, 절단 및 고발열량 요구 공정에 최적화된 에너지를 안정 공급합니다.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATIYJ9pB51IZX37_faZo3gO0ydQIKL1BXKj1qmXBIr_eaA3tRNT0pbp6-2eEkFkOXjxvJzcB5kYE3HkMsmgJsNm8atqkJ7xULN187DXUEJivzlq00qmtWNe95p3MXpsWUtwlp3bCzLX6XLuGMgqwXykmdcH4CDzKNsvNlL4rE8hmwWjYPbNHvXf9N_4G_eDjLI5yt7oLM0kXHk4_s0d4y5KmZmIg6ngHuXnqazn9gpTxOkMrFLinCz',
    tags: ['프로판', '프라멕스', '부탄', '이소부탄'],
    deliveryFormat: '대형 벌크 로리 이송 / 소형 저장탱크 직충전',
    applications: ['선박 블록 절단 및 가공 (프라멕스 특허 가스)', '공업용 열처리로 및 보일러 연료', '유리 및 도자기 소성로 열원', '건조 및 공정 예열'],
    storageType: '지상/지하 LPG 저장탱크 및 강제기화기 설비',
    msdsCode: 'MSDS-FUL-1092'
  },
  {
    id: 'gas-03',
    code: 'GAS-03 · HIGH-TECH',
    category: 'specialty',
    categoryLabel: '반도체 & 디스플레이',
    name: '특수 가스',
    englishName: 'Electronic Specialty Gas',
    subtitle: 'UHP 99.9999% 첨단 초정밀 전자재료 가스 솔루션',
    formula: 'NF₃, SiH₄, CF₄, WF₆, N₂O 6N',
    purity: 'UHP 6N (99.9999%) ~ 7N',
    description: '웨이퍼 증착, 식각, 세정 공정에 사용되는 초고순도(UHP 99.9999%) 전자특수가스 및 모노실란, 삼불화질소 등 첨단 정밀화학 가스 포트폴리오.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvQ82c6C4LSD3-e-ttVqwdBiQgY3oJOF0Sj8uzWrQoFfMAGsBtx6Iss-CanvF8ONCF57OJTTJLW4CbRBsUhWdo5_ILkXgKWF-X81o_isdA5TqohP8Jg0-jtFQEtsLPcwMT8cKg0SiJ4zlG2Pp9XOBSvC1lz5Aex1SfOP1SHdDwPEsVzh9cXc-kIxHQzxUWl4J48FiwfzlwwppGhEunD5Crv8Sjv_EfcZfMIS-sWCMf-g9sVj81S_Rt',
    tags: ['UHP 6N Grade', '전자특수가스', '클린룸 충전'],
    deliveryFormat: '클린룸 전용 Y-Cylinder, 47L 고순도 실린더 캐비닛 전용 규격',
    applications: ['반도체 DRAM, NAND 웨이퍼 증착 및 에칭', 'OLED 디스플레이 패널 박막 공정', '태양전지 셀 제조용 실리콘 박막형성', '정밀 광학 센서 제조'],
    storageType: '가스 캐비닛(Gas Cabinet), VMB(밸브 매니폴드 박스) 전용 배관',
    msdsCode: 'MSDS-SPE-9941'
  },
  {
    id: 'gas-04',
    code: 'GAS-04 · HEALTHCARE',
    category: 'medical',
    categoryLabel: '생명 안전 케어',
    name: '의료용 가스',
    englishName: 'Medical Healthcare Gas',
    subtitle: 'KGMP 의약품 제조 품질관리 기준 적격 고품질 가스',
    formula: 'Medical O₂, N₂O, CO₂, Entonox',
    purity: '대한약전(KP) 및 KGMP 규격 99.5%+',
    description: 'KGMP(의약품 제조 및 품질관리기준) 인증을 획득한 고품질 의료용 산소, 아산화질소(마취가스), 멸균 가스 등을 대학병원 및 주요 의료기관에 직공급합니다.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwxYP04tUlz-VTQW39y6twNFD4Mcbszi5HYsqSSvnav7Hg4RWrdgigNR_18jmulwr9PFIsHLtxoRnLincphIT_qZdkRJ3K72xwSTUjnwOuJdjb8hFo1kWq2AAdmlycHgVRLMbBZhBh_Ue8ozBNiHt_679PnM1y1KH32BTg9ZdobSCfH6oKmj7l29OcTOWthkBa01weBjqsVA870RBsPUhVVHB_LlqZ8k3NhPr2b6swMizDQbEBXP8-',
    tags: ['의료용 산소', '아산화질소', 'KGMP 적격'],
    deliveryFormat: '병원 집중배관 전용 초저온 저장탱크 / 병원용 실린더(알루미늄/스틸)',
    applications: ['중환자실 및 응급실 환자 호흡 보조', '수술실 흡입 마취 및 통증 조절', '의료기기 멸균 및 저온 보관', '고압 산소 치료 챔버'],
    storageType: '병원 원내 집중배관 시스템, 자동 절체 매니폴드 2중화',
    msdsCode: 'MSDS-MED-4402'
  },
  {
    id: 'gas-05',
    code: 'GAS-05 · ANALYTICAL',
    category: 'standard',
    categoryLabel: '정밀 교정 및 인증',
    name: '표준 가스',
    englishName: 'Calibration Standard Gas',
    subtitle: '공인 소급성을 갖춘 ppm/ppb 단위 정밀 혼합 가스',
    formula: 'Multi-component Standard Mixtures',
    purity: '정밀 소급성 ±1% 상대오차 보증',
    description: '환경 대기 측정, 굴뚝 TMS, 자동차 배출가스 검사 및 R&D 정밀 장비 보정에 사용하는 공인 소급성을 갖춘 다성분 정밀 혼합 가스입니다.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiSJeaafuMoyIrBg12C6VEghcj2i9LjY_Bc7VmaKJQ0_2Vj5vg82fR8SWVhYnXwL41-Nh42D9s5Q5Oti-aGzyzsN3XTnop8kc_ZM_K5r8qfZ3YD4YFNWEZMKFrEDjcDOSlhyalsN-LztSIW3u1fuNP_mty26FYAduAOcOdyw1PLZAwJNTpn23uOiEjqTtwvQqphjEFdhxS3lQ3mW2_L8xssu8tqBqdXWFjZDC2qhVCV8b-Vn4DJ-q7',
    tags: ['KOLAS 검교정', 'TMS 환경가스', 'ppm/ppb 조제'],
    deliveryFormat: '특수 내부 표면처리 알루미늄 실린더 / 초정밀 밸브',
    applications: ['국가 환경 굴뚝 TMS 모니터링 교정', '자동차 배출가스 시험소 공인 검사', '연구소 가스크로마토그래피(GC) 캘리브레이션', '가스 감지 센서 정확도 테스트'],
    storageType: '정밀 압력조정기(SUS 레귤레이터) 및 항온 보관실',
    msdsCode: 'MSDS-STD-8831'
  },
  {
    id: 'gas-06',
    code: 'GAS-06 · INFRA',
    category: 'equipment',
    categoryLabel: '플랜트 엔지니어링',
    name: '초저온 저장탱크 & 설비',
    englishName: 'Cryogenic Tank & Plant System',
    subtitle: '설계부터 인허가, 시공, 정기검사까지 원스톱 턴키 솔루션',
    formula: 'Cryogenic Vessel & Piping Infra',
    purity: 'KGS 코드 및 고압가스안전관리법 적격 시공',
    description: '초저온 진공 단열 저장탱크(CE), 대기식 기화기, 압력조정기(Regulator), 매니폴드 자동 절체 시스템 등 가스 공급 플랜트 턴키 시공.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZZhYi2wvBY5Y7k1Aw4p3g2eiI5_qL0a4-k4hXu-lRKbTTlOmPtxMRNK731NmHzsk01tQIXCEvXyWxEmxQYq89G4p3N4XwGaj6FJuDH6ohskAAHKQa2iFUZXmEpzI9R9nZiABz5pYpQ1JAxWg0h5zgtXQqcgfJKcti1xNRdJvCPcjkunV9i1SMW6RO_psPzLzUdZ59h3IqtOdbBaj9blGYf1vDLXtAivI_b8AiB5_IXkzZ9W09UKrl',
    tags: ['초저온 탱크', '기화기(Vaporizer)', '배관 시공'],
    deliveryFormat: '현장 토목 기초 공사 + 탱크 안착 및 초저온 배관 턴키',
    applications: ['신축 반도체 및 화학 공장 가스 인프라', '병원 집중 배관 및 백업 스테이션 구축', '선박 연료 벙커링 터미널', '초저온 액화가스 재액화 설비'],
    storageType: '고진공 펄라이트 단열 복벽 탱크 (5m³ ~ 100m³+)',
    msdsCode: 'MSDS-PLT-001'
  }
];

export const NOTICES_DATA: NoticeItem[] = [
  {
    id: 'notice-01',
    category: '입찰공고 · R&D',
    date: '2025.02.14',
    title: '울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발 (실증R&D)』 관련 “구축시스템 3자 안전진단 평가” 용역 입찰',
    description: '본 입찰은 국가 혁신 규제자유특구 사업의 일환으로 시행되는 무탄소 친환경 암모니아 벙커링 설비의 객관적 안정성 및 적합성 평가를 위한 제3자 전문 진단 용역 건입니다.',
    department: '신에너지사업본부 / R&D연구소',
    isFeatured: true,
    content: `[입찰 공고문 요약]
1. 사업명: 울산 규제자유특구 암모니아 벙커링 인프라 구축시스템 3자 안전진단 평가
2. 사업기간: 계약체결일로부터 6개월
3. 주요 과업 내용:
  - 암모니아 TTS(Truck to Ship) 벙커링 시스템 HAZOP 및 FMEA 정성/정량 안전성 평가
  - 비상 차단 시스템(ESD) 및 누출 감지 제어 알고리즘 검증
  - 국가 규제자유특구 안전관리위원회 승인 기준 부합 여부 심사
4. 제안서 접수 기한: 2025년 3월 10일 17:00까지
5. 문의처: (주)MS가스 신에너지사업본부 (052-250-7000)`,
    attachments: [
      { name: '입찰제안요청서_암모니아벙커링_안전진단.pdf', size: '2.4 MB' },
      { name: '과업지시서_구축시스템3자평가.hwp', size: '1.1 MB' }
    ]
  },
  {
    id: 'notice-02',
    category: '입찰공고',
    date: '2025.01.20',
    title: '울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축』 “탱크로리를 이용한 암모니아 벙커링 설비 HAZOP 정성적 위험평가” 용역',
    description: '위험평가 및 방호 엔지니어링 분석 용역',
    department: '기술안전실',
    content: `위험평가 및 방호 엔지니어링 분석을 위한 기술 입찰 공고입니다.
가스 위험성 평가 전문기관의 정성적 위험평가(HAZOP) 수행 및 개선방안 도출을 목표로 합니다.`,
    attachments: [
      { name: 'HAZOP_위험평가_제안요청서.pdf', size: '1.8 MB' }
    ]
  },
  {
    id: 'notice-03',
    category: '실증특례 고지',
    date: '2024.12.08',
    title: '경남 암모니아 혼소 연료추진시스템 선박 규제자유특구 실증특례 이용자 고지 안내',
    description: '해양 선박 탄소중립 실증 프로젝트 정보',
    department: '해양에너지사업팀',
    content: `산업융합 촉진법 및 규제자유특구 및 지역특화발전특구에 관한 규제특례법에 따라 실증특례 사업 참여 기업 및 이용자에 대한 사전 고지 안내문입니다.
(주)MS가스는 무탄소 연료 실증을 통해 안전기준 수립에 기여하고 있습니다.`,
    attachments: [
      { name: '이용자고지문_경남선박실증.pdf', size: '890 KB' }
    ]
  },
  {
    id: 'notice-04',
    category: '수상 및 인증',
    date: '2024.11.25',
    title: '(주)MS가스 충남 탄소중립 확산 유공 충남도지사 표창 수여 및 은탑산업훈장 수훈',
    description: '국가 산업 발전 및 온실가스 감축 기여 공로',
    department: '홍보경영실',
    content: `(주)MS가스는 친환경 고효율 가스 공급 시스템 혁신 및 온실가스 배출 감축 프로젝트의 공로를 인정받아 충남도지사 표창 및 은탑산업훈장을 수훈하였습니다.
고객 여러분의 변함없는 신뢰에 감사드립니다.`
  },
  {
    id: 'notice-05',
    category: '공지사항',
    date: '2024.10.15',
    title: '추계 전국 가스 충전소 및 탱크로리 안전점검 캠페인 완료 안내',
    description: '17개 전 영업소 무재해 안전 점검 전수 완료',
    department: '안전보건팀',
    content: `전국 8개 권역 17개 충전기지 및 100여 대의 초저온 탱크로리를 대상으로 한 추계 정기 안전점검이 무결점으로 완료되었습니다.`
  }
];

export const BRANCHES_DATA: BranchInfo[] = [
  {
    id: 'br-01',
    region: '수도권',
    name: '서울 수도권 영업본부',
    type: '직영 충전소/물류기지',
    address: '서울특별시 금천구 디지털로 130 대륭테크노타운',
    tel: '02-850-5100',
    fax: '02-850-5199',
    keyFacilities: ['의료용 가스 전용 보급센터', '특수가스 전용 보관고'],
    lat: 37.478,
    lng: 126.886,
    tankersStationed: 12
  },
  {
    id: 'br-02',
    region: '수도권',
    name: '화성 평택 반도체 특수가스 센터',
    type: '주요 생산 공장',
    address: '경기도 평택시 고덕면 첨단산업단지로 45',
    tel: '031-680-3300',
    fax: '031-680-3390',
    keyFacilities: ['초고순도 6N 충전 매니폴드', '웨이퍼용 가스 전용 클린룸'],
    lat: 37.032,
    lng: 127.051,
    tankersStationed: 18
  },
  {
    id: 'br-03',
    region: '영남',
    name: '울산 본사 및 가스분석 기술연구소',
    type: '본사 및 연구소',
    address: '울산광역시 남구 여천로 217번길 34 (온산/여천단지)',
    tel: '052-250-7000',
    fax: '052-250-7090',
    keyFacilities: ['R&D 센터 (GC-PDHID 5대)', '암모니아 TTS 실증 기지', 'CE 100톤 저장탱크 4기'],
    lat: 35.513,
    lng: 129.351,
    tankersStationed: 24
  },
  {
    id: 'br-04',
    region: '영남',
    name: '부산 신평 충전공장',
    type: '주요 생산 공장',
    address: '부산광역시 사하구 신평공단로 82',
    tel: '051-290-8800',
    fax: '051-290-8890',
    keyFacilities: ['선박용 절단가스(프라멕스) 제조', '용기 재검사장'],
    lat: 35.097,
    lng: 128.966,
    tankersStationed: 14
  },
  {
    id: 'br-05',
    region: '충청',
    name: '천안 탕정 클러스터 영업소',
    type: '직영 충전소/물류기지',
    address: '충청남도 천안시 서북구 2공단4로 68',
    tel: '041-550-2200',
    fax: '041-550-2290',
    keyFacilities: ['디스플레이 전용 질소/헬륨 공급망', '자동 절체 매니폴드'],
    lat: 36.835,
    lng: 127.112,
    tankersStationed: 16
  },
  {
    id: 'br-06',
    region: '호남',
    name: '여수 석유화학 플랜트 거점',
    type: '주요 생산 공장',
    address: '전라남도 여수시 여수산단2로 125',
    tel: '061-680-6000',
    fax: '061-680-6090',
    keyFacilities: ['대용량 질소 가스퍼지 설비', '초저온 액화가스 대형 탱크로리 거점'],
    lat: 34.801,
    lng: 127.695,
    tankersStationed: 20
  },
  {
    id: 'br-07',
    region: '호남',
    name: '군산 새만금 에너지 기지',
    type: '직영 충전소/물류기지',
    address: '전북특별자치도 군산시 산단로 190',
    tel: '063-460-4400',
    fax: '063-460-4490',
    keyFacilities: ['이차전지 소재용 불활성 가스 라인', 'ISO 컨테이너 적재장'],
    lat: 35.967,
    lng: 126.685,
    tankersStationed: 10
  },
  {
    id: 'br-08',
    region: '영남',
    name: '포항 철강 가스 영업소',
    type: '직영 충전소/물류기지',
    address: '경상북도 포항시 남구 철강로 112',
    tel: '054-280-9900',
    fax: '054-280-9990',
    keyFacilities: ['제철용 산소/질소 공급 배관망 연계', '24H 긴급 배송대'],
    lat: 35.998,
    lng: 129.382,
    tankersStationed: 12
  }
];

export const MSDS_DOCS: MSDSDocument[] = [
  {
    id: 'msds-01',
    gasName: '액체 질소 (Liquid Nitrogen)',
    casNo: '7727-37-9',
    chemicalFormula: 'N₂',
    unNo: 'UN 1977',
    hazardClass: 'Class 2.2 (비인화성·비독성 가스 / 초저온 액체)',
    revisionDate: '2025.01.10',
    fileSize: '412 KB'
  },
  {
    id: 'msds-02',
    gasName: '액체 산소 (Liquid Oxygen)',
    casNo: '7782-44-7',
    chemicalFormula: 'O₂',
    unNo: 'UN 1073',
    hazardClass: 'Class 2.2 + 5.1 (조연성 가스 / 산화성 물질)',
    revisionDate: '2025.01.12',
    fileSize: '398 KB'
  },
  {
    id: 'msds-03',
    gasName: '액체 아르곤 (Liquid Argon)',
    casNo: '7440-37-1',
    chemicalFormula: 'Ar',
    unNo: 'UN 1951',
    hazardClass: 'Class 2.2 (불활성 가스 / 동상 주의)',
    revisionDate: '2024.11.20',
    fileSize: '385 KB'
  },
  {
    id: 'msds-04',
    gasName: '액화 탄산가스 (Liquid CO₂)',
    casNo: '124-38-9',
    chemicalFormula: 'CO₂',
    unNo: 'UN 2187',
    hazardClass: 'Class 2.2 (비인화성 가스 / 질식성)',
    revisionDate: '2024.12.05',
    fileSize: '430 KB'
  },
  {
    id: 'msds-05',
    gasName: '삼불화질소 (NF₃)',
    casNo: '7783-54-2',
    chemicalFormula: 'NF₃',
    unNo: 'UN 2451',
    hazardClass: 'Class 2.2 + 5.1 (산화성 독성 가스 / 전자특수)',
    revisionDate: '2025.02.01',
    fileSize: '510 KB'
  },
  {
    id: 'msds-06',
    gasName: '모노실란 (SiH₄)',
    casNo: '7803-62-5',
    chemicalFormula: 'SiH₄',
    unNo: 'UN 2203',
    hazardClass: 'Class 2.1 (자연발화성 인화성 가스)',
    revisionDate: '2025.01.15',
    fileSize: '540 KB'
  },
  {
    id: 'msds-07',
    gasName: '프로판 (Propane / Pramax Base)',
    casNo: '74-98-6',
    chemicalFormula: 'C₃H₈',
    unNo: 'UN 1978',
    hazardClass: 'Class 2.1 (고인화성 고압가스)',
    revisionDate: '2024.10.18',
    fileSize: '425 KB'
  },
  {
    id: 'msds-08',
    gasName: '의료용 아산화질소 (Nitrous Oxide)',
    casNo: '10024-97-2',
    chemicalFormula: 'N₂O',
    unNo: 'UN 1070',
    hazardClass: 'Class 2.2 + 5.1 (의약품 KGMP 기준 적격)',
    revisionDate: '2024.12.28',
    fileSize: '460 KB'
  }
];
