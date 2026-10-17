import React, { useState } from 'react';
import { NOTICES_DATA, MSDS_DOCS, NoticeItem, MSDSDocument } from '../../data/companyData';

interface SupportPageProps {
  onSelectNotice: (notice: NoticeItem) => void;
  onOpenQuote: () => void;
  initialTab?: 'notices' | 'msds' | 'faq' | 'inquiry';
}

export const SupportPage: React.FC<SupportPageProps> = ({
  onSelectNotice,
  initialTab = 'notices',
}) => {
  const [activeTab, setActiveTab] = useState<'notices' | 'msds' | 'faq' | 'inquiry'>(initialTab);
  const [searchNotice, setSearchNotice] = useState('');
  const [searchMsds, setSearchMsds] = useState('');
  const [selectedMsds, setSelectedMsds] = useState<MSDSDocument | null>(null);

  // 1:1 Inquiry state
  const [inquiryType, setInquiryType] = useState('납품 견적 및 공급 문의');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryText, setInquiryText] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const filteredNotices = NOTICES_DATA.filter(
    (n) =>
      n.title.toLowerCase().includes(searchNotice.toLowerCase()) ||
      n.description.toLowerCase().includes(searchNotice.toLowerCase()) ||
      n.category.toLowerCase().includes(searchNotice.toLowerCase())
  );

  const filteredMsds = MSDS_DOCS.filter(
    (m) =>
      m.gasName.toLowerCase().includes(searchMsds.toLowerCase()) ||
      m.casNo.toLowerCase().includes(searchMsds.toLowerCase()) ||
      m.chemicalFormula.toLowerCase().includes(searchMsds.toLowerCase())
  );

  const faqs = [
    {
      q: '초저온 가스(액체질소, 액체산소) 납품 시 최소 주문 수량이 있나요?',
      a: '탱크로리 공급 기준 최소 3톤부터 전국 전용 초저온 탱크로리로 직공급이 가능하며, 47L 고압실린더의 경우 5본부터 배송 지원됩니다. 고객사 사업장 규모에 맞추어 CE 초저온 저장탱크 턴키 설치도 함께 지원해 드립니다.',
    },
    {
      q: '신규 공장 가스 저장탱크(CE) 설치 시 KGS 인허가도 대행해 주시나요?',
      a: '네, (주)MS가스 기술엔지니어링팀에서 특정고압가스 사용신고, 한국가스안전공사(KGS) 기술검토서 작성, 기초 토목 적합성 심사 및 완성검사 필증 획득까지 턴키로 전 과정을 일괄 대행해 드립니다.',
    },
    {
      q: 'UHP 6N급 반도체 특수가스의 성적서(CoA)는 매 납품마다 제공되나요?',
      a: '네, 모든 특수가스 및 표준가스는 중앙기술연구소의 GC-PDHID/TCD 정밀 분석을 거쳐 ppm 및 ppb 단위 불순물 측정치가 기재된 공인 시험성적서(Certificate of Analysis)가 용기 출고 시 동봉 및 디지털로 발급됩니다.',
    },
    {
      q: '긴급한 야간 또는 주말 비상 가스 충전이 가능한가요?',
      a: '전국 8개 권역 17개 직영 영업소와 24시간 실시간 GPS 관제망을 가동하고 있으므로, 1588-0000 핫라인을 통해 접수하시면 24시간 연중무휴로 긴급 배송 및 비상 안전 출동을 지원합니다.',
    },
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) {
      alert('성함/회사명과 연락처를 입력해 주세요.');
      return;
    }
    setInquirySuccess(true);
  };

  return (
    <div className="w-full bg-[#f7f9ff] py-12 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono-tech text-xs text-[#00658d] font-bold tracking-widest uppercase">
            CUSTOMER SUPPORT &amp; DATA CENTER
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0e1d2a] tracking-tight">
            고객 지원 &amp; 물질안전보건자료(MSDS)
          </h1>
          <p className="text-sm sm:text-base text-[#424750] leading-relaxed">
            입찰공고, 최신 기술 공지, 안전보건 데이터시트(MSDS) 열람 및 1:1 기술 상담 서비스를 원스톱으로 제공합니다.
          </p>
        </div>

        {/* Tab Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-2 rounded-2xl shadow-sm border border-[#e3efff] max-w-2xl mx-auto">
          <button
            onClick={() => setActiveTab('notices')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'notices'
                ? 'bg-[#003461] text-white shadow-xs'
                : 'text-[#424750] hover:bg-[#edf4ff]'
            }`}
          >
            공지사항 &amp; 입찰공고
          </button>
          <button
            onClick={() => setActiveTab('msds')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'msds'
                ? 'bg-[#003461] text-white shadow-xs'
                : 'text-[#424750] hover:bg-[#edf4ff]'
            }`}
          >
            MSDS 자료실
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'faq'
                ? 'bg-[#003461] text-white shadow-xs'
                : 'text-[#424750] hover:bg-[#edf4ff]'
            }`}
          >
            자주 묻는 질문 (FAQ)
          </button>
          <button
            onClick={() => setActiveTab('inquiry')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'inquiry'
                ? 'bg-[#003461] text-white shadow-xs'
                : 'text-[#424750] hover:bg-[#edf4ff]'
            }`}
          >
            1:1 기술상담 신청
          </button>
        </div>

        {/* Tab 1: Notices & Bids */}
        {activeTab === 'notices' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#e3efff] space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#edf4ff] pb-4">
              <h2 className="text-xl font-bold font-display text-[#003461]">
                공지사항 및 입찰공고 ({filteredNotices.length}건)
              </h2>
              <div className="relative w-full sm:w-72">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#727781] text-lg">
                  search
                </span>
                <input
                  type="text"
                  value={searchNotice}
                  onChange={(e) => setSearchNotice(e.target.value)}
                  placeholder="제목, 내용, 부서 검색"
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#edf4ff] text-xs text-[#0e1d2a] focus:bg-white focus:outline-none border border-transparent focus:border-[#003461]"
                />
              </div>
            </div>

            <div className="divide-y divide-[#edf4ff]">
              {filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => onSelectNotice(notice)}
                  className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group cursor-pointer hover:bg-[#f7f9ff] px-3 rounded-xl transition-colors"
                >
                  <div className="space-y-1.5 flex-1 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-[#edf4ff] text-[#00658d] font-mono-tech text-xs font-bold">
                        {notice.category}
                      </span>
                      <span className="text-xs text-[#727781] font-mono-tech">{notice.date}</span>
                      <span className="text-xs text-[#727781]">| {notice.department}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#0e1d2a] group-hover:text-[#003461] transition-colors leading-snug">
                      {notice.title}
                    </h3>
                    <p className="text-xs text-[#727781] line-clamp-1">{notice.description}</p>
                  </div>
                  <div className="shrink-0 flex items-center gap-1 text-xs text-[#003461] font-bold group-hover:translate-x-1 transition-transform">
                    <span>열람하기</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: MSDS Library */}
        {activeTab === 'msds' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#e3efff] space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#edf4ff] pb-4">
              <div>
                <h2 className="text-xl font-bold font-display text-[#003461]">
                  물질안전보건자료 (MSDS) 검색 및 다운로드
                </h2>
                <p className="text-xs text-[#727781] mt-0.5">
                  산업안전보건법 제110조에 의거한 공식 고압가스 화학물질 안전보건자료입니다.
                </p>
              </div>
              <div className="relative w-full sm:w-72">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#727781] text-lg">
                  search
                </span>
                <input
                  type="text"
                  value={searchMsds}
                  onChange={(e) => setSearchMsds(e.target.value)}
                  placeholder="가스명, CAS 번호(7727-37-9...)"
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#edf4ff] text-xs text-[#0e1d2a] focus:bg-white focus:outline-none border border-transparent focus:border-[#003461]"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-[#e3efff] rounded-xl overflow-hidden">
                <thead className="bg-[#edf4ff] text-[#003461] font-bold">
                  <tr>
                    <th className="p-3.5">품목명 (Chemical Name)</th>
                    <th className="p-3.5">화학식</th>
                    <th className="p-3.5">CAS No.</th>
                    <th className="p-3.5">UN No.</th>
                    <th className="p-3.5">위험물 분류</th>
                    <th className="p-3.5">개정일자</th>
                    <th className="p-3.5 text-center">다운로드</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#edf4ff]">
                  {filteredMsds.map((doc) => (
                    <tr key={doc.id} className="hover:bg-[#f7f9ff] transition-colors">
                      <td className="p-3.5 font-bold text-[#0e1d2a]">{doc.gasName}</td>
                      <td className="p-3.5 font-mono-tech font-bold text-[#00658d]">{doc.chemicalFormula}</td>
                      <td className="p-3.5 font-mono-tech text-[#424750]">{doc.casNo}</td>
                      <td className="p-3.5 font-mono-tech text-[#424750]">{doc.unNo}</td>
                      <td className="p-3.5 text-[#424750]">{doc.hazardClass}</td>
                      <td className="p-3.5 font-mono-tech text-[#727781]">{doc.revisionDate}</td>
                      <td className="p-3.5 text-center">
                        <button
                          onClick={() => {
                            setSelectedMsds(doc);
                            alert(`[MSDS 다운로드 완료]\n${doc.gasName}\nCAS No: ${doc.casNo}\n용량: ${doc.fileSize}\n공식 인증 PDF가 발송되었습니다.`);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-[#003461] text-white text-[11px] font-bold hover:bg-[#004b87] inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[14px]">download</span>
                          <span>PDF</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: FAQ */}
        {activeTab === 'faq' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#e3efff] space-y-6">
            <h2 className="text-xl font-bold font-display text-[#003461] border-b border-[#edf4ff] pb-4">
              자주 묻는 질문 (FAQ)
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#f7f9ff] border border-[#e3efff] space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#003461] text-white flex items-center justify-center text-xs font-bold shrink-0 font-mono-tech">
                      Q
                    </span>
                    <h3 className="text-sm font-bold text-[#0e1d2a] leading-snug">{faq.q}</h3>
                  </div>
                  <div className="flex items-start gap-3 pl-9">
                    <p className="text-xs text-[#424750] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: 1:1 Inquiry Form */}
        {activeTab === 'inquiry' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#e3efff] space-y-6 max-w-3xl mx-auto">
            <div className="space-y-1 border-b border-[#edf4ff] pb-4">
              <h2 className="text-xl font-bold font-display text-[#003461]">
                1:1 전문 기술 및 공급 상담 접수
              </h2>
              <p className="text-xs text-[#727781]">
                기술영업본부 전문 엔지니어가 평일 기준 2시간 이내에 직접 전화 혹은 이메일로 답변드립니다.
              </p>
            </div>

            {inquirySuccess ? (
              <div className="p-8 text-center space-y-3 bg-[#edf4ff] rounded-2xl border border-[#a3c9ff]">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-3xl">check</span>
                </div>
                <h3 className="text-lg font-bold text-[#003461]">문의가 정상 접수되었습니다!</h3>
                <p className="text-xs text-[#424750]">
                  {inquiryName} 님의 문의에 대해 담당 엔지니어가 확인 후 신속히 안내해 드리겠습니다.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setInquirySuccess(false);
                      setInquiryText('');
                    }}
                    className="px-4 py-2 rounded-xl bg-[#003461] text-white text-xs font-bold"
                  >
                    추가 문의 작성
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-[#0e1d2a] block mb-1">문의 유형 선택</label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#edf4ff] border border-transparent focus:border-[#003461] text-xs text-[#0e1d2a]"
                  >
                    <option value="납품 견적 및 공급 문의">납품 견적 및 정기 공급 계약 문의</option>
                    <option value="초저온 플랜트/저장탱크 시공">초저온 저장탱크(CE) 설치 및 KGS 인허가 대행</option>
                    <option value="가스 퍼지(Purge) 엔지니어링">플랜트/선박 질소 가스퍼지 현장 시공 의뢰</option>
                    <option value="가스 정밀 분석 및 CoA 발급">가스 분석 시험 의뢰 및 공인 성적서 발급</option>
                    <option value="MSDS 및 안전관리 규정 문의">물질안전보건자료(MSDS) 및 법정 안전관리 문의</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#0e1d2a] block mb-1">회사명 / 담당자명 *</label>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="예: 삼성전자 반도체 / 김철수 팀장"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#edf4ff] border border-transparent focus:border-[#003461] text-xs text-[#0e1d2a]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#0e1d2a] block mb-1">연락처 *</label>
                    <input
                      type="tel"
                      required
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      placeholder="010-0000-0000"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#edf4ff] border border-transparent focus:border-[#003461] text-xs text-[#0e1d2a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#0e1d2a] block mb-1">이메일 주소</label>
                  <input
                    type="email"
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#edf4ff] border border-transparent focus:border-[#003461] text-xs text-[#0e1d2a]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#0e1d2a] block mb-1">문의 상세 내용</label>
                  <textarea
                    rows={4}
                    required
                    value={inquiryText}
                    onChange={(e) => setInquiryText(e.target.value)}
                    placeholder="공급 희망 가스 종류, 필요 수량, 현장 위치, 배관 사양 등을 자유롭게 작성해 주십시오."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#edf4ff] border border-transparent focus:border-[#003461] text-xs text-[#0e1d2a] resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#003461] text-white text-xs font-bold hover:bg-[#004b87] shadow-md cursor-pointer"
                  >
                    문의 접수하기
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
