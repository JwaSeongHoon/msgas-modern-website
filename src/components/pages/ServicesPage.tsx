import React, { useState } from 'react';

interface ServicesPageProps {
  onOpenQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'analysis' | 'purge' | 'export' | 'safety'>('analysis');

  const services = {
    analysis: {
      id: 'analysis',
      title: '가스 정밀분석 서비스 (Gas Analysis & Certification)',
      subtitle: 'GC-PDHID 및 GC-TCD 기반 0.1ppm / ppb 단위 불순물 초정밀 검출',
      icon: 'science',
      desc: 'MS가스 중앙기술연구소는 공인 소급성을 갖춘 첨단 분석 장비를 운용하며, 웨이퍼 증착용 초고순도 가스부터 대기 환경 측정용 혼합가스까지 미량의 수분, 산소, 탄화수소 불순물을 정밀 검증하여 공인 성적서(CoA)를 발행합니다.',
      features: [
        '펄스 방전 헬륨 이온화 검출기 (GC-PDHID) 5대 상시 가동',
        '미량 수분계 (전해식/수정진동자식: 검출한계 1ppb 미만)',
        '한국인정기구(KOLAS) 공인 시험 절차 준수',
        '고객사 맞춤형 온사이트(On-site) 이동식 가스 샘플링 및 즉시 분석',
      ],
      steps: [
        { num: '01', title: '샘플 채취', desc: '특수 전해연마(EP) 실린더를 이용한 무오염 가스 포집' },
        { num: '02', title: '정밀 크로마토그래피', desc: '0.1ppm 단위 미량 불순물 피크 정량 분석' },
        { num: '03', title: '데이터 교차 검증', desc: '국가 표준원기 기준 소급성 보정' },
        { num: '04', title: 'CoA 성적서 발급', desc: '공인 시험성적서 및 데이터 시트 온라인 교부' },
      ],
    },
    purge: {
      id: 'purge',
      title: '가스퍼지(Purge) 엔지니어링',
      subtitle: '신축 플랜트 배관, 대형 저장탱크, 선박 연료탱크 질소 치환 공정',
      icon: 'air',
      desc: '신축 석유화학 배관, LNG/암모니아 추진선 탱크 시운전 전, 배관 내부의 공기(산소)와 수분을 고순도 질소(N₂)로 가압 치환하여 화재·폭발 위험성을 사전에 100% 제거하는 전문 현장 시공 엔지니어링 서비스입니다.',
      features: [
        '초대용량 기화기(Vaporizer: 시간당 10,000 Nm³) 현장 급파',
        '잔존 산소 농도 0.1% 이하 연속 실시간 모니터링',
        '압력 강하 시험(Leak Test) 및 기밀성 동시 검증',
        '조선소, 대형 플랜트 1,000건 이상의 무사고 시공 실적',
      ],
      steps: [
        { num: '01', title: '배관 용적 계산', desc: '도면 검토 및 필요 질소량 정밀 엔지니어링' },
        { num: '02', title: '초저온 장비 배치', desc: '이동식 기화기 및 고압 매니폴드 라인 연결' },
        { num: '03', title: '연속 가압 치환', desc: '질소 분사 및 배기구 산소 농도 실시간 측정' },
        { num: '04', title: '안전 보증서 교부', desc: '최종 기밀 및 산소 결핍 확인서 발급' },
      ],
    },
    export: {
      id: 'export',
      title: '글로벌 위험물 수출입 원스톱',
      subtitle: 'IMDG / DOT 국제 운송 규격 적격 ISO 탱크 및 컨테이너 복합 물류',
      icon: 'sailing',
      desc: '전 세계 10개국 이상의 파트너십을 바탕으로 특수 고압가스, 전자소재 원료 가스를 ISO 탱크 컨테이너 및 Y-Cylinder를 통해 해상 및 항공으로 안전하고 신속하게 수출입 통관 및 직배송합니다.',
      features: [
        '국제해사기구(IMO) IMDG Code 위험물 해상운송 면허 보유',
        '초저온 ISO 탱크 컨테이너(T75) 자체 보유 및 운영',
        '위험물 적재검사 및 선적 승인 전담 행정팀 운용',
        '수출입 위험물 보세창고 및 냉각 기지 직결',
      ],
      steps: [
        { num: '01', title: '수출입 규정 심사', desc: '국가별 화학물질등록(REACH, K-REACH) 검토' },
        { num: '02', title: '특수 용기 충전', desc: 'ISO 탱크 진공 단열 점검 및 정량 충전' },
        { num: '03', title: '통관 및 위험물 검사', desc: '한국선급(KR) 및 항만청 적재 검사 필증 획득' },
        { num: '04', title: '글로벌 엔드투엔드', desc: '해상 운송 및 최종 고객사 사업장 안착' },
      ],
    },
    safety: {
      id: 'safety',
      title: '24시간 안전진단 & 비상대응 솔루션',
      subtitle: '고압가스안전관리법 법정 위탁, 정기 누출진단, 24H 긴급출동',
      icon: 'health_and_safety',
      desc: '고객사의 가스 저장시설, 기화기, 배관 시스템의 안전성을 고압가스 법정 기준에 부합하도록 종합 관리하며, 비상 상황 발생 시 1588-0000 핫라인을 통해 17개 거점 영업소의 안전 전문 요원이 즉시 출동합니다.',
      features: [
        '고압가스 안전관리자 총괄 법정 대행 및 정기검사 수검',
        '초음파 가스 누출 탐지기 및 열화상 적외선 카메라 정밀 검사',
        '지진 감지 연동 긴급 차단 밸브(ESD) 시스템 설계 및 설치',
        '연 2회 고객사 현장 맞춤형 비상 대응 모의훈련 지원',
      ],
      steps: [
        { num: '01', title: '시설 현장 진단', desc: '배관 부식, 밸브 기밀, 게이지 검교정 정밀 측정' },
        { num: '02', title: '위험성 평가(HAZOP)', desc: '공정 위험 요인 식별 및 안전 개선책 수립' },
        { num: '03', title: '24H 중앙 관제 연동', desc: '원격 압력/온도 모니터링 시스템 구축' },
        { num: '04', title: '상시 긴급 출동망', desc: '전국 17개 거점 비상 대응 기동반 상시 대기' },
      ],
    },
  };

  const currentService = services[activeTab];

  return (
    <div className="w-full bg-[#f7f9ff] py-12 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono-tech text-xs text-[#00658d] font-bold tracking-widest uppercase">
            TOTAL ENGINEERING SERVICES
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0e1d2a] tracking-tight">
            단순 공급을 넘어선<br />
            엔지니어링 &amp; 안전 토탈 케어
          </h1>
          <p className="text-sm sm:text-base text-[#424750] leading-relaxed">
            반세기 축적된 고압가스 시공 노하우와 국가 공인 분석 기술력으로 안전성과 품질을 철저히 보증합니다.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-white p-2 rounded-2xl shadow-sm border border-[#e3efff]">
          {(['analysis', 'purge', 'export', 'safety'] as const).map((key) => {
            const s = services[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`p-4 rounded-xl text-left transition-all cursor-pointer flex items-center gap-3 ${
                  isActive
                    ? 'bg-[#003461] text-white shadow-md'
                    : 'text-[#424750] hover:bg-[#edf4ff]'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-white/20 text-[#41befd]' : 'bg-[#edf4ff] text-[#003461]'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                </div>
                <div>
                  <div className={`text-xs font-bold ${isActive ? 'text-white' : 'text-[#0e1d2a]'}`}>
                    {key === 'analysis' && '가스 정밀분석'}
                    {key === 'purge' && '가스퍼지 엔지니어링'}
                    {key === 'export' && '글로벌 수출입'}
                    {key === 'safety' && '24H 안전진단'}
                  </div>
                  <div className={`text-[11px] ${isActive ? 'text-[#c6e7ff]' : 'text-[#727781]'}`}>
                    SERVICE 0{key === 'analysis' ? 1 : key === 'purge' ? 2 : key === 'export' ? 3 : 4}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detail Showcase */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#e3efff] space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#edf4ff] pb-6">
            <div className="space-y-2">
              <span className="font-mono-tech text-xs text-[#00658d] font-bold">
                ENGINEERING SERVICE DETAIL
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#003461]">
                {currentService.title}
              </h2>
              <p className="text-sm font-semibold text-[#00658d]">{currentService.subtitle}</p>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-xl bg-[#003461] text-white text-xs font-bold hover:bg-[#004b87] active:scale-95 transition-all shadow-md shrink-0 cursor-pointer flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">support_agent</span>
              <span>해당 서비스 상담 문의</span>
            </button>
          </div>

          <p className="text-sm text-[#424750] leading-relaxed max-w-4xl">
            {currentService.desc}
          </p>

          {/* Key Advantages Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#003461] uppercase font-mono-tech">
              CORE CAPABILITIES &amp; CERTIFICATIONS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentService.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#edf4ff] border border-[#e3efff]">
                  <span className="material-symbols-outlined text-[#00658d] text-xl mt-0.5">verified</span>
                  <span className="text-xs font-medium text-[#0e1d2a] leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Procedure Flow */}
          <div className="space-y-4 pt-4 border-t border-[#edf4ff]">
            <h4 className="text-xs font-bold text-[#003461] uppercase font-mono-tech">
              STANDARD WORKFLOW PROCEDURE
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentService.steps.map((st) => (
                <div key={st.num} className="p-4 rounded-xl bg-[#f7f9ff] border border-[#e3efff] space-y-2 relative group hover:border-[#81cfff] transition-colors">
                  <span className="font-mono-tech text-2xl font-bold text-[#00658d] block">{st.num}</span>
                  <h5 className="text-sm font-bold text-[#0e1d2a]">{st.title}</h5>
                  <p className="text-xs text-[#727781] leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
