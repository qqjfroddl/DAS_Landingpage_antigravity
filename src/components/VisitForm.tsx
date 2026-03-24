import React from 'react';

const VisitForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: GAS Web App Integration
    alert('방문 신청이 접수되었습니다. (데모 모드)');
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
              <input className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-tertiary focus:ring-0 transition-all p-3 text-sm text-on-surface" placeholder="성함을 입력하세요" type="text" required />
            </div>
            <div className="space-y-1">
              <label className="font-label text-xs text-secondary uppercase">Email Address</label>
              <input className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-tertiary focus:ring-0 transition-all p-3 text-sm text-on-surface" placeholder="example@das.com" type="email" required />
            </div>
            <div className="space-y-1">
              <label className="font-label text-xs text-secondary uppercase">Preferred Date</label>
              <input className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-tertiary focus:ring-0 transition-all p-3 text-sm text-on-surface" type="date" required />
            </div>
            <div className="pt-4">
              <button className="w-full py-4 bg-primary text-surface font-headline font-black uppercase tracking-widest hover:brightness-110 transition-all" type="submit">
                신청하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VisitForm;
