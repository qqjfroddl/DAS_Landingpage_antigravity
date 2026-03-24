import React from 'react';
import AiChatbot from './AiChatbot';

const Recruitment: React.FC = () => {
  return (
    <section className="py-32 px-8 lg:px-24 bg-surface-container-low relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h2 className="text-4xl font-headline font-bold mb-12">Recruitment Process</h2>
          <div className="space-y-12 relative">
            <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-outline-variant/30"></div>
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-surface-container-highest border-2 border-primary flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-primary text-xl">description</span>
              </div>
              <h4 className="text-xl font-headline font-bold mb-2">Step 01. 서류전형</h4>
              <p className="text-secondary font-body text-sm">지원자의 가치관과 직무 전문성을 종합적으로 검토합니다.</p>
            </div>
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-surface-container-highest border-2 border-outline flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-secondary text-xl">groups</span>
              </div>
              <h4 className="text-xl font-headline font-bold mb-2">Step 02. 면접전형</h4>
              <p className="text-secondary font-body text-sm">실무진 및 임원 면접을 통해 역량과 인성을 심층 확인합니다.</p>
            </div>
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-surface-container-highest border-2 border-outline flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-secondary text-xl">verified</span>
              </div>
              <h4 className="text-xl font-headline font-bold mb-2">Step 03. 최종합격</h4>
              <p className="text-secondary font-body text-sm">다스의 일원이 된 것을 환영합니다! 입사 안내가 진행됩니다.</p>
            </div>
          </div>
          <a
            href="https://i-das.recruiter.co.kr/career/home?new"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-16 inline-block px-8 py-4 border border-primary text-primary font-headline font-bold hover:bg-primary/5 transition-colors"
          >
            채용 공고 바로가기
          </a>
        </div>
        <AiChatbot />
      </div>
    </section>
  );
};

export default Recruitment;
