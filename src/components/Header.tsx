import React, { useState } from 'react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenQuote: () => void;
  onOpenPortal: () => void;
  language: 'KOR' | 'ENG';
  setLanguage: (lang: 'KOR' | 'ENG') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenQuote,
  onOpenPortal,
  language,
  setLanguage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'company', label: language === 'KOR' ? '회사소개' : 'About Us' },
    { id: 'products', label: language === 'KOR' ? '제품소개' : 'Products' },
    { id: 'services', label: language === 'KOR' ? '서비스' : 'Services' },
    { id: 'facilities', label: language === 'KOR' ? '생산설비' : 'Facilities' },
    { id: 'esg', label: 'ESG' },
    { id: 'support', label: language === 'KOR' ? '고객지원' : 'Support' },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f9ff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e3efff]/70">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            aria-label="MS GAS Home"
          >
            <img
              alt="MS GAS Modern Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XI6m87Ps6IzLqNoaFWhvtGmjxx5ejjUfp7cCsXu7OAE7Jia9zSh67cb-fqNe0i38AMRv7U6F7XZfqqqNTEHSQvyX11pQ-IQm4F-m5bRUYKwmRj5_UOSHrItn6VP-GAD1_rQM_-c6CTdcsrhtuBX_tu1dsmD4Mei_SstyOTyFYIXuMMRnVqvPegpq7Jh8bX94eZ48660rJjgs2jZizLhgOwoMIyNjjLkGoPdg4548V3ogFcuEVpxfmpT-k"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-lg text-[#003461] tracking-tight group-hover:text-[#00658d] transition-colors">
                (주)MS가스
              </span>
              <span className="font-mono-tech text-[11px] text-[#00658d] tracking-widest uppercase font-semibold">
                Since 1974
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#003461] font-bold bg-[#edf4ff] shadow-xs'
                    : 'text-[#424750] hover:text-[#0e1d2a] hover:bg-[#edf4ff]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Tools */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Toggle */}
          <div className="hidden sm:flex items-center rounded-full bg-[#e3efff] px-2.5 py-1 text-[#424750] text-xs font-mono-tech">
            <button
              onClick={() => setLanguage('KOR')}
              className={`cursor-pointer transition-colors ${
                language === 'KOR' ? 'text-[#003461] font-bold' : 'hover:text-[#0e1d2a]'
              }`}
            >
              KOR
            </button>
            <span className="mx-1.5 text-[#727781]">/</span>
            <button
              onClick={() => setLanguage('ENG')}
              className={`cursor-pointer transition-colors ${
                language === 'ENG' ? 'text-[#003461] font-bold' : 'hover:text-[#0e1d2a]'
              }`}
            >
              ENG
            </button>
          </div>

          {/* Consultation & Quote Button */}
          <button
            onClick={onOpenQuote}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#003461] text-white text-sm font-semibold hover:bg-[#004b87] active:scale-95 transition-all shadow-[0_2px_8px_rgba(0,52,97,0.18)] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">support_agent</span>
            <span>{language === 'KOR' ? '상담 및 견적 문의' : 'Online Quote'}</span>
          </button>

          {/* User / Logistics Dispatch Tracker */}
          <button
            onClick={onOpenPortal}
            title={language === 'KOR' ? '탱크로리 배송 관제 및 회원 포털' : 'Client Dispatch Tracker'}
            className="w-9 h-9 rounded-full bg-[#003461] text-white flex items-center justify-center hover:bg-[#004b87] transition-colors cursor-pointer shadow-sm relative group"
            aria-label="User Portal"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white animate-pulse"></span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#003461] hover:bg-[#edf4ff] transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-[#e3efff] px-6 py-4 shadow-xl transition-all">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-4 py-3 rounded-xl font-semibold text-sm ${
                currentView === 'home' ? 'bg-[#edf4ff] text-[#003461]' : 'text-[#424750]'
              }`}
            >
              홈 (Home)
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-xl font-semibold text-sm ${
                  currentView === item.id ? 'bg-[#edf4ff] text-[#003461]' : 'text-[#424750]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#edf4ff] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#727781]">Language:</span>
                <button
                  onClick={() => setLanguage('KOR')}
                  className={`text-xs font-bold px-2 py-1 rounded ${
                    language === 'KOR' ? 'bg-[#003461] text-white' : 'text-[#424750]'
                  }`}
                >
                  KOR
                </button>
                <button
                  onClick={() => setLanguage('ENG')}
                  className={`text-xs font-bold px-2 py-1 rounded ${
                    language === 'ENG' ? 'bg-[#003461] text-white' : 'text-[#424750]'
                  }`}
                >
                  ENG
                </button>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="px-4 py-2 bg-[#003461] text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">support_agent</span>
                <span>견적 문의</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
