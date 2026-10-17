import React, { useState } from 'react';

interface ClientPortalModalProps {
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ onClose, onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'dispatch' | 'orders' | 'safety'>('dispatch');
  const [selectedTankerId, setSelectedTankerId] = useState('TN-104');

  const liveTankers = [
    {
      id: 'TN-104',
      vehicleNo: '충남 82사 1042',
      cargo: '초저온 액체질소 (L-N₂)',
      purity: '99.9999% (UHP 6N)',
      temp: '-196.2°C',
      pressure: '1.72 bar',
      location: '경부고속도로 안성IC 부근 (상행)',
      speed: '78 km/h',
      destination: '경기 평택시 고덕 첨단 반도체 산업단지',
      eta: '45분 후 도착 예정 (11:20)',
      driver: '김진수 기사 (위험물운송자격 1급)',
      status: '운행 중 (정시 배송)',
    },
    {
      id: 'TN-208',
      vehicleNo: '울산 91바 2085',
      cargo: '초저온 액체산소 (L-O₂)',
      purity: '99.6% (의료/산업 벌크)',
      temp: '-183.1°C',
      pressure: '2.10 bar',
      location: '울산 온산 국가산업단지 진입로',
      speed: '42 km/h',
      destination: '울산 남구 석유화학 1공장 CE-02 탱크',
      eta: '15분 후 도착 예정 (10:50)',
      driver: '박상현 기사 (위험물운송자격 1급)',
      status: '하역 대기 중',
    },
    {
      id: 'TN-312',
      vehicleNo: '전남 85아 3120',
      cargo: '초저온 액체아르곤 (L-Ar)',
      purity: '99.999% (용접/특수제강)',
      temp: '-185.8°C',
      pressure: '1.95 bar',
      location: '호남고속도로 정읍 부근 (남행)',
      speed: '82 km/h',
      destination: '전남 여수 국가산단 특수합금 플랜트',
      eta: '1시간 20분 후 도착 예정 (12:05)',
      driver: '이동훈 기사 (초저온가스전문)',
      status: '운행 중 (정시 배송)',
    },
  ];

  const selectedTanker = liveTankers.find((t) => t.id === selectedTankerId) || liveTankers[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#e3efff] max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="p-6 bg-[#003461] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#41befd]">
              <span className="material-symbols-outlined text-2xl">satellite_alt</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold font-display">24H 전국 초저온 배송 관제 및 고객 포털</h3>
                <span className="px-2 py-0.5 rounded bg-emerald-400 text-emerald-950 text-[10px] font-mono-tech font-bold uppercase animate-pulse">
                  GPS LIVE
                </span>
              </div>
              <p className="text-xs text-[#d3e4ff]">
                (주)MS가스 실시간 차량 관제망 및 고객사 전용 모니터링 허브
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

        {/* Tab navigation */}
        <div className="px-6 pt-3 border-b border-[#edf4ff] bg-[#f7f9ff] flex items-center gap-4">
          <button
            onClick={() => setActiveTab('dispatch')}
            className={`pb-3 text-xs font-bold transition-all border-b-2 cursor-pointer ${
              activeTab === 'dispatch'
                ? 'border-[#003461] text-[#003461]'
                : 'border-transparent text-[#727781] hover:text-[#0e1d2a]'
            }`}
          >
            실시간 탱크로리 GPS 관제
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-3 text-xs font-bold transition-all border-b-2 cursor-pointer ${
              activeTab === 'orders'
                ? 'border-[#003461] text-[#003461]'
                : 'border-transparent text-[#727781] hover:text-[#0e1d2a]'
            }`}
          >
            공급 이력 및 성적서(CoA)
          </button>
          <button
            onClick={() => setActiveTab('safety')}
            className={`pb-3 text-xs font-bold transition-all border-b-2 cursor-pointer ${
              activeTab === 'safety'
                ? 'border-[#003461] text-[#003461]'
                : 'border-transparent text-[#727781] hover:text-[#0e1d2a]'
            }`}
          >
            안전관리자 &amp; 긴급출동 핫라인
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'dispatch' && (
            <div className="space-y-6">
              {/* Fleet status summary bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-[#edf4ff] p-3 rounded-xl border border-[#e3efff]">
                  <span className="text-[11px] text-[#727781]">운행 중 탱크로리</span>
                  <div className="text-xl font-bold font-mono-tech text-[#003461]">84 대</div>
                </div>
                <div className="bg-[#edf4ff] p-3 rounded-xl border border-[#e3efff]">
                  <span className="text-[11px] text-[#727781]">거점 대기 및 충전</span>
                  <div className="text-xl font-bold font-mono-tech text-[#00658d]">22 대</div>
                </div>
                <div className="bg-[#edf4ff] p-3 rounded-xl border border-[#e3efff]">
                  <span className="text-[11px] text-[#727781]">24시간 GPS 수신율</span>
                  <div className="text-xl font-bold font-mono-tech text-emerald-600">99.98%</div>
                </div>
                <div className="bg-[#edf4ff] p-3 rounded-xl border border-[#e3efff]">
                  <span className="text-[11px] text-[#727781]">관제 센터 상태</span>
                  <div className="text-sm font-bold text-[#003461] mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 정상 가동
                  </div>
                </div>
              </div>

              {/* Tanker Selector list */}
              <div>
                <label className="text-xs font-bold text-[#003461] block mb-2">
                  배송 중 주요 탱크로리 선택 (Live Telemetry):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {liveTankers.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTankerId(t.id)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                        selectedTankerId === t.id
                          ? 'border-[#003461] bg-[#edf4ff] ring-2 ring-[#003461]/20'
                          : 'border-[#e3efff] bg-white hover:border-[#a3c9ff]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold font-mono-tech text-[#003461]">{t.vehicleNo}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold">
                          {t.status}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-[#0e1d2a] mt-1">{t.cargo}</div>
                      <div className="text-[11px] text-[#727781] mt-0.5 truncate">{t.destination}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Detailed Live Telemetry Card */}
              <div className="bg-[#f7f9ff] rounded-2xl p-5 border border-[#e3efff] space-y-4">
                <div className="flex flex-wrap items-center justify-between border-b border-[#e3efff] pb-3">
                  <div>
                    <span className="text-[11px] font-mono-tech text-[#00658d] font-bold">TELEMETRY ID: {selectedTanker.id}</span>
                    <h4 className="text-lg font-bold text-[#003461]">{selectedTanker.vehicleNo}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-[#727781] block">담당 승무원</span>
                    <span className="text-xs font-bold text-[#0e1d2a]">{selectedTanker.driver}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-[#e3efff]">
                    <span className="text-[11px] text-[#727781]">탱크 내부 온도</span>
                    <div className="text-lg font-mono-tech font-bold text-[#00658d]">{selectedTanker.temp}</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#e3efff]">
                    <span className="text-[11px] text-[#727781]">탱크 압력</span>
                    <div className="text-lg font-mono-tech font-bold text-[#003461]">{selectedTanker.pressure}</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#e3efff]">
                    <span className="text-[11px] text-[#727781]">순도 검증 등급</span>
                    <div className="text-sm font-mono-tech font-bold text-emerald-700">{selectedTanker.purity}</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#e3efff]">
                    <span className="text-[11px] text-[#727781]">현재 주행 속도</span>
                    <div className="text-lg font-mono-tech font-bold text-[#0e1d2a]">{selectedTanker.speed}</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#e3efff] space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#0e1d2a]">
                    <span className="material-symbols-outlined text-base text-[#00658d]">navigation</span>
                    <span className="font-bold">현재 위치:</span>
                    <span>{selectedTanker.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#0e1d2a]">
                    <span className="material-symbols-outlined text-base text-emerald-600">flag</span>
                    <span className="font-bold">목적지 및 ETA:</span>
                    <span className="font-bold text-emerald-700">{selectedTanker.eta}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#003461]">최근 납품 완료 내역 및 CoA(분석성적서)</h4>
              <div className="border border-[#e3efff] rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#edf4ff] text-[#003461] font-bold">
                    <tr>
                      <th className="p-3">배송일자</th>
                      <th className="p-3">납품 품목</th>
                      <th className="p-3">수량</th>
                      <th className="p-3">도착 거점</th>
                      <th className="p-3">성적서</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#edf4ff]">
                    <tr>
                      <td className="p-3 font-mono-tech">2025.02.16</td>
                      <td className="p-3 font-semibold">초고순도 삼불화질소 (NF₃ 6N)</td>
                      <td className="p-3 font-mono-tech">1,200 kg</td>
                      <td className="p-3">평택 반도체 2공장</td>
                      <td className="p-3">
                        <button
                          onClick={() => alert('CoA 분석성적서(PDF)가 다운로드되었습니다.')}
                          className="px-2 py-1 rounded bg-[#edf4ff] text-[#003461] font-bold hover:bg-[#dbeafc]"
                        >
                          CoA 보기
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono-tech">2025.02.12</td>
                      <td className="p-3 font-semibold">액체질소 (L-N₂) 벌크</td>
                      <td className="p-3 font-mono-tech">18.5 톤</td>
                      <td className="p-3">울산 석유화학단지</td>
                      <td className="p-3">
                        <button
                          onClick={() => alert('CoA 분석성적서(PDF)가 다운로드되었습니다.')}
                          className="px-2 py-1 rounded bg-[#edf4ff] text-[#003461] font-bold hover:bg-[#dbeafc]"
                        >
                          CoA 보기
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono-tech">2025.02.08</td>
                      <td className="p-3 font-semibold">의료용 산소 (Medical O₂)</td>
                      <td className="p-3 font-mono-tech">6.2 톤</td>
                      <td className="p-3">대학병원 집중배관탱크</td>
                      <td className="p-3">
                        <button
                          onClick={() => alert('KGMP 품질검사필증(PDF)이 다운로드되었습니다.')}
                          className="px-2 py-1 rounded bg-[#edf4ff] text-[#003461] font-bold hover:bg-[#dbeafc]"
                        >
                          KGMP 필증
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'safety' && (
            <div className="space-y-4">
              <div className="bg-[#edf4ff] p-5 rounded-2xl border border-[#a3c9ff] space-y-3">
                <div className="flex items-center gap-2 text-[#003461]">
                  <span className="material-symbols-outlined text-2xl text-red-600">emergency</span>
                  <h4 className="text-base font-bold">24시간 고압가스 긴급 안전출동 센터</h4>
                </div>
                <p className="text-xs text-[#424750] leading-relaxed">
                  가스 누출 감지 경보, 초저온 밸브 이상, 저장탱크 압력 상승 시 전국 17개 영업소 및 직영 긴급대응반이 30분~1시간 이내 현장 출동합니다.
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="p-3 bg-white rounded-xl border border-[#e3efff]">
                    <span className="text-[11px] text-[#727781] block">긴급 비상 핫라인</span>
                    <span className="text-lg font-bold font-mono-tech text-red-600">1588-0000</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#e3efff]">
                    <span className="text-[11px] text-[#727781] block">중앙 통제실 직통</span>
                    <span className="text-lg font-bold font-mono-tech text-[#003461]">052-250-7000</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f7f9ff] border-t border-[#edf4ff] flex items-center justify-between shrink-0">
          <span className="text-xs text-[#727781]">
            GPS 관제 갱신 주기: 10초 간격 자동 동기화 중
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="px-4 py-2 rounded-xl bg-[#00658d] text-white text-xs font-bold hover:bg-[#004b87]"
            >
              새 공급 주문/견적 신청
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#003461] text-white text-xs font-bold hover:bg-[#002B49]"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
