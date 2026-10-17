import React from 'react';
import { GasProduct } from '../data/companyData';

interface ProductModalProps {
  product: GasProduct | null;
  onClose: () => void;
  onStartQuote: (product: GasProduct) => void;
  onOpenMSDS: (gasName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onStartQuote,
  onOpenMSDS,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#e3efff] max-h-[90vh] flex flex-col">
        {/* Header with image banner */}
        <div className="relative h-56 w-full bg-[#003461] shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003461] via-[#003461]/40 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>

          {/* Title inside banner */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-[#41befd] text-[#004b69] font-mono-tech text-xs font-bold">
                {product.code}
              </span>
              <span className="text-xs text-[#c6e7ff] font-semibold">{product.categoryLabel}</span>
            </div>
            <h2 className="text-2xl font-bold font-display">{product.name}</h2>
            <p className="text-xs text-[#d3e4ff] mt-0.5">{product.englishName}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Description */}
          <div>
            <h4 className="text-xs font-bold text-[#00658d] uppercase tracking-wider font-mono-tech">
              OVERVIEW &amp; SPECIFICATION
            </h4>
            <p className="text-sm text-[#0e1d2a] mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Technical Specs Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#edf4ff] border border-[#e3efff]">
              <div className="text-xs text-[#727781] font-medium">화학식 / 구성 성분</div>
              <div className="text-base font-bold text-[#003461] font-mono-tech mt-1">{product.formula}</div>
            </div>

            <div className="p-4 rounded-xl bg-[#edf4ff] border border-[#e3efff]">
              <div className="text-xs text-[#727781] font-medium">순도 등급 (Purity)</div>
              <div className="text-base font-bold text-[#00658d] font-mono-tech mt-1">{product.purity}</div>
            </div>

            <div className="p-4 rounded-xl bg-[#edf4ff] border border-[#e3efff]">
              <div className="text-xs text-[#727781] font-medium">공급 및 배송 포맷</div>
              <div className="text-sm font-semibold text-[#0e1d2a] mt-1">{product.deliveryFormat}</div>
            </div>

            <div className="p-4 rounded-xl bg-[#edf4ff] border border-[#e3efff]">
              <div className="text-xs text-[#727781] font-medium">저장 설비 기준</div>
              <div className="text-sm font-semibold text-[#0e1d2a] mt-1">{product.storageType}</div>
            </div>
          </div>

          {/* Applications */}
          <div>
            <h4 className="text-xs font-bold text-[#00658d] uppercase tracking-wider font-mono-tech mb-2">
              주요 산업 적용 분야
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.applications.map((app, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#424750] bg-white p-2.5 rounded-lg border border-[#e3efff]">
                  <span className="material-symbols-outlined text-[#00658d] text-base">check_circle</span>
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs text-[#727781] font-medium">관련 품목 코드:</span>
            {product.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded bg-[#e3efff] text-xs font-mono-tech text-[#003461] font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 bg-[#f7f9ff] border-t border-[#edf4ff] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => onOpenMSDS(product.name)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#c2c6d1] text-xs font-bold text-[#003461] hover:bg-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">description</span>
            <span>MSDS 안전자료 열람</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#727781] hover:text-[#0e1d2a] transition-colors cursor-pointer"
            >
              닫기
            </button>
            <button
              onClick={() => {
                onClose();
                onStartQuote(product);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#003461] text-white text-xs font-bold hover:bg-[#004b87] active:scale-95 transition-all shadow-md cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">calculate</span>
              <span>이 가스로 견적 산출하기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
