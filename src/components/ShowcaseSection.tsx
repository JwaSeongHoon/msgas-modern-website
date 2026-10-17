import React from 'react';

interface ShowcaseSectionProps {
  onNavigate: (view: string) => void;
  onOpenMSDS: () => void;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ onNavigate, onOpenMSDS }) => {
  return (
    <section className="w-full bg-[#e3efff] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* ESG Card */}
          <button
            onClick={() => onNavigate('esg')}
            className="relative group rounded-2xl overflow-hidden h-72 shadow-md hover:shadow-xl transition-all text-left cursor-pointer border border-[#c2c6d1]/50"
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="ESG Management"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMv2uVFY_6WRyX0ACPDBhxUDDk_g_-k15cBJd4TDRzZyF3_srBY-vZJH4bK314WwUSu-FL3bdX61ziJ_vnjjK8GpVIePKXG5pY7S_8_ZmOuuRn5SFX89iMLGLVhMVDHxnVuMP9ovfPZuJP6q_ABdvhu3VRweSpPBSrurFRyYTlpiYLw-ZUsBKkEjPIiB-vzH2Xbxn64AN2SMPw2dqdeXDtrFqXHQMd4diqIdKtcUAEny3VSIUnkXpc"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003461]/95 via-[#003461]/40 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <span className="font-mono-tech text-xs text-[#3fd9ec] font-bold">ESG MANAGEMENT</span>
              <div>
                <h3 className="font-display text-2xl font-bold">ESG 경영</h3>
                <p className="text-xs text-[#d3e4ff] mt-1">친환경 저탄소 청정 에너지로의 전환 선도</p>
              </div>
            </div>
          </button>

          {/* History Card */}
          <button
            onClick={() => onNavigate('company')}
            className="relative group rounded-2xl overflow-hidden h-72 shadow-md hover:shadow-xl transition-all text-left cursor-pointer border border-[#c2c6d1]/50"
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="History since 1974"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzbQIsTt09Gn4Uy1nPROjlfpLB3TyQGYPlyS8CdJgE2_2ofc9Fo41ugi4KzIYKYMWUvwWzgNrAf80MgzkmpRvAhRRcbAtE7UVXd-tPkWC4lQM6nDix5L2ivqARjUtR-aJw3rt--EBJNbu9jRg3YnpbepTLD72XzCYKEd7GvKh1EQHfpLtHRgOglB9NOAQG4fqMiJW9l0Zo0vuh06fxB_oVMLakBV_dYsa0g5nu47FX4MytBt1h-nsq"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b2733]/95 via-[#1b2733]/40 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <span className="font-mono-tech text-xs text-[#a3c9ff] font-bold">HERITAGE</span>
              <div>
                <h3 className="font-display text-2xl font-bold">1974년 설립</h3>
                <p className="text-xs text-[#d3e4ff] mt-1">반세기 역사가 증명하는 대한민국 가스 리더</p>
              </div>
            </div>
          </button>

          {/* MSDS Center Card */}
          <button
            onClick={onOpenMSDS}
            className="relative group rounded-2xl overflow-hidden h-72 shadow-md hover:shadow-xl transition-all text-left cursor-pointer border border-[#c2c6d1]/50"
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="MSDS Center"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJppSmBY2SDwP1lRTwk6cay2MgL5PEPnLi6mbPUoZLEhlQK_YUfdOb_MYsQJz7dowS5DGpqv-Z42vI4cu2l2by9syvMtCKgj1-acaqW8Xz1qrmvsLQ08rfC3V-eWFIO93pI5TdfdzIN9_hYiysbhhUueGmMqzEL91BkcSFvlXYFbiJSbyNaWdCI9u2eg52t8Ek6yh5FDEGfe5Ug9dnx-P75l0nH4ABDBNzkwuk7raiDjoSnoXrlrAr"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003461]/95 via-[#003461]/40 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <span className="font-mono-tech text-xs text-[#81cfff] font-bold">SAFETY DATA</span>
              <div>
                <h3 className="font-display text-2xl font-bold">MSDS 센터</h3>
                <p className="text-xs text-[#d3e4ff] mt-1">전 품목 물질안전보건자료 즉시 열람 및 다운로드</p>
              </div>
            </div>
          </button>

          {/* Logistics Network Card */}
          <button
            onClick={() => onNavigate('facilities')}
            className="relative group rounded-2xl overflow-hidden h-72 shadow-md hover:shadow-xl transition-all text-left cursor-pointer border border-[#c2c6d1]/50"
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Logistics Network"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj3Ioph_Z-o1edZ_ftMQO27MTzujsEnAXvu10srh0hbMTSWDGuiIFm8yxJ30g6WGMOaBbFs84VPwudaIFP0hKx5kU9SOD71SlGGu4nrIZ3-EH3KcpaIadjPNUlttN8IIHfSXXqWCGj1fBMa5tibUQ3BtsTumEGpNzswQQFgGeZFhCbyO2fk2c3j6t3o1GEZ2FuH5tTNkR4sPrCUK9Rvm9B7u5Uk0dtlKLb_SqVGbykBMFI-lILsSpm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003940]/95 via-[#003940]/40 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <span className="font-mono-tech text-xs text-[#94f1ff] font-bold">NETWORKS</span>
              <div>
                <h3 className="font-display text-2xl font-bold">전국적 운송망</h3>
                <p className="text-xs text-[#d3e4ff] mt-1">어디서든 3시간 이내 긴급 수송 지원 거점</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
