import React from 'react';

export const EsgPage: React.FC = () => {
  return (
    <div className="w-full bg-[#f7f9ff] py-12 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        {/* Header Banner */}
        <div className="rounded-3xl bg-[#003940] text-white p-8 sm:p-14 relative overflow-hidden shadow-xl border border-white/10">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="font-mono-tech text-xs text-[#3fd9ec] tracking-widest uppercase font-bold">
              SUSTAINABLE ENERGY TRANSFORMATION
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
              지속 가능한 미래를 여는<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3fd9ec] via-[#94f1ff] to-white">
                친환경 저탄소 ESG 경영
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#d3e4ff] leading-relaxed">
              (주)MS가스는 친환경 청정에너지 전환과 무탄소 연료 실증 R&amp;D를 선도하며, 환경(Environment), 사회(Social), 지배구조(Governance) 전 영역에서 투명하고 책임 있는 지속가능경영을 실천합니다.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-25 pointer-events-none hidden lg:block">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMv2uVFY_6WRyX0ACPDBhxUDDk_g_-k15cBJd4TDRzZyF3_srBY-vZJH4bK314WwUSu-FL3bdX61ziJ_vnjjK8GpVIePKXG5pY7S_8_ZmOuuRn5SFX89iMLGLVhMVDHxnVuMP9ovfPZuJP6q_ABdvhu3VRweSpPBSrurFRyYTlpiYLw-ZUsBKkEjPIiB-vzH2Xbxn64AN2SMPw2dqdeXDtrFqXHQMd4diqIdKtcUAEny3VSIUnkXpc"
              alt="Eco Green Plant"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Featured Project: 울산 규제자유특구 암모니아 벙커링 */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#e3efff] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#edf4ff] pb-6">
            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full bg-[#3fd9ec]/20 text-[#004f57] font-mono-tech text-xs font-bold">
                국가 국책 실증 프로젝트
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#003461] mt-2">
                울산 규제자유특구 『암모니아 TTS 벙커링 인프라 구축』 실증
              </h2>
            </div>
            <span className="text-xs font-mono-tech text-[#727781]">2022 ~ 2026 국책과제</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm text-[#424750] leading-relaxed">
                해양 탄소중립 시대를 대비하여 선박 연료로서 무탄소 암모니아를 안전하게 공급하기 위한 <strong>Truck to Ship(TTS) 벙커링 인프라</strong> 및 안전 기준을 실증하는 국가 규제특례 핵심 사업입니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-[#edf4ff] border border-[#e3efff]">
                  <h4 className="text-xs font-bold text-[#003461]">무탄소 청정연료 실증</h4>
                  <p className="text-xs text-[#424750] mt-1">온실가스 및 황산화물(SOx) 배출을 제로화하는 친환경 선박 공급</p>
                </div>
                <div className="p-4 rounded-xl bg-[#edf4ff] border border-[#e3efff]">
                  <h4 className="text-xs font-bold text-[#003461]">HAZOP 위험성 평가</h4>
                  <p className="text-xs text-[#424750] mt-1">이송 배관 및 탱크로리 커플링 결합 안전성 제3자 검증 완료</p>
                </div>
                <div className="p-4 rounded-xl bg-[#edf4ff] border border-[#e3efff]">
                  <h4 className="text-xs font-bold text-[#003461]">비상 차단(ESD) 연동</h4>
                  <p className="text-xs text-[#424750] mt-1">이상 압력 또는 미세 누출 감지 시 0.5초 이내 자동 차단 밸브</p>
                </div>
                <div className="p-4 rounded-xl bg-[#edf4ff] border border-[#e3efff]">
                  <h4 className="text-xs font-bold text-[#003461]">국가 표준 가이드 제정</h4>
                  <p className="text-xs text-[#424750] mt-1">산업통상자원부 및 KGS 암모니아 벙커링 기술기준 표준화 기여</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#edf4ff] rounded-2xl p-6 border border-[#a3c9ff] space-y-4">
              <span className="text-xs font-mono-tech text-[#00658d] font-bold">PROJECT METRICS</span>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs border-b border-[#c6e7ff] pb-2">
                  <span className="text-[#424750]">연간 온실가스 감축 기대량:</span>
                  <span className="font-mono-tech font-bold text-[#003461]">12,500 ton CO₂-eq</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-[#c6e7ff] pb-2">
                  <span className="text-[#424750]">벙커링 이송 유량:</span>
                  <span className="font-mono-tech font-bold text-[#003461]">최대 50 m³/h</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-[#c6e7ff] pb-2">
                  <span className="text-[#424750]">안전 모니터링 센서:</span>
                  <span className="font-mono-tech font-bold text-[#003461]">3중 다중화 광학식 센서</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#424750]">주관 연구기관:</span>
                  <span className="font-bold text-[#003461]">(주)MS가스 신에너지사업단</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of ESG at MS GAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* E */}
          <div className="bg-white rounded-2xl p-8 border border-[#e3efff] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">energy_savings_leaf</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#0e1d2a]">
              Environmental (친환경)
            </h3>
            <ul className="space-y-2 text-xs text-[#424750] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-base">check</span>
                <span>ISO 14001 환경경영시스템 전 사업장 적용</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-base">check</span>
                <span>충남 탄소중립 확산 유공 도지사 표창 수상</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-base">check</span>
                <span>초저온 냉열 회수형 고효율 기화기 도입</span>
              </li>
            </ul>
          </div>

          {/* S */}
          <div className="bg-white rounded-2xl p-8 border border-[#e3efff] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#003461] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">health_and_safety</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#0e1d2a]">
              Social (안전 &amp; 상생)
            </h3>
            <ul className="space-y-2 text-xs text-[#424750] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00658d] text-base">check</span>
                <span>2,000일 연속 무재해 사업장 달성 및 은탑산업훈장</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00658d] text-base">check</span>
                <span>지역 취약계층 에너지 복지 지원 및 장학재단 출연</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#00658d] text-base">check</span>
                <span>협력업체 안전보건 컨설팅 무상 지원</span>
              </li>
            </ul>
          </div>

          {/* G */}
          <div className="bg-white rounded-2xl p-8 border border-[#e3efff] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 text-[#004f57] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">account_balance</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#0e1d2a]">
              Governance (투명경영)
            </h3>
            <ul className="space-y-2 text-xs text-[#424750] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#004f57] text-base">check</span>
                <span>50년 연속 흑자 경영 및 무차입에 준하는 재무 안정성</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#004f57] text-base">check</span>
                <span>외부 공인 회계법인을 통한 철저한 회계 투명성</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#004f57] text-base">check</span>
                <span>준법감시 프로그램(Compliance) 상시 가동</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
