import React from 'react';
import { NOTICES_DATA, NoticeItem } from '../data/companyData';

interface NewsSectionProps {
  onSelectNotice: (notice: NoticeItem) => void;
  onNavigateToSupport: () => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  onSelectNotice,
  onNavigateToSupport,
}) => {
  const featured = NOTICES_DATA[0];
  const listItems = NOTICES_DATA.slice(1, 4);

  return (
    <section className="w-full bg-[#f7f9ff] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-mono-tech text-xs text-[#00658d] font-bold tracking-widest uppercase">
              PRESS &amp; OFFICIAL NOTICES
            </span>
            <h2 className="font-display text-3xl font-bold text-[#0e1d2a] tracking-tight mt-1">
              MS가스의 새로운 소식을 전달드립니다
            </h2>
          </div>
          <button
            onClick={onNavigateToSupport}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#e3efff] text-[#003461] text-sm font-semibold hover:bg-[#dbeafc] transition-colors cursor-pointer"
          >
            <span>전체 공지사항</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        {/* Notice List & Featured Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Tender / Special Notice */}
          <div
            onClick={() => onSelectNotice(featured)}
            className="lg:col-span-6 bg-white rounded-2xl p-8 shadow-md flex flex-col justify-between border border-[#e3efff] hover:border-[#41befd] transition-all cursor-pointer group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#c6e7ff] text-[#003461] font-mono-tech text-xs font-bold">
                  {featured.category}
                </span>
                <span className="font-mono-tech text-xs text-[#727781]">{featured.date}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#0e1d2a] group-hover:text-[#003461] transition-colors leading-snug">
                {featured.title}
              </h3>
              <p className="text-sm text-[#424750] leading-relaxed">
                {featured.description}
              </p>
            </div>
            <div className="pt-6 flex items-center justify-between border-t border-[#edf4ff] mt-6">
              <span className="text-xs text-[#727781] font-mono-tech">담당: {featured.department}</span>
              <span className="inline-flex items-center gap-1 text-[#003461] text-sm font-bold group-hover:translate-x-1 transition-transform">
                <span>상세보기</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </span>
            </div>
          </div>

          {/* Secondary Notices List */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {listItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectNotice(item)}
                className="bg-white p-6 rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer border border-[#e3efff] hover:border-[#81cfff]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#edf4ff] font-mono-tech text-[12px] text-[#00658d] font-semibold">
                    {item.category}
                  </span>
                  <span className="font-mono-tech text-xs text-[#727781]">{item.date}</span>
                </div>
                <h4 className="text-base font-bold text-[#0e1d2a] group-hover:text-[#003461] transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h4>
                <div className="mt-3 flex items-center justify-between text-xs text-[#727781]">
                  <span>{item.description}</span>
                  <span className="material-symbols-outlined text-[#727781] group-hover:text-[#003461] text-[18px] group-hover:translate-x-1 transition-transform">
                    chevron_right
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
