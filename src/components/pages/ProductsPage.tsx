import React, { useState } from 'react';
import { PRODUCTS_DATA, GasProduct } from '../../data/companyData';

interface ProductsPageProps {
  onSelectProduct: (product: GasProduct) => void;
  onOpenQuote: (product?: GasProduct) => void;
  onOpenMSDS: (gasName: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  onOpenQuote,
  onOpenMSDS,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: '전체 품목' },
    { id: 'industrial', label: '산업용 가스' },
    { id: 'fuel', label: '연료용 가스' },
    { id: 'specialty', label: '반도체·특수가스' },
    { id: 'medical', label: '의료용 가스' },
    { id: 'standard', label: '표준가스' },
    { id: 'equipment', label: '초저온 저장설비' },
  ];

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#f7f9ff] py-12 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono-tech text-xs text-[#00658d] font-bold tracking-widest uppercase">
            PRODUCT PORTFOLIO &amp; SPECS
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0e1d2a] tracking-tight">
            대한민국 산업 전반을 아우르는<br />
            고순도 가스 종합 포트폴리오
          </h1>
          <p className="text-sm sm:text-base text-[#424750] leading-relaxed">
            기초 철강 제련부터 초미세 반도체 공정, 응급 의료 시설까지 엄격한 품질 규격에 맞추어 안정적으로 공급합니다.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e3efff] flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories Tab Strip */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-[#003461] text-white shadow-xs'
                    : 'bg-[#edf4ff] text-[#424750] hover:bg-[#dbeafc]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#727781] text-lg">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="가스명, 화학식(N2, O2...) 검색"
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#edf4ff] text-xs text-[#0e1d2a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003461] border border-transparent transition-all"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between border border-[#e3efff]"
            >
              <div className="space-y-4">
                <div
                  onClick={() => onSelectProduct(product)}
                  className="relative w-full h-48 rounded-xl overflow-hidden bg-[#edf4ff] cursor-pointer"
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={product.name}
                    src={product.image}
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#003461]/85 backdrop-blur-md text-white font-mono-tech text-xs font-semibold">
                    {product.code}
                  </span>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-white font-mono-tech text-[11px]">
                    {product.formula}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-[#00658d]">{product.categoryLabel}</span>
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-display text-xl font-bold text-[#0e1d2a] mt-1 group-hover:text-[#003461] transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <div className="text-xs font-mono-tech text-[#00658d] font-semibold mt-0.5">
                    순도: {product.purity}
                  </div>
                  <p className="text-sm text-[#424750] mt-2 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {product.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#edf4ff] text-[11px] font-mono-tech text-[#424750]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#edf4ff] mt-4 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenMSDS(product.name)}
                  className="text-xs text-[#00658d] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">description</span>
                  <span>MSDS</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="px-3 py-1.5 rounded-lg border border-[#c2c6d1] text-xs font-bold text-[#424750] hover:bg-slate-50 cursor-pointer"
                  >
                    상세 사양
                  </button>
                  <button
                    onClick={() => onOpenQuote(product)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#003461] text-white text-xs font-bold hover:bg-[#004b87] shadow-xs cursor-pointer"
                  >
                    견적 산출
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
