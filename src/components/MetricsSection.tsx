import React from 'react';

interface MetricsSectionProps {
  onSelectMetric?: (metric: string) => void;
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({ onSelectMetric }) => {
  return (
    <section className="w-full bg-[#1b2733] text-[#e8f2ff] py-16 relative border-y border-[#2d3f52]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header Inside Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3fd9ec]"></span>
              <span className="font-mono-tech text-xs text-[#94f1ff] tracking-widest uppercase font-semibold">
                NATIONWIDE NETWORK &amp; ANNUAL PERFORMANCE
              </span>
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">
              전국적인 네트워크를 통한 유기적 업무협력
            </h2>
            <p className="text-sm text-[#c2c6d1] max-w-xl leading-relaxed">
              자체 고도화된 운송 인프라와 17개 거점 영업소의 연계를 통해 언제 어디서나 가장 신속하고 안전한 가스 공급 체계를 유지합니다.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs text-[#a3c9ff] bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              기준년도: 2024 회계연도 (GAAP)
            </span>
          </div>
        </div>

        {/* 4 Core Metric Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Metric 1: 8 Regions */}
          <div
            onClick={() => onSelectMetric?.('regions')}
            className="bg-white/5 rounded-2xl p-6 backdrop-blur-md shadow-md flex flex-col justify-between hover:bg-white/10 transition-all group border border-white/10 cursor-pointer"
          >
            <div className="flex items-center justify-between text-[#3fd9ec]">
              <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">map</span>
              <span className="font-mono-tech text-xs text-[#a3c9ff]">01 / REGION</span>
            </div>
            <div className="pt-6">
              <div className="flex items-baseline gap-1">
                <span className="font-mono-tech text-4xl lg:text-5xl font-bold text-[#94f1ff] tracking-tight">
                  8
                </span>
                <span className="text-xl font-bold text-white">개 지역</span>
              </div>
              <p className="text-xs text-[#c2c6d1] mt-2 leading-relaxed">
                수도권, 영남, 호남, 충청 등 핵심 산업 클러스터 커버리지
              </p>
            </div>
          </div>

          {/* Metric 2: 17 Branches */}
          <div
            onClick={() => onSelectMetric?.('branches')}
            className="bg-white/5 rounded-2xl p-6 backdrop-blur-md shadow-md flex flex-col justify-between hover:bg-white/10 transition-all group border border-white/10 cursor-pointer"
          >
            <div className="flex items-center justify-between text-[#81cfff]">
              <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">domain</span>
              <span className="font-mono-tech text-xs text-[#a3c9ff]">02 / BRANCHES</span>
            </div>
            <div className="pt-6">
              <div className="flex items-baseline gap-1">
                <span className="font-mono-tech text-4xl lg:text-5xl font-bold text-[#c6e7ff] tracking-tight">
                  17
                </span>
                <span className="text-xl font-bold text-white">개 영업소</span>
              </div>
              <p className="text-xs text-[#c2c6d1] mt-2 leading-relaxed">
                직영 충전소 및 전용 위험물 물류 기지 상시 보유
              </p>
            </div>
          </div>

          {/* Metric 3: 10 Countries */}
          <div
            onClick={() => onSelectMetric?.('global')}
            className="bg-white/5 rounded-2xl p-6 backdrop-blur-md shadow-md flex flex-col justify-between hover:bg-white/10 transition-all group border border-white/10 cursor-pointer"
          >
            <div className="flex items-center justify-between text-[#a3c9ff]">
              <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">public</span>
              <span className="font-mono-tech text-xs text-[#a3c9ff]">03 / GLOBAL</span>
            </div>
            <div className="pt-6">
              <div className="flex items-baseline gap-1">
                <span className="font-mono-tech text-4xl lg:text-5xl font-bold text-[#a3c9ff] tracking-tight">
                  10
                </span>
                <span className="text-xl font-bold text-white">개국 네트워크</span>
              </div>
              <p className="text-xs text-[#c2c6d1] mt-2 leading-relaxed">
                특수가스 및 반도체 원료 해외 직소싱 파이프라인 가동
              </p>
            </div>
          </div>

          {/* Metric 4: 935 Billion KRW Revenue */}
          <div
            onClick={() => onSelectMetric?.('revenue')}
            className="bg-gradient-to-br from-[#00658d]/60 to-[#003461]/60 rounded-2xl p-6 backdrop-blur-md shadow-md flex flex-col justify-between hover:scale-[1.02] transition-all border border-[#41befd]/30 cursor-pointer"
          >
            <div className="flex items-center justify-between text-[#94f1ff]">
              <span className="material-symbols-outlined text-3xl">trending_up</span>
              <span className="font-mono-tech text-xs text-[#c6e7ff]">04 / REVENUE</span>
            </div>
            <div className="pt-6">
              <div className="flex items-baseline gap-1">
                <span className="font-mono-tech text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  935
                </span>
                <span className="text-xl font-bold text-[#c6e7ff]">억원</span>
              </div>
              <p className="text-xs text-[#81cfff] mt-2 leading-relaxed">
                안정적인 재무 건전성 및 50여년 연속 흑자 경영 기록
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
