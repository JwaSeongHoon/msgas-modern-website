import React from 'react';
import { PRODUCTS_DATA, GasProduct } from '../data/companyData';

interface ProductsSectionProps {
  onSelectProduct: (product: GasProduct) => void;
  onOpenCatalog: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onOpenCatalog,
}) => {
  return (
    <section className="w-full bg-[#f7f9ff] py-20" id="products-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e3efff] font-mono-tech text-xs text-[#00658d] font-bold">
              PRODUCT PORTFOLIO
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0e1d2a] tracking-tight">
              다양한 산업 분야를 아우르는 고부가가치형 가스산업
            </h2>
            <p className="text-base text-[#424750] max-w-2xl leading-relaxed">
              철강, 조선, 석유화학, 의료, 정밀 전자 반도체까지 — 대한민국 산업 전반의 핵심 에너지원과 고순도 프로세스 가스를 안정적으로 제조 및 공급합니다.
            </p>
          </div>
          <div className="shrink-0">
            <button
              onClick={onOpenCatalog}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#003461] text-white text-sm font-semibold hover:bg-[#004b87] active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              <span>가스 사양서 다운로드</span>
              <span className="material-symbols-outlined text-[18px]">download</span>
            </button>
          </div>
        </div>

        {/* 6 Gas Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between border border-[#e3efff] cursor-pointer"
            >
              <div className="space-y-4">
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-[#e3efff]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={product.name}
                    src={product.image}
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#003461]/85 backdrop-blur-md text-white font-mono-tech text-xs font-semibold">
                    {product.code}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#00658d]">{product.categoryLabel}</span>
                  <h3 className="font-display text-xl font-bold text-[#0e1d2a] mt-1 group-hover:text-[#003461] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#424750] mt-2 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-[#edf4ff] text-[12px] font-mono-tech text-[#424750] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-6 flex items-center justify-between border-t border-[#edf4ff] mt-4">
                <span className="text-xs text-[#727781] font-medium">
                  {product.category === 'industrial' && '탱크로리 / 실린더'}
                  {product.category === 'fuel' && '대형 벌크 / 저장조 설치'}
                  {product.category === 'specialty' && '정밀 전용용기 / 초순도 밸브'}
                  {product.category === 'medical' && '병원 집중배관 / 긴급공급'}
                  {product.category === 'standard' && '분석성적서(CoA) 발행'}
                  {product.category === 'equipment' && 'KGS 인허가 지원'}
                </span>
                <div className="w-10 h-10 rounded-full bg-[#edf4ff] group-hover:bg-[#003461] group-hover:text-white text-[#003461] flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
