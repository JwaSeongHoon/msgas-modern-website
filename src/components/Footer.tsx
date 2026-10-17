import React from 'react';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="w-full bg-white shadow-[0_-1px_12px_rgba(0,0,0,0.03)] border-t border-[#edf4ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="MS GAS Modern Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XI6m87Ps6IzLqNoaFWhvtGmjxx5ejjUfp7cCsXu7OAE7Jia9zSh67cb-fqNe0i38AMRv7U6F7XZfqqqNTEHSQvyX11pQ-IQm4F-m5bRUYKwmRj5_UOSHrItn6VP-GAD1_rQM_-c6CTdcsrhtuBX_tu1dsmD4Mei_SstyOTyFYIXuMMRnVqvPegpq7Jh8bX94eZ48660rJjgs2jZizLhgOwoMIyNjjLkGoPdg4548V3ogFcuEVpxfmpT-k"
              />
              <span className="font-semibold text-xl text-[#003461]">(주)MS가스</span>
            </div>
            <p className="text-sm text-[#424750] leading-relaxed max-w-md">
              1974년 설립 이래 반세기 동안 대한민국의 고압가스, 특수가스, 초고순도 가스 및 첨단 반도체 소재 공급망을 책임져온 종합 가스 제조 솔루션 기업입니다.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-[#e3efff] font-mono-tech text-xs text-[#00658d] font-semibold">
                ISO 9001 / 14001 / 45001
              </span>
              <span className="px-2.5 py-1 rounded bg-[#e3efff] font-mono-tech text-xs text-[#00658d] font-semibold">
                KGS 인증
              </span>
              <span className="px-2.5 py-1 rounded bg-[#e3efff] font-mono-tech text-xs text-[#00658d] font-semibold">
                KOLAS 공인시험기관
              </span>
            </div>
          </div>

          {/* Column 1: 기업 및 제품 */}
          <div className="flex flex-col gap-3">
            <span className="text-sm text-[#0e1d2a] font-bold">기업 및 제품</span>
            <ul className="flex flex-col gap-2 text-sm text-[#424750]">
              <li>
                <button
                  onClick={() => onNavigate('company')}
                  className="hover:text-[#003461] transition-colors text-left cursor-pointer"
                >
                  회사소개
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#003461] transition-colors text-left cursor-pointer"
                >
                  제품소개 (산업·특수·의료용)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('facilities')}
                  className="hover:text-[#003461] transition-colors text-left cursor-pointer"
                >
                  생산 및 물류설비
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#003461] transition-colors text-left cursor-pointer"
                >
                  가스 퍼지 & 정밀 분석
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: 고객 및 파트너 */}
          <div className="flex flex-col gap-3">
            <span className="text-sm text-[#0e1d2a] font-bold">고객 및 파트너</span>
            <ul className="flex flex-col gap-2 text-sm text-[#424750]">
              <li>
                <button
                  onClick={() => onNavigate('support')}
                  className="hover:text-[#003461] transition-colors text-left cursor-pointer"
                >
                  고객지원 & 공지사항
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('support')}
                  className="hover:text-[#003461] transition-colors text-left cursor-pointer"
                >
                  MSDS (물질안전보건자료)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="hover:text-[#003461] transition-colors text-left cursor-pointer"
                >
                  온라인 상담 및 견적 문의
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('facilities')}
                  className="hover:text-[#003461] transition-colors text-left cursor-pointer"
                >
                  오시는 길 (전국 네트워크)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: 지속가능경영 */}
          <div className="flex flex-col gap-3">
            <span className="text-sm text-[#0e1d2a] font-bold">지속가능경영</span>
            <ul className="flex flex-col gap-2 text-sm text-[#424750]">
              <li>
                <button
                  onClick={() => onNavigate('esg')}
                  className="hover:text-[#003461] transition-colors text-left cursor-pointer"
                >
                  ESG 경영 가치
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('esg')}
                  className="hover:text-[#003461] transition-colors text-left cursor-pointer"
                >
                  무재해 안전보건경영
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('company')}
                  className="hover:text-[#003461] transition-colors text-left cursor-pointer"
                >
                  인재채용 & 조직문화
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert('(주)MS가스 개인정보처리방침: 고객사의 비밀정보 및 주문 데이터를 고압가스안전관리법 및 개인정보보호법에 의거하여 엄격히 보호합니다.')}
                  className="hover:text-[#003461] transition-colors text-left cursor-pointer"
                >
                  개인정보처리방침
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-[#edf4ff] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#727781]">
          <div className="flex flex-col gap-1">
            <p>(주)MS가스 | 설립 1974년 | 대표이사: 경영진 일동 | 사업자등록번호: 602-81-00000</p>
            <p>본사 및 연구소: 전국 생산 거점 및 특수가스 클러스터 운영 | 고객상담: 1588-0000</p>
          </div>
          <div className="font-mono-tech text-xs text-[#727781] shrink-0">
            Copyright © 2025 (주)MS가스. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
