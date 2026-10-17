import React from 'react';

interface ServicesSectionProps {
  onOpenServiceDetail: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenServiceDetail }) => {
  return (
    <section className="w-full bg-[#edf4ff] py-20" id="services-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono-tech text-xs text-[#00658d] font-bold tracking-widest uppercase">
            TOTAL SERVICE ENGINEERING
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0e1d2a] tracking-tight mt-2">
            가스 공급을 넘어선 안전과 품질의 완벽한 케어
          </h2>
          <p className="text-base text-[#424750] mt-2 leading-relaxed">
            MS가스는 단순 가스 유통에 그치지 않고, 고객 사업장의 가스 안전성 검증부터 첨단 분석, 글로벌 수출입, 배관 퍼지까지 현장 맞춤형 전문 엔지니어링 서비스를 제공합니다.
          </p>
        </div>

        {/* 4 Core Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 01: 가스분석 서비스 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between border border-[#e3efff] group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#edf4ff] flex items-center justify-center text-[#003461] mb-5 group-hover:bg-[#003461] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">science</span>
              </div>
              <span className="font-mono-tech text-xs text-[#00658d] font-bold">SERVICE 01</span>
              <h4 className="font-display text-lg font-bold text-[#0e1d2a] mt-1 group-hover:text-[#003461] transition-colors">
                가스 정밀분석 서비스
              </h4>
              <p className="text-sm text-[#424750] mt-3 leading-relaxed">
                가스크로마토그래피(GC), 노점계, 미량 산소·수분 분석기를 통한 ppm, ppb 단위 미량 불순물 검출 및 공인 성적서 발급.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onOpenServiceDetail('analysis')}
                className="inline-flex items-center gap-1 text-sm text-[#003461] font-bold hover:gap-2 transition-all cursor-pointer"
              >
                <span>분석 프로세스 확인</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>

          {/* 02: 가스퍼지 서비스 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between border border-[#e3efff] group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#edf4ff] flex items-center justify-center text-[#003461] mb-5 group-hover:bg-[#003461] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">air</span>
              </div>
              <span className="font-mono-tech text-xs text-[#00658d] font-bold">SERVICE 02</span>
              <h4 className="font-display text-lg font-bold text-[#0e1d2a] mt-1 group-hover:text-[#003461] transition-colors">
                가스퍼지(Purge) 엔지니어링
              </h4>
              <p className="text-sm text-[#424750] mt-3 leading-relaxed">
                신축 플랜트 배관, 대형 저장탱크 및 선박 연료 이송 전 고순도 질소(N₂) 가압 퍼지 및 산소 치환으로 폭발 위험 원천 차단.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onOpenServiceDetail('purge')}
                className="inline-flex items-center gap-1 text-sm text-[#003461] font-bold hover:gap-2 transition-all cursor-pointer"
              >
                <span>퍼지 현장 시공사례</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>

          {/* 03: 수출입 서비스 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between border border-[#e3efff] group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#edf4ff] flex items-center justify-center text-[#003461] mb-5 group-hover:bg-[#003461] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">sailing</span>
              </div>
              <span className="font-mono-tech text-xs text-[#00658d] font-bold">SERVICE 03</span>
              <h4 className="font-display text-lg font-bold text-[#0e1d2a] mt-1 group-hover:text-[#003461] transition-colors">
                글로벌 수출입 원스톱
              </h4>
              <p className="text-sm text-[#424750] mt-3 leading-relaxed">
                위험물 해상·항공 운송 규정(IMDG Code) 준수, ISO 탱크 컨테이너 및 Y-실린더의 신속한 수출입 통관 및 글로벌 공급망 직결.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onOpenServiceDetail('export')}
                className="inline-flex items-center gap-1 text-sm text-[#003461] font-bold hover:gap-2 transition-all cursor-pointer"
              >
                <span>글로벌 파트너스</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>

          {/* 04: 안전관리 서비스 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between border border-[#e3efff] group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#edf4ff] flex items-center justify-center text-[#003461] mb-5 group-hover:bg-[#003461] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">health_and_safety</span>
              </div>
              <span className="font-mono-tech text-xs text-[#00658d] font-bold">SERVICE 04</span>
              <h4 className="font-display text-lg font-bold text-[#0e1d2a] mt-1 group-hover:text-[#003461] transition-colors">
                24시간 안전진단 &amp; 비상대응
              </h4>
              <p className="text-sm text-[#424750] mt-3 leading-relaxed">
                고압가스 안전관리자 법정 위탁, 정기 누출 탐지, 가스 누출 감지기 연동 안전 차단 및 24H 긴급 비상 출동 네트워크 가동.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onOpenServiceDetail('safety')}
                className="inline-flex items-center gap-1 text-sm text-[#003461] font-bold hover:gap-2 transition-all cursor-pointer"
              >
                <span>안전관리 규정 보기</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
