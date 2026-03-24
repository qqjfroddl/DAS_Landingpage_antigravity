import React, { useState } from 'react';

const VisitForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const gasUrl = import.meta.env.VITE_GAS_WEBAPP_URL;

    if (!gasUrl) {
      alert('접수 서버(GAS URL)가 설정되지 않았습니다. 관리자에게 문의하세요.');
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      await fetch(gasUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      alert('방문 신청이 성공적으로 접수되었습니다. 신청자와 담당자 메일로 안내가 발송됩니다.');
      e.currentTarget.reset();
    } catch (error) {
      console.error('Submit error:', error);
      alert('방문 신청 중 오류가 발생했습니다. 다시 시도해 주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 px-8 lg:px-24 bg-surface flex justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-surface-container rounded-2xl overflow-hidden">
        <div className="p-12 lg:p-20 flex flex-col justify-center">
          <h2 className="text-4xl font-headline font-bold mb-6 text-on-surface">Visit Our Campus</h2>
          <p className="text-secondary font-body mb-8">다스의 혁신 현장을 직접 경험해보세요. <br/>기업 방문 및 기술 투어 신청을 환영합니다.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="text-sm font-label uppercase">Gyeongju-si, Gyeongbuk, KR</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">call</span>
              <span className="text-sm font-label">+82 54-770-6114</span>
            </div>
          </div>
        </div>
        <div className="p-12 lg:p-20 bg-surface-container-high">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="font-label text-xs text-secondary uppercase">Full Name</label>
              <input name="name" className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-tertiary focus:ring-0 transition-all p-3 text-sm text-on-surface" placeholder="성함을 입력하세요" type="text" required />
            </div>
            <div className="space-y-1">
              <label className="font-label text-xs text-secondary uppercase">Email Address</label>
              <input name="email" className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-tertiary focus:ring-0 transition-all p-3 text-sm text-on-surface" placeholder="example@das.com" type="email" required />
            </div>
            <div className="space-y-1">
              <label className="font-label text-xs text-secondary uppercase">Company / Organization</label>
              <input name="organization" className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-tertiary focus:ring-0 transition-all p-3 text-sm text-on-surface" placeholder="소속을 입력하세요" type="text" required />
            </div>
            <div className="space-y-1">
              <label className="font-label text-xs text-secondary uppercase">Preferred Date</label>
              <input name="date" className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-tertiary focus:ring-0 transition-all p-3 text-sm text-on-surface" type="date" required />
            </div>
            <div className="space-y-1">
              <label className="font-label text-xs text-secondary uppercase">Department of Interest</label>
              <input name="department" className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-tertiary focus:ring-0 transition-all p-3 text-sm text-on-surface" placeholder="관심 부서 (예: R&D, 영업 등)" type="text" required />
            </div>
            <div className="space-y-1">
              <label className="font-label text-xs text-secondary uppercase">Additional Questions</label>
              <textarea name="question" className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-tertiary focus:ring-0 transition-all p-3 text-sm text-on-surface h-24 resize-none" placeholder="질문 사항을 남겨주세요"></textarea>
            </div>
            <div className="pt-4">
              <button 
                className="w-full py-4 bg-primary text-surface font-headline font-black uppercase tracking-widest hover:brightness-110 transition-all disabled:opacity-50" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? '신청 중...' : '신청하기'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VisitForm;
