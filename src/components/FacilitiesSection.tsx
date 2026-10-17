import React from 'react';

interface FacilitiesSectionProps {
  onOpenFacilityModal?: (index: number) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenFacilityModal }) => {
  const facilities = [
    {
      code: 'FACILITY 01',
      title: '초저온 충전 매니폴드',
      desc: '고순도 자동 정량 분배 시스템',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6Wyc9HWOUbu69bpdP6WQwghdTfOf9MaZqJui3QGYgGgihB6UfT2NdMvoDZAXY6i_9u9vTI6_v1vlkBl84UCpuZzp4FTJfGqODbML5qVYcYzmLJFqlLaECSNA-zVwRxJJBxG7KHUSjwEFQzZaxx77Oc3Og8TvbB5ElWJeRXTH1KC1J81WecfUGt6TOniYS0iew-rEs8hqEXeXh5Y5R6rCE2ghpBVqs7WzWY6FmJzgOMBa2t2LY28J2',
    },
    {
      code: 'FACILITY 02',
      title: '가스분석 R&D 센터',
      desc: 'ppm 단위 정밀 성분 검증기',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYsOB-kGtEZ1WacCDXSrFaEtmjaRPXVJsXexFLMge08U0UQkZLMLnStNQLWsVOPMqYnYsdZxJkRahoPXxdDsLgLkd--WNvljm1udagCzYeZKnPduJAxtZLjP9eABjNGZPBKRUQaUTtcKF5uKEusOhdBFWVO_HOCDP8WF7DnCRED3cRsSkwvqAwU-zqosM1U26YOfCP7c7yn5sBKBfrmfnJHb2Afbi8nQX3HyljaD5jUxdECSJna5Co',
    },
    {
      code: 'FACILITY 03',
      title: '중앙 제어 인스트루먼트',
      desc: '24시간 실시간 무인 모니터링',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtLTs91qrMm5uGMafD_b90JOPz5_0MJOofnjXR3MsTUNPMtN2dRP6QFiWJvtvipvZ5ZrfFu0-rCEIudRWRQVfI6AOZIqtm5VJmon5gEzwD3om4ngoWxlDhRsg8EJHSZsZFWv9m8e8CEIvc116ytOPESv3MJ9fE2ogVtHhxXKXMxweYNgu_o753T4Uha5g8oKOczrg7vFu5DERfeg3ZMNEp_aRfyFU7mY7Er33qRtFMjI9Lg-v5GF4k',
    },
  ];

  return (
    <section className="w-full bg-[#f7f9ff] py-20 border-t border-[#e3efff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text & Spec column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#e3efff] font-mono-tech text-xs text-[#00658d] font-bold">
              R&amp;D &amp; ADVANCED LAB
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0e1d2a] tracking-tight leading-tight">
              지속적인 연구와 첨단 설비로<br />
              최고의 품질 표준을 완성합니다
            </h2>
            <p className="text-base text-[#424750] leading-relaxed">
              (주)MS가스는 국가 규제자유특구(울산 암모니아 친환경 벙커링 실증 R&amp;D 등) 참여 기업으로서, 미래 청정 에너지 전환과 초정밀 분석 기술력의 고도화를 주도하고 있습니다.
            </p>

            {/* 3 Feature Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#edf4ff] border border-[#e3efff]">
                <span className="material-symbols-outlined text-[#003461] text-2xl mt-0.5">biotech</span>
                <div>
                  <h4 className="text-sm font-bold text-[#0e1d2a]">자체 가스분석 기술연구소 운영</h4>
                  <p className="text-xs text-[#424750] mt-0.5">정밀 가스크로마토그래피(GC-PDHID, GC-TCD) 기반의 0.1ppm급 불순물 제어</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#edf4ff] border border-[#e3efff]">
                <span className="material-symbols-outlined text-[#003461] text-2xl mt-0.5">energy_savings_leaf</span>
                <div>
                  <h4 className="text-sm font-bold text-[#0e1d2a]">차세대 친환경 에너지 실증 (암모니아 TTS)</h4>
                  <p className="text-xs text-[#424750] mt-0.5">울산 규제자유특구 무탄소 암모니아 트럭 투 쉽(Truck to Ship) 벙커링 인프라 구축</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#edf4ff] border border-[#e3efff]">
                <span className="material-symbols-outlined text-[#003461] text-2xl mt-0.5">verified_user</span>
                <div>
                  <h4 className="text-sm font-bold text-[#0e1d2a]">철저한 고압용기 재검사 및 밸브 관리</h4>
                  <p className="text-xs text-[#424750] mt-0.5">내압시험, 쇼트 블라스트 내외부 세척, 전용 밸브 교체 공정 전수 검사</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Facilities Visual Mosaic */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {facilities.map((fac, idx) => (
              <div
                key={fac.code}
                onClick={() => onOpenFacilityModal?.(idx)}
                className="flex flex-col rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all border border-[#e3efff] cursor-pointer group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={fac.title}
                    src={fac.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute bottom-3 left-3 text-white font-mono-tech text-xs bg-black/50 backdrop-blur-sm px-2 py-1 rounded font-semibold">
                    {fac.code}
                  </span>
                </div>
                <div className="p-4">
                  <div className="text-sm font-bold text-[#0e1d2a] group-hover:text-[#003461] transition-colors">
                    {fac.title}
                  </div>
                  <p className="text-xs text-[#727781] mt-1">{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
