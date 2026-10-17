import React from 'react';

interface HeroSectionProps {
  onScrollToProducts: () => void;
  onOpenQuote: () => void;
  onOpenMSDS: () => void;
  onOpenPortal: () => void;
  language: 'KOR' | 'ENG';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToProducts,
  onOpenQuote,
  onOpenMSDS,
  onOpenPortal,
  language,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#003461] text-white">
      {/* Ambient Energy Vector Layer & Technical Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg className="w-full h-full object-cover" fill="none" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
          <circle cx="1100" cy="200" fill="url(#hero-radial-1)" r="450"></circle>
          <circle cx="200" cy="700" fill="url(#hero-radial-2)" r="350"></circle>
          <path className="text-[#3fd9ec] opacity-40" d="M-100 450 Q 400 300 800 480 T 1600 380" stroke="currentColor" strokeDasharray="6 6" strokeWidth="1.5"></path>
          <path className="text-[#c6e7ff] opacity-30" d="M-100 520 Q 500 380 900 540 T 1600 430" stroke="currentColor" strokeWidth="1"></path>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(1100 200) rotate(90) scale(450)" gradientUnits="userSpaceOnUse" id="hero-radial-1" r="1">
              <stop stopColor="#41befd" stopOpacity="0.45"></stop>
              <stop offset="1" stopColor="#003461" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(200 700) rotate(90) scale(350)" gradientUnits="userSpaceOnUse" id="hero-radial-2" r="1">
              <stop stopColor="#3fd9ec" stopOpacity="0.3"></stop>
              <stop offset="1" stopColor="#003461" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 flex flex-col justify-between">
        {/* Top Micro-Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white font-mono-tech text-xs shadow-xs border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#3fd9ec] animate-ping"></span>
            1974-2025 대한민국 고압가스 51주년
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#c6e7ff] font-mono-tech text-xs border border-white/10">
            <span className="material-symbols-outlined text-[14px]">verified</span> ISO 9001 · 14001 · 45001 &amp; KGS
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#41befd]/20 text-white font-mono-tech text-xs border border-[#41befd]/30">
            <span className="material-symbols-outlined text-[14px]">local_shipping</span> 전국 24H 실시간 모니터링 관제
          </span>
        </div>

        {/* Core Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-3">
              <p className="font-mono-tech text-xs text-[#81cfff] tracking-widest uppercase font-semibold">
                // TOTAL CRYOGENIC &amp; SPECIALTY GAS INFRASTRUCTURE
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.15] tracking-tight">
                가스 설계부터 공급, 유지까지<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81cfff] via-[#94f1ff] to-white">
                  원스톱 토탈 가스 솔루션
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#d3e4ff] leading-relaxed max-w-2xl font-normal">
              {language === 'KOR'
                ? '보이지 않는 에너지를 통해 사람들의 일상과 첨단 산업을 견고히 연결합니다. 1974년 창립 이래 반도체, 석유화학, 의료, 수소 에너지 생태계의 기반을 지켜온 MS가스의 기술력과 신뢰를 경험하십시오.'
                : 'Connecting daily life with high-tech industries through invisible energy. Experience MS GAS’s 50-year heritage of safety and excellence across semiconductors, petrochemicals, healthcare, and clean hydrogen.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onScrollToProducts}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#41befd] text-[#004b69] text-sm font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>제품 라인업 보기</span>
                <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
              </button>
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 backdrop-blur-md text-white text-sm font-semibold hover:bg-white/25 active:scale-95 transition-all cursor-pointer border border-white/20"
              >
                <span className="material-symbols-outlined text-[20px]">request_quote</span>
                <span>납품 및 빠른 견적 문의</span>
              </button>
              <button
                onClick={onOpenMSDS}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-[#a3c9ff] text-sm font-medium hover:text-white transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                <span>MSDS 자료실</span>
              </button>
            </div>
          </div>

          {/* Visual Hero Card: Modern Tank Fleet & Cryogenic Node */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg p-2 border border-white/15 group">
              <div className="relative w-full h-80 rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Modern industrial MS GAS tanker trucks at cryogenic supply station facility"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfl2ZbUfaRtysPPU7OixViP_4p1TPByvH-oxUxAbmDFANnsKvQ629ZSsgttVl0xWFOj2TjMhpAU3dN7IBLU_fWrWXhzXxMH-wF9kJJfqZMNhm5U4xdI12jmKpXgthjdYnbbFRNI69i1wILBPbvqAmhyoLnOyOYD12pcmwE7V3dMuNSWsYKRoZcO3v3cA8g0bqHH1OmLUYBPwLvrvgL0RWHAqat8aWYgBbj0PytwO6i5aZ5BfoYG3gp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003461] via-[#003461]/30 to-transparent"></div>

                {/* Floating Live Status Tag */}
                <div className="absolute top-4 left-4 bg-[#003461]/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg flex items-center gap-2 shadow-md border border-white/15">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-mono-tech text-xs text-white tracking-wider font-semibold">
                    FLEET ACTIVE · 100% REGIONAL DISPATCH
                  </span>
                </div>

                {/* Overlaid Bottom Spec Box (Clickable to open live tracker) */}
                <button
                  onClick={onOpenPortal}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xl p-4 rounded-xl text-[#0e1d2a] flex items-center justify-between shadow-lg text-left hover:bg-white transition-all cursor-pointer border border-[#c2c6d1]/40 group-hover:border-[#41befd]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#dbeafc] flex items-center justify-center text-[#003461]">
                      <span className="material-symbols-outlined">satellite_alt</span>
                    </div>
                    <div>
                      <div className="text-sm text-[#003461] font-bold">전국 초저온 배송 관제망</div>
                      <div className="font-mono-tech text-xs text-[#424750]">L-N2 · L-O2 · L-Ar · L-CO2 Tankers</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono-tech text-xs text-[#00658d] font-bold">24H SAFETY</div>
                    <div className="text-[11px] text-[#727781] font-mono-tech">GPS MESH CONNECTED</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
