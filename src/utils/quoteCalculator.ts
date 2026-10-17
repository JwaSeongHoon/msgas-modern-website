export interface QuoteCalculationRequest {
  gasId: string;
  gasName: string;
  supplyType: 'tanker' | 'cylinder' | 'facility';
  volume: number; // in Nm3, kg, or cylinders
  unit: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'onetime';
  region: string;
  companyName: string;
  contactName: string;
  contactPhone: string;
  email: string;
  notes?: string;
  needRegulatorOrCE?: boolean;
}

export interface QuoteCalculationResult {
  quoteNumber: string;
  date: string;
  gasName: string;
  supplyTypeLabel: string;
  estimatedVolume: string;
  baseEstimatedPrice: number; // in KRW
  logisticsFee: number;
  facilityRentalFee: number;
  totalEstimatedPrice: number;
  tankerTypeRecommended: string;
  safetyCertsRequired: string[];
  estimatedDeliveryLeadTime: string;
  disclaimer: string;
}

export function calculateEstimatedQuote(req: QuoteCalculationRequest): QuoteCalculationResult {
  const quoteNumber = `MSG-${Date.now().toString().slice(-6)}`;
  const date = new Date().toISOString().slice(0, 10);

  // Unit rate approximations based on standard industrial gas wholesale metrics
  let unitRate = 850; // KRW per unit base
  if (req.gasId.includes('03') || req.gasName.includes('특수')) unitRate = 35000;
  else if (req.gasId.includes('04') || req.gasName.includes('의료')) unitRate = 1200;
  else if (req.gasId.includes('02') || req.gasName.includes('프로판') || req.gasName.includes('연료')) unitRate = 2100;
  else if (req.gasId.includes('05') || req.gasName.includes('표준')) unitRate = 48000;

  const rawCost = Math.max(req.volume, 1) * unitRate;

  // Logistics fee depends on supply type
  let logisticsFee = 150000;
  let tankerType = '10톤 초저온 진공단열 탱크로리';

  if (req.supplyType === 'tanker') {
    if (req.volume > 5000) tankerType = '20톤 대형 초저온 탱크로리';
    logisticsFee = 350000;
  } else if (req.supplyType === 'cylinder') {
    tankerType = '5톤 전용 위험물 실린더 운송차량 (지게차 상하차)';
    logisticsFee = 90000;
  } else {
    tankerType = '플랜트 엔지니어링 특수 시공 차량 및 크레인';
    logisticsFee = 850000;
  }

  const facilityRentalFee = req.needRegulatorOrCE ? 450000 : 0;
  const total = rawCost + logisticsFee + facilityRentalFee;

  let supplyLabel = '초저온 탱크로리 대량 공급';
  if (req.supplyType === 'cylinder') supplyLabel = '고압 실린더 번들 납품';
  else if (req.supplyType === 'facility') supplyLabel = 'CE 저장탱크 & 배관 턴키 시공';

  return {
    quoteNumber,
    date,
    gasName: req.gasName,
    supplyTypeLabel: supplyLabel,
    estimatedVolume: `${req.volume.toLocaleString()} ${req.unit}`,
    baseEstimatedPrice: Math.round(rawCost),
    logisticsFee,
    facilityRentalFee,
    totalEstimatedPrice: Math.round(total),
    tankerTypeRecommended: tankerType,
    safetyCertsRequired: [
      '고압가스안전관리법 특정설비검사 합격필증',
      'KGS 저장시설 및 공급시설 안전관리규정',
      '물질안전보건자료(MSDS) 현장 비치 의무'
    ],
    estimatedDeliveryLeadTime: req.supplyType === 'tanker' ? '영업일 기준 24~48시간 이내' : '영업일 기준 3일 이내',
    disclaimer: '본 견적은 예상 표준 단가이며, 현장 배관 여건 및 계약 물량에 따라 최종 할인 견적이 제공됩니다.'
  };
}
