import React from 'react';
import { NoticeItem } from '../data/companyData';

interface NoticeModalProps {
  notice: NoticeItem | null;
  onClose: () => void;
}

export const NoticeModal: React.FC<NoticeModalProps> = ({ notice, onClose }) => {
  if (!notice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#e3efff] max-h-[88vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#003461] text-white flex items-start justify-between shrink-0">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-[#41befd] text-[#004b69] font-mono-tech text-xs font-bold">
                {notice.category}
              </span>
              <span className="font-mono-tech text-xs text-[#a3c9ff]">{notice.date}</span>
            </div>
            <h3 className="text-xl font-bold font-display leading-snug mt-2">
              {notice.title}
            </h3>
            <p className="text-xs text-[#d3e4ff]">소관 부서: {notice.department}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="bg-[#edf4ff] p-4 rounded-xl text-xs text-[#003461] font-medium border border-[#e3efff]">
            {notice.description}
          </div>

          <div className="whitespace-pre-line text-sm text-[#0e1d2a] leading-relaxed border-t border-[#edf4ff] pt-4 font-sans">
            {notice.content}
          </div>

          {/* Attachments if any */}
          {notice.attachments && notice.attachments.length > 0 && (
            <div className="space-y-2 pt-4 border-t border-[#edf4ff]">
              <h5 className="text-xs font-bold text-[#424750] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-[#00658d]">attachment</span>
                첨부 파일 ({notice.attachments.length}개)
              </h5>
              <div className="flex flex-col gap-2">
                {notice.attachments.map((att, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#f7f9ff] border border-[#e3efff] hover:border-[#81cfff] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#003461] text-lg">description</span>
                      <span className="text-xs font-semibold text-[#0e1d2a]">{att.name}</span>
                      <span className="text-[11px] font-mono-tech text-[#727781]">({att.size})</span>
                    </div>
                    <button
                      onClick={() => alert(`${att.name} 다운로드를 시작합니다.`)}
                      className="px-3 py-1 rounded bg-[#003461] text-white text-xs font-semibold hover:bg-[#004b87] transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-sm">download</span>
                      <span>다운로드</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f7f9ff] border-t border-[#edf4ff] flex items-center justify-between shrink-0">
          <span className="text-xs text-[#727781]">
            입찰 및 제안 관련 문의: 052-250-7000 (신에너지사업본부)
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#003461] text-white text-xs font-bold hover:bg-[#004b87] cursor-pointer"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
