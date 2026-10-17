import React from 'react';

interface CompanyPageProps {
  onOpenQuote: () => void;
  onNavigate: (view: string) => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onOpenQuote, onNavigate }) => {
  const milestones = [
    { year: '1974', title: 'MS가스 창립', desc: '부산 및 영남권 고압가스 충전 및 판매 사업 출범' },
    { year: '1988', title: '초저온 액화가스 대량 공급망 구축', desc: '국내 최초 초저온 진공단열 탱크로리 및 CE 저장탱크 시스템 도입' },
    { year: '1998', title: 'ISO 9001 품질경영인증 획득', desc: '산업용 가스 및 혼합가스 제조 공정 전사 품질표준화 완성' },
    { year: '2008', title: '반도체 전자특수가스(UHP 6N) 전용 공장 준공', desc: '웨이퍼 증착 및 식각용 초고순도 가스 클린룸 생산설비 가동' },
    { year: '2016', title: '의료용 고압가스 KGMP 인증 획득', desc: '의약품 제조 및 품질관리기준 적격 병원 집중배관 공급' },
    { year: '2022', title: '울산 규제자유특구 친환경 암모니아 벙커링 R&D 선정', desc: '차세대 무탄소 친환경 에너지 실증 주관사 참여' },
    { year: '2024~2025', title: '창립 51주년 및 연매출 935억 달성', desc: '전국 8개 권역 17개 영업소 및 직영 물류망을 통한 토탈 에너지 인프라 확립' },
  ];

  return (
    <div className="w-full bg-[#f7f9ff] py-12 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        {/* Hero Banner */}
        <div className="rounded-3xl bg-[#003461] text-white p-8 sm:p-14 relative overflow-hidden shadow-xl border border-white/10">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="font-mono-tech text-xs text-[#81cfff] tracking-widest uppercase font-bold">
              SINCE 1974 · CORPORATE HERITAGE
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
              대한민국 산업의 심장을 뛰게 하는<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81cfff] to-white">
                50년 전통의 가스 종합 솔루션
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#d3e4ff] leading-relaxed">
              (주)MS가스는 1974년 설립 이래 반세기 동안 대한민국의 기간산업과 첨단 기술을 든든하게 받쳐온 고압가스 선도 기업입니다. 초고순도 특수가스부터 청정 수소·암모니아 친환경 에너지까지 지속 가능한 내일을 개척합니다.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-20 pointer-events-none hidden lg:block">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzbQIsTt09Gn4Uy1nPROjlfpLB3TyQGYPlyS8CdJgE2_2ofc9Fo41ugi4KzIYKYMWUvwWzgNrAf80MgzkmpRvAhRRcbAtE7UVXd-tPkWC4lQM6nDix5L2ivqARjUtR-aJw3rt--EBJNbu9jRg3YnpbepTLD72XzCYKEd7GvKh1EQHfpLtHRgOglB9NOAQG4fqMiJW9l0Zo0vuh06fxB_oVMLakBV_dYsa0g5nu47FX4MytBt1h-nsq"
              alt="Heritage Hourglass"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CEO Greeting Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#e3efff]">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-96 shadow-md bg-[#edf4ff]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJppSmBY2SDwP1lRTwk6cay2MgL5PEPnLi6mbPUoZLEhlQK_YUfdOb_MYsQJz7dowS5DGpqv-Z42vI4cu2l2by9syvMtCKgj1-acaqW8Xz1qrmvsLQ08rfC3V-eWFIO93pI5TdfdzIN9_hYiysbhhUueGmMqzEL91BkcSFvlXYFbiJSbyNaWdCI9u2eg52t8Ek6yh5FDEGfe5Ug9dnx-P75l0nH4ABDBNzkwuk7raiDjoSnoXrlrAr"
              alt="CEO Engineering Control Room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003461]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <span className="font-mono-tech text-xs text-[#81cfff]">CHIEF EXECUTIVE OFFICER</span>
              <p className="text-lg font-bold font-display mt-0.5">경영진 인사말</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-[#00658d] uppercase font-mono-tech">
              CEO MESSAGE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0e1d2a] leading-snug">
              “보이지 않는 청정에너지로<br />
              대한민국의 미래 산업을 견인합니다”
            </h2>
            <p className="text-sm text-[#424750] leading-relaxed">
              안녕하십니까, (주)MS가스를 아껴주시는 고객과 주주 여러분.
            </p>
            <p className="text-sm text-[#424750] leading-relaxed">
              1974년 작은 충전소에서 출발한 MS가스는 이제 대한민국 반도체, 석유화학, 바이오·의료, 수소 에너지 생태계의 기초를 지탱하는 국가적 에너지 파트너로 성장하였습니다. 50여 년간 무차입에 준하는 탄탄한 재무 건전성과 연매출 935억 원의 견고한 실적은 오직 고객사와의 신뢰가 있었기에 가능했습니다.
            </p>
            <p className="text-sm text-[#424750] leading-relaxed">
              우리는 현재에 안주하지 않고 울산 규제자유특구의 무탄소 암모니아 벙커링 인프라 실증 사업을 이끌며, 탄소중립 시대를 여는 혁신적인 엔지니어링 기업으로 힘차게 나아가고 있습니다. ‘안전 최우선’과 ‘초정밀 품질’이라는 두 개의 굳건한 축을 바탕으로 고객사의 성장을 언제나 가장 든든하게 후원하겠습니다.
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-[#edf4ff]">
              <div>
                <span className="text-xs text-[#727781] block">주식회사 MS가스</span>
                <span className="text-sm font-bold text-[#003461]">대표이사 및 임직원 일동</span>
              </div>
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 rounded-xl bg-[#003461] text-white text-xs font-bold hover:bg-[#004b87] shadow-sm cursor-pointer"
              >
                공급 계약 상담하기
              </button>
            </div>
          </div>
        </div>

        {/* 4 Core Corporate Values */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono-tech text-xs text-[#00658d] font-bold uppercase">
              CORE PHILOSOPHY
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0e1d2a]">
              MS가스를 움직이는 4대 핵심 가치
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#e3efff] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#edf4ff] text-[#003461] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <h3 className="text-lg font-bold text-[#003461]">안전 최우선 (Safety First)</h3>
              <p className="text-xs text-[#424750] leading-relaxed">
                24시간 GPS 관제망과 엄격한 법정 검사, 철저한 안전 매뉴얼로 무재해 사업장을 50년 동안 실현하고 있습니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#e3efff] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#edf4ff] text-[#00658d] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
              </div>
              <h3 className="text-lg font-bold text-[#00658d]">초정밀 품질 (Precision)</h3>
              <p className="text-xs text-[#424750] leading-relaxed">
                GC-PDHID 및 ppb 단위 가스 분석을 통해 반도체 및 첨단 산업이 요구하는 초고순도(UHP 6N)를 보증합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#e3efff] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#edf4ff] text-[#003940] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">handshake</span>
              </div>
              <h3 className="text-lg font-bold text-[#003940]">고객 가치 (Customer Value)</h3>
              <p className="text-xs text-[#424750] leading-relaxed">
                전국 8개 권역 17개 직영 영업소를 통해 3시간 이내 긴급 대응 및 끊김 없는 적기 납품을 제공합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#e3efff] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#edf4ff] text-emerald-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">eco</span>
              </div>
              <h3 className="text-lg font-bold text-emerald-800">친환경 혁신 (Green Eco)</h3>
              <p className="text-xs text-[#424750] leading-relaxed">
                무탄소 암모니아 및 청정 수소 운송 실증 R&amp;D를 선도하며 글로벌 탄소중립 2050에 적극 기여합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 50-Year Milestones Timeline */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#e3efff] space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono-tech text-xs text-[#00658d] font-bold uppercase">
                50 YEARS OF EXCELLENCE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0e1d2a] mt-1">
                반세기의 발자취 (1974 ~ 2025)
              </h2>
            </div>
            <span className="text-xs font-mono-tech text-[#727781]">51st Anniversary</span>
          </div>

          <div className="relative border-l-2 border-[#a3c9ff] ml-3 sm:ml-6 space-y-8 pl-6 sm:pl-8 py-2">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#003461] border-4 border-white shadow-xs group-hover:scale-125 transition-transform"></div>
                <div className="space-y-1">
                  <span className="font-mono-tech text-sm font-bold text-[#00658d] bg-[#edf4ff] px-2.5 py-0.5 rounded">
                    {m.year}
                  </span>
                  <h4 className="text-base font-bold text-[#0e1d2a] mt-1 group-hover:text-[#003461] transition-colors">
                    {m.title}
                  </h4>
                  <p className="text-xs text-[#424750]">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Ribbon */}
        <div className="bg-[#1b2733] text-white rounded-3xl p-8 sm:p-10 shadow-lg border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold font-display">공인 품질 및 안전 인증 현황</h3>
            <p className="text-xs text-[#a3c9ff]">국가 및 국제 인증을 통한 무결점 품질 보증</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-3.5 py-2 rounded-xl bg-white/10 font-mono-tech text-xs font-bold border border-white/10">
              ISO 9001:2015
            </span>
            <span className="px-3.5 py-2 rounded-xl bg-white/10 font-mono-tech text-xs font-bold border border-white/10">
              ISO 14001:2015
            </span>
            <span className="px-3.5 py-2 rounded-xl bg-white/10 font-mono-tech text-xs font-bold border border-white/10">
              ISO 45001:2018
            </span>
            <span className="px-3.5 py-2 rounded-xl bg-white/10 font-mono-tech text-xs font-bold border border-white/10">
              KGS 안전검사필
            </span>
            <span className="px-3.5 py-2 rounded-xl bg-white/10 font-mono-tech text-xs font-bold border border-white/10">
              KOLAS 공인시험
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
