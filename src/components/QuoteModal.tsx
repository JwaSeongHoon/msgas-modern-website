import React, { useState } from 'react';
import { PRODUCTS_DATA, GasProduct } from '../data/companyData';
import { calculateEstimatedQuote, QuoteCalculationResult } from '../utils/quoteCalculator';

interface QuoteModalProps {
  initialProduct?: GasProduct | null;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ initialProduct, onClose }) => {
  const [selectedGasId, setSelectedGasId] = useState(initialProduct ? initialProduct.id : PRODUCTS_DATA[0].id);
  const [supplyType, setSupplyType] = useState<'tanker' | 'cylinder' | 'facility'>('tanker');
  const [volume, setVolume] = useState<number>(3000);
  const [frequency, setFrequency] = useState<'daily' | 'weekly' | 'monthly' | 'onetime'>('monthly');
  const [region, setRegion] = useState('수도권 (경기/인천/평택)');
  const [needRegulator, setNeedRegulator] = useState(false);

  // Form details
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const [quoteResult, setQuoteResult] = useState<QuoteCalculationResult | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const selectedGas = PRODUCTS_DATA.find((p) => p.id === selectedGasId) || PRODUCTS_DATA[0];

  const handleCalculate = () => {
    const result = calculateEstimatedQuote({
      gasId: selectedGas.id,
      gasName: selectedGas.name,
      supplyType,
      volume,
      unit: supplyType === 'cylinder' ? '본 (Cylinders)' : 'Nm³ (벌크)',
      frequency,
      region,
      companyName,
      contactName,
      contactPhone,
      email,
      needRegulatorOrCE: needRegulator,
      notes,
    });
    setQuoteResult(result);
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !contactPhone) {
      alert('회사명과 연락처는 필수 입력 항목입니다.');
      return;
    }
    handleCalculate();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#e3efff] max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="px-6 py-5 bg-[#003461] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#41befd]">
              <span className="material-symbols-outlined text-2xl">calculate</span>
            </div>
            <div>
              <h2 className="text-xl font-bold font-display">온라인 실시간 견적 산출 및 상담 신청</h2>
              <p className="text-xs text-[#d3e4ff]">
                (주)MS가스 50년 기술력 기반 표준 단가 산정 및 전담 엔지니어 매칭
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted && quoteResult ? (
            /* Result Receipt Card */
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[#edf4ff] border border-[#a3c9ff] space-y-4">
                <div className="flex flex-wrap items-center justify-between border-b border-[#c6e7ff] pb-4">
                  <div>
                    <span className="text-xs font-mono-tech text-[#00658d] font-bold">ESTIMATED QUOTATION</span>
                    <h3 className="text-xl font-bold text-[#003461]">
                      견적 산정서 #{quoteResult.quoteNumber}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#727781] block">발행일시</span>
                    <span className="text-sm font-mono-tech font-bold text-[#0e1d2a]">{quoteResult.date}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-2">
                  <div className="bg-white p-3 rounded-xl border border-[#e3efff]">
                    <span className="text-xs text-[#727781]">선택 가스 품목</span>
                    <p className="font-bold text-[#003461] mt-0.5">{quoteResult.gasName}</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#e3efff]">
                    <span className="text-xs text-[#727781]">공급 방식</span>
                    <p className="font-bold text-[#00658d] mt-0.5">{quoteResult.supplyTypeLabel}</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#e3efff]">
                    <span className="text-xs text-[#727781]">예상 납품 수량</span>
                    <p className="font-bold text-[#0e1d2a] font-mono-tech mt-0.5">{quoteResult.estimatedVolume}</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#e3efff]">
                    <span className="text-xs text-[#727781]">예상 공급 리드타임</span>
                    <p className="font-bold text-emerald-700 mt-0.5">{quoteResult.estimatedDeliveryLeadTime}</p>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-white rounded-xl p-4 border border-[#e3efff] space-y-2">
                  <div className="flex justify-between text-xs text-[#424750]">
                    <span>기본 가스 원료비:</span>
                    <span className="font-mono-tech">{quoteResult.baseEstimatedPrice.toLocaleString()} 원</span>
                  </div>
                  <div className="flex justify-between text-xs text-[#424750]">
                    <span>초저온 위험물 전문 배송료 (전담 관제 포함):</span>
                    <span className="font-mono-tech">{quoteResult.logisticsFee.toLocaleString()} 원</span>
                  </div>
                  {quoteResult.facilityRentalFee > 0 && (
                    <div className="flex justify-between text-xs text-[#424750]">
                      <span>초저온 레귤레이터 &amp; 기화 설비 지원비:</span>
                      <span className="font-mono-tech">{quoteResult.facilityRentalFee.toLocaleString()} 원</span>
                    </div>
                  )}
                  <div className="border-t border-[#edf4ff] pt-2 flex justify-between items-baseline">
                    <span className="text-sm font-bold text-[#003461]">총 예상 견적 금액:</span>
                    <span className="text-2xl font-bold font-mono-tech text-[#00658d]">
                      {quoteResult.totalEstimatedPrice.toLocaleString()} <span className="text-sm">원 (VAT 별도)</span>
                    </span>
                  </div>
                </div>

                {/* Recommended Vehicle & Checklist */}
                <div className="space-y-2 text-xs text-[#424750]">
                  <p className="font-bold text-[#003461] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">local_shipping</span>
                    추천 배차 인프라: <span className="text-[#0e1d2a] font-normal">{quoteResult.tankerTypeRecommended}</span>
                  </p>
                  <p className="text-[11px] text-[#727781]">
                    * {quoteResult.disclaimer}
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl border border-[#c2c6d1] text-xs font-bold text-[#424750] hover:bg-slate-50 cursor-pointer"
                >
                  견적 조건 재수정
                </button>
                <button
                  onClick={() => {
                    alert('견적서가 저장되었습니다. 고객센터 1588-0000 혹은 전담 영업소로 즉시 전송되었습니다.');
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#003461] text-white text-xs font-bold hover:bg-[#004b87] shadow-md cursor-pointer"
                >
                  견적서 저장 및 상담 접수 완료
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Calculator & Input Form */
            <form onSubmit={handleSubmitQuote} className="space-y-6">
              {/* Step 1: Select Gas & Delivery Format */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-[#003461] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#003461] text-white text-xs flex items-center justify-center font-mono-tech">1</span>
                  가스 품목 및 공급 방식 선택
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {PRODUCTS_DATA.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => setSelectedGasId(product.id)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                        selectedGasId === product.id
                          ? 'border-[#003461] bg-[#edf4ff] ring-2 ring-[#003461]/20'
                          : 'border-[#e3efff] bg-white hover:border-[#a3c9ff]'
                      }`}
                    >
                      <div className="text-[11px] font-mono-tech text-[#00658d] font-bold">{product.code}</div>
                      <div className="text-xs font-bold text-[#0e1d2a] mt-0.5">{product.name}</div>
                      <div className="text-[11px] text-[#727781] font-mono-tech">{product.formula}</div>
                    </button>
                  ))}
                </div>

                {/* Supply Types */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <label
                    onClick={() => setSupplyType('tanker')}
                    className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer ${
                      supplyType === 'tanker' ? 'border-[#00658d] bg-[#edf4ff]' : 'border-[#e3efff]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="supplyType"
                      checked={supplyType === 'tanker'}
                      onChange={() => setSupplyType('tanker')}
                      className="text-[#003461]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#0e1d2a]">초저온 탱크로리 벌크</div>
                      <div className="text-[11px] text-[#727781]">10~25톤 대용량 공급</div>
                    </div>
                  </label>

                  <label
                    onClick={() => setSupplyType('cylinder')}
                    className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer ${
                      supplyType === 'cylinder' ? 'border-[#00658d] bg-[#edf4ff]' : 'border-[#e3efff]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="supplyType"
                      checked={supplyType === 'cylinder'}
                      onChange={() => setSupplyType('cylinder')}
                      className="text-[#003461]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#0e1d2a]">고압 실린더 번들</div>
                      <div className="text-[11px] text-[#727781]">47L 용기 및 번들 랙</div>
                    </div>
                  </label>

                  <label
                    onClick={() => setSupplyType('facility')}
                    className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer ${
                      supplyType === 'facility' ? 'border-[#00658d] bg-[#edf4ff]' : 'border-[#e3efff]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="supplyType"
                      checked={supplyType === 'facility'}
                      onChange={() => setSupplyType('facility')}
                      className="text-[#003461]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#0e1d2a]">CE 탱크 &amp; 플랜트 턴키</div>
                      <div className="text-[11px] text-[#727781]">저장탱크 시공 및 임대</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Step 2: Volume & Frequency */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-[#003461] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#003461] text-white text-xs flex items-center justify-center font-mono-tech">2</span>
                  예상 사용량 및 배송 주기
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#edf4ff] border border-[#e3efff]">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-[#0e1d2a]">
                        주문/계약 수량 ({supplyType === 'cylinder' ? '본' : 'Nm³'}):
                      </label>
                      <span className="font-mono-tech font-bold text-sm text-[#003461]">
                        {volume.toLocaleString()} {supplyType === 'cylinder' ? '본' : 'Nm³'}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={supplyType === 'cylinder' ? 5 : 500}
                      max={supplyType === 'cylinder' ? 300 : 30000}
                      step={supplyType === 'cylinder' ? 5 : 500}
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="w-full accent-[#003461]"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-[#edf4ff] border border-[#e3efff]">
                    <label className="text-xs font-bold text-[#0e1d2a] block mb-2">배송 및 공급 주기</label>
                    <div className="grid grid-cols-4 gap-2">
                      {(['daily', 'weekly', 'monthly', 'onetime'] as const).map((freq) => (
                        <button
                          key={freq}
                          type="button"
                          onClick={() => setFrequency(freq)}
                          className={`py-2 rounded-lg text-xs font-medium transition-all ${
                            frequency === freq
                              ? 'bg-[#003461] text-white font-bold'
                              : 'bg-white text-[#424750] border border-[#c2c6d1]'
                          }`}
                        >
                          {freq === 'daily' && '매일'}
                          {freq === 'weekly' && '주 1~2회'}
                          {freq === 'monthly' && '월정기'}
                          {freq === 'onetime' && '1회성'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#0e1d2a] block mb-1">납품 지역 (전국 8개 권역)</label>
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#c2c6d1] text-xs font-medium focus:border-[#003461] focus:outline-none"
                    >
                      <option value="수도권 (경기/인천/평택)">수도권 (서울/경기/인천/평택 클러스터)</option>
                      <option value="충청권 (천안/아산/당진/서산)">충청권 (천안/아산/당진/서산/대덕)</option>
                      <option value="영남권 (울산/온산/부산/창원/포항)">영남권 (울산/온산/부산/창원/포항/구미)</option>
                      <option value="호남권 (여수산단/광양/군산/새만금)">호남권 (여수산단/광양/군산/새만금/익산)</option>
                      <option value="강원 및 제주권">강원 및 기타 권역</option>
                    </select>
                  </div>

                  <div className="flex items-center pt-5">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-[#0e1d2a] font-medium">
                      <input
                        type="checkbox"
                        checked={needRegulator}
                        onChange={(e) => setNeedRegulator(e.target.checked)}
                        className="rounded text-[#003461] focus:ring-0"
                      />
                      <span>초저온 기화기(Vaporizer) 및 2단 감압 레귤레이터 대여/설치 포함</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Step 3: Contact & Company Details */}
              <div className="space-y-3 pt-2 border-t border-[#edf4ff]">
                <h3 className="text-sm font-bold text-[#003461] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#003461] text-white text-xs flex items-center justify-center font-mono-tech">3</span>
                  상담 신청 고객사 정보
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="회사명 (법인명) *"
                    className="px-4 py-2.5 rounded-xl border border-[#c2c6d1] text-xs text-[#0e1d2a] focus:border-[#003461] focus:outline-none"
                  />
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="담당자 성함 / 직책 *"
                    className="px-4 py-2.5 rounded-xl border border-[#c2c6d1] text-xs text-[#0e1d2a] focus:border-[#003461] focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="연락처 (010-0000-0000) *"
                    className="px-4 py-2.5 rounded-xl border border-[#c2c6d1] text-xs text-[#0e1d2a] focus:border-[#003461] focus:outline-none"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="담당자 이메일 (견적서 수신용)"
                    className="px-4 py-2.5 rounded-xl border border-[#c2c6d1] text-xs text-[#0e1d2a] focus:border-[#003461] focus:outline-none"
                  />
                </div>

                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="추가 요청사항 (공장 인허가 여부, 배관 구경, 긴급 공급 요청 등)"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#c2c6d1] text-xs text-[#0e1d2a] focus:border-[#003461] focus:outline-none resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#edf4ff]">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#727781] hover:text-[#0e1d2a] cursor-pointer"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#003461] text-white text-xs font-bold hover:bg-[#004b87] active:scale-95 transition-all shadow-md cursor-pointer flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-base">receipt_long</span>
                  <span>견적 산출 및 상담 신청</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
