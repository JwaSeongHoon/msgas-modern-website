import React, { useState } from 'react';
import { BRANCHES_DATA, BranchInfo } from '../../data/companyData';

export const FacilitiesPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedBranch, setSelectedBranch] = useState<BranchInfo>(BRANCHES_DATA[0]);

  const regions = [
    { id: 'all', label: '전체 (17개소)' },
    { id: '수도권', label: '수도권' },
    { id: '영남', label: '영남권' },
    { id: '충청', label: '충청권' },
    { id: '호남', label: '호남권' },
  ];

  const filteredBranches = BRANCHES_DATA.filter(
    (b) => selectedRegion === 'all' || b.region === selectedRegion
  );

  return (
    <div className="w-full bg-[#f7f9ff] py-12 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono-tech text-xs text-[#00658d] font-bold tracking-widest uppercase">
            NATIONWIDE NETWORK &amp; INFRASTRUCTURE
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0e1d2a] tracking-tight">
            전국 8개 권역 17개 영업소 및<br />
            첨단 초저온 충전 생산기지
          </h1>
          <p className="text-sm sm:text-base text-[#424750] leading-relaxed">
            대한민국 주요 산업 클러스터를 3시간 이내에 연결하는 자체 직영 물류 인프라와 100여 대의 초저온 전문 배송 차량을 운용합니다.
          </p>
        </div>

        {/* 3 Major Plant Facilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e3efff] group">
            <div className="h-48 relative overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6Wyc9HWOUbu69bpdP6WQwghdTfOf9MaZqJui3QGYgGgihB6UfT2NdMvoDZAXY6i_9u9vTI6_v1vlkBl84UCpuZzp4FTJfGqODbML5qVYcYzmLJFqlLaECSNA-zVwRxJJBxG7KHUSjwEFQzZaxx77Oc3Og8TvbB5ElWJeRXTH1KC1J81WecfUGt6TOniYS0iew-rEs8hqEXeXh5Y5R6rCE2ghpBVqs7WzWY6FmJzgOMBa2t2LY28J2"
                alt="Facility 01"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 bg-black/60 text-white font-mono-tech text-xs px-2.5 py-1 rounded">
                PLANT 01
              </span>
            </div>
            <div className="p-5 space-y-1">
              <h3 className="font-bold text-base text-[#003461]">초저온 자동 충전 매니폴드</h3>
              <p className="text-xs text-[#424750] leading-relaxed">
                전자동 유량 제어 및 0.1bar 단위 정밀 감압 충전 시스템으로 오염 없는 안전한 실린더 충전을 보증합니다.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e3efff] group">
            <div className="h-48 relative overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYsOB-kGtEZ1WacCDXSrFaEtmjaRPXVJsXexFLMge08U0UQkZLMLnStNQLWsVOPMqYnYsdZxJkRahoPXxdDsLgLkd--WNvljm1udagCzYeZKnPduJAxtZLjP9eABjNGZPBKRUQaUTtcKF5uKEusOhdBFWVO_HOCDP8WF7DnCRED3cRsSkwvqAwU-zqosM1U26YOfCP7c7yn5sBKBfrmfnJHb2Afbi8nQX3HyljaD5jUxdECSJna5Co"
                alt="Facility 02"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 bg-black/60 text-white font-mono-tech text-xs px-2.5 py-1 rounded">
                PLANT 02
              </span>
            </div>
            <div className="p-5 space-y-1">
              <h3 className="font-bold text-base text-[#003461]">가스분석 R&amp;D 센터</h3>
              <p className="text-xs text-[#424750] leading-relaxed">
                GC-PDHID 및 정밀 수분 분석기로 UHP 6N 반도체용 가스 및 표준가스의 ppm/ppb 단위 품질 전수 검사.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e3efff] group">
            <div className="h-48 relative overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtLTs91qrMm5uGMafD_b90JOPz5_0MJOofnjXR3MsTUNPMtN2dRP6QFiWJvtvipvZ5ZrfFu0-rCEIudRWRQVfI6AOZIqtm5VJmon5gEzwD3om4ngoWxlDhRsg8EJHSZsZFWv9m8e8CEIvc116ytOPESv3MJ9fE2ogVtHhxXKXMxweYNgu_o753T4Uha5g8oKOczrg7vFu5DERfeg3ZMNEp_aRfyFU7mY7Er33qRtFMjI9Lg-v5GF4k"
                alt="Facility 03"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 bg-black/60 text-white font-mono-tech text-xs px-2.5 py-1 rounded">
                PLANT 03
              </span>
            </div>
            <div className="p-5 space-y-1">
              <h3 className="font-bold text-base text-[#003461]">중앙 제어 인스트루먼트</h3>
              <p className="text-xs text-[#424750] leading-relaxed">
                전국 저장탱크의 잔량, 압력 및 긴급 차단 밸브(ESD) 상태를 24시간 실시간 무인 모니터링합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Branch Network Interactive Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#0e1d2a]">
                전국 거점 영업소 &amp; 충전소 안내
              </h2>
              <p className="text-xs text-[#727781] mt-0.5">원하시는 권역을 선택하시면 상세 위치와 설비 내역을 확인하실 수 있습니다.</p>
            </div>

            {/* Region Filters */}
            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-xl border border-[#e3efff]">
              {regions.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRegion(r.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedRegion === r.id
                      ? 'bg-[#003461] text-white shadow-xs'
                      : 'text-[#424750] hover:bg-[#edf4ff]'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Branches List */}
            <div className="lg:col-span-5 space-y-3 max-h-[580px] overflow-y-auto pr-1">
              {filteredBranches.map((branch) => {
                const isSelected = selectedBranch.id === branch.id;
                return (
                  <button
                    key={branch.id}
                    onClick={() => setSelectedBranch(branch)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#003461] shadow-md ring-2 ring-[#003461]/20'
                        : 'bg-white border-[#e3efff] hover:border-[#a3c9ff]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-mono-tech px-2 py-0.5 rounded bg-[#edf4ff] text-[#00658d] font-bold">
                        {branch.region}
                      </span>
                      <span className="text-[11px] text-[#727781] font-mono-tech font-bold">
                        탱크로리 {branch.tankersStationed}대 상시 배치
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#003461]">{branch.name}</h4>
                    <p className="text-xs text-[#424750] mt-1 truncate">{branch.address}</p>
                    <div className="mt-2 pt-2 border-t border-[#edf4ff] flex items-center justify-between text-xs text-[#00658d]">
                      <span>TEL: {branch.tel}</span>
                      <span className="font-semibold flex items-center gap-0.5">
                        선택 보기 <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Map & Spec Panel */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#e3efff] space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#edf4ff] pb-4">
                <div>
                  <span className="text-xs font-mono-tech text-[#00658d] font-bold">BRANCH DETAILS</span>
                  <h3 className="text-2xl font-bold font-display text-[#003461] mt-0.5">
                    {selectedBranch.name}
                  </h3>
                  <span className="inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full bg-[#edf4ff] text-[#003461] font-medium">
                    {selectedBranch.type}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#727781] block">대표 전화</span>
                  <a href={`tel:${selectedBranch.tel}`} className="text-lg font-bold font-mono-tech text-[#003461] hover:underline">
                    {selectedBranch.tel}
                  </a>
                </div>
              </div>

              {/* Simulated Map Visual */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-[#1b2733] flex items-center justify-center border border-[#e3efff]">
                {/* SVG Decorative Korea Regional Grid */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full object-cover" viewBox="0 0 400 300">
                    <circle cx="200" cy="150" r="120" stroke="#41befd" strokeDasharray="4 4" fill="none" />
                    <circle cx="200" cy="150" r="60" stroke="#3fd9ec" fill="none" />
                    <line x1="200" y1="0" x2="200" y2="300" stroke="#81cfff" opacity="0.3" />
                    <line x1="0" y1="150" x2="400" y2="150" stroke="#81cfff" opacity="0.3" />
                  </svg>
                </div>
                <div className="relative text-center p-6 space-y-2 text-white">
                  <div className="w-12 h-12 rounded-full bg-[#41befd]/20 border border-[#41befd] flex items-center justify-center mx-auto text-[#94f1ff] animate-bounce">
                    <span className="material-symbols-outlined text-2xl">pin_drop</span>
                  </div>
                  <h4 className="text-lg font-bold font-display">{selectedBranch.name}</h4>
                  <p className="text-xs text-[#c6e7ff] font-mono-tech">{selectedBranch.address}</p>
                  <div className="pt-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono-tech">
                      위성 GPS 정상 연동 · 실시간 가동 중
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Facility Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#003461] uppercase font-mono-tech">
                  보유 핵심 설비 및 물류 사양
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedBranch.keyFacilities.map((fac, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-[#edf4ff] text-xs font-semibold text-[#003461]">
                      <span className="material-symbols-outlined text-base">check_circle</span>
                      <span>{fac}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#edf4ff] text-xs font-semibold text-[#003461]">
                    <span className="material-symbols-outlined text-base">local_shipping</span>
                    <span>배치 탱크로리: {selectedBranch.tankersStationed} 대</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#edf4ff] text-xs font-semibold text-[#003461]">
                    <span className="material-symbols-outlined text-base">fax</span>
                    <span>FAX: {selectedBranch.fax}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-[#727781]">24시간 긴급 출동 지원 가능 거점</span>
                <button
                  onClick={() => alert(`${selectedBranch.name} 대표번호 (${selectedBranch.tel})로 연결합니다.`)}
                  className="px-5 py-2.5 rounded-xl bg-[#003461] text-white text-xs font-bold hover:bg-[#004b87] shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  <span>지점 직통 상담</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
