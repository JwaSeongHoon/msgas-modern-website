import React, { useState } from 'react';

interface QuickPortalSectionProps {
  onNavigate: (view: string) => void;
  onOpenQuote: () => void;
  onOpenMSDS: () => void;
}

export const QuickPortalSection: React.FC<QuickPortalSectionProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const [companyName, setCompanyName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [gasCategory, setGasCategory] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !contactPhone.trim()) {
      setErrorMsg('회사명과 연락처를 모두 입력해 주십시오.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#003461] text-white py-16" id="quick-inquiry">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono-tech text-xs text-[#81cfff] tracking-widest uppercase font-semibold">
            CUSTOMER FAST-TRACK ACCESS
          </span>
          <h2 className="font-display text-3xl font-bold text-white tracking-tight mt-1">
            원하시는 업무를 즉시 도와드립니다
          </h2>
          <p className="text-sm text-[#d3e4ff] mt-2">
            신규 공급 상담, 정기 계약 체결, 물질안전보건자료 열람 및 지점 위치 안내
          </p>
        </div>

        {/* 4 Quick Portals Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Portal 1: Company Profile */}
          <button
            onClick={() => onNavigate('company')}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-all flex flex-col justify-between group shadow-sm text-left border border-white/10 cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#41befd]/20 flex items-center justify-center text-[#94f1ff] mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">apartment</span>
              </div>
              <h3 className="text-lg font-bold text-white">회사소개</h3>
              <p className="text-xs text-[#d3e4ff] mt-2 leading-relaxed">
                50년의 역사와 경영이념, CEO 인사말 및 비전을 확인하실 수 있습니다.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-1 text-xs text-[#81cfff] font-semibold group-hover:translate-x-1 transition-transform">
              <span>소개 바로가기</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </button>

          {/* Portal 2: Online Inquiry */}
          <button
            onClick={onOpenQuote}
            className="bg-gradient-to-br from-[#00658d]/50 to-[#41befd]/30 backdrop-blur-md rounded-2xl p-6 hover:scale-105 transition-all flex flex-col justify-between group shadow-lg text-left border border-[#41befd]/40 cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white text-[#003461] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-2xl">support_agent</span>
              </div>
              <h3 className="text-lg font-bold text-white">온라인 상담 &amp; 견적</h3>
              <p className="text-xs text-[#d3e4ff] mt-2 leading-relaxed">
                가스 품목별 대량 납품 단가 및 설비 시공 상담을 신속하게 접수합니다.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-1 text-xs text-white font-bold group-hover:translate-x-1 transition-transform">
              <span>견적 접수하기</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </button>

          {/* Portal 3: Notice & News */}
          <button
            onClick={() => onNavigate('support')}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-all flex flex-col justify-between group shadow-sm text-left border border-white/10 cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#3fd9ec]/20 flex items-center justify-center text-[#94f1ff] mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">campaign</span>
              </div>
              <h3 className="text-lg font-bold text-white">새로운 소식</h3>
              <p className="text-xs text-[#d3e4ff] mt-2 leading-relaxed">
                입찰공고, 보도자료, 실증특례 소식 및 기업 공시를 안내해 드립니다.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-1 text-xs text-[#81cfff] font-semibold group-hover:translate-x-1 transition-transform">
              <span>공지 확인</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </button>

          {/* Portal 4: Network & Direction */}
          <button
            onClick={() => onNavigate('facilities')}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-all flex flex-col justify-between group shadow-sm text-left border border-white/10 cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#a3c9ff]/20 flex items-center justify-center text-[#c6e7ff] mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">pin_drop</span>
              </div>
              <h3 className="text-lg font-bold text-white">오시는 길 (전국망)</h3>
              <p className="text-xs text-[#d3e4ff] mt-2 leading-relaxed">
                본사 및 8개 권역 17개 직영 영업소와 충전 기지의 위치를 확인하십시오.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-1 text-xs text-[#81cfff] font-semibold group-hover:translate-x-1 transition-transform">
              <span>거점 위치 보기</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </button>
        </div>

        {/* Quick Interactive Consultation Form Strip */}
        <div className="mt-12 p-8 rounded-2xl bg-white text-[#0e1d2a] shadow-2xl border border-[#c2c6d1]/30">
          {submitted ? (
            <div className="py-6 px-4 text-center space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
              <h4 className="text-xl font-bold text-[#003461]">빠른 견적 상담 신청이 완료되었습니다!</h4>
              <p className="text-sm text-[#424750] max-w-md mx-auto">
                <span className="font-bold text-[#00658d]">{companyName}</span> 님의 문의가 기술영업본부로 접수되었습니다. 담당 엔지니어가 2시간 이내에 기재해주신 연락처로 상담 안내를 드립니다.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setCompanyName('');
                    setContactPhone('');
                  }}
                  className="px-5 py-2 text-xs font-semibold rounded-lg bg-[#edf4ff] text-[#003461] hover:bg-[#dbeafc]"
                >
                  추가 문의 작성하기
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4">
                <span className="font-mono-tech text-xs text-[#00658d] font-bold">FAST INQUIRY</span>
                <h4 className="font-display text-xl font-bold text-[#003461] mt-1">빠른 가스 견적 상담 신청</h4>
                <p className="text-xs text-[#424750] mt-1">담당 부서에서 영업일 기준 2시간 이내 회신드립니다.</p>
                {errorMsg && <p className="text-xs text-red-600 mt-2 font-medium">{errorMsg}</p>}
              </div>
              <div className="lg:col-span-8 flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="회사명 / 담당자명 *"
                  className="flex-1 px-4 py-3 rounded-xl bg-[#edf4ff] border border-transparent focus:border-[#00658d] focus:bg-white focus:outline-none text-sm text-[#0e1d2a] transition-all"
                />
                <input
                  type="tel"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="연락처 (010-0000-0000) *"
                  className="flex-1 px-4 py-3 rounded-xl bg-[#edf4ff] border border-transparent focus:border-[#00658d] focus:bg-white focus:outline-none text-sm text-[#0e1d2a] transition-all"
                />
                <select
                  value={gasCategory}
                  onChange={(e) => setGasCategory(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-[#edf4ff] border border-transparent focus:border-[#00658d] focus:bg-white focus:outline-none text-sm text-[#0e1d2a] transition-all cursor-pointer"
                >
                  <option value="">필요 가스 분류 선택</option>
                  <option value="industrial">산업용 가스 (벌크/실린더)</option>
                  <option value="specialty">전자·특수 가스 (초고순도)</option>
                  <option value="fuel">연료용 가스 (프로판/LPG)</option>
                  <option value="medical">의료용 가스 (병원용)</option>
                  <option value="standard">표준·혼합 가스</option>
                  <option value="engineering">설비 시공 / 가스 퍼지</option>
                </select>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#003461] text-white text-sm font-bold hover:bg-[#004b87] active:scale-95 transition-all shrink-0 shadow-md cursor-pointer"
                >
                  신청 접수
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
