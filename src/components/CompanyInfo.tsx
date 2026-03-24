import React, { useState } from 'react';

const CompanyInfo: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "입사 지원 시 학력 제한이 있나요?", a: "직무에 따라 상이하나, 대부분의 직무는 학력보다는 실무 역량을 우선적으로 평가합니다." },
    { q: "채용 전형은 어떻게 되나요?", a: "서류 전형 -> 실무 면접 -> 임원 면접 -> 최종 합격 순으로 진행됩니다." },
    { q: "근무 복장은 어떻게 되나요?", a: "자유롭고 편안한 비즈니스 캐주얼 또는 자율 복장을 지향합니다." }
  ];

  return (
    <section className="py-24 px-8 lg:px-24 bg-surface max-w-[1920px] mx-auto">
      {/* Timeline Section */}
      <div className="mb-32">
        <h2 className="text-4xl font-headline font-bold mb-12 text-center text-on-surface">Our History</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
          {[
            { year: "1987", text: "(주)다스 설립" },
            { year: "2001", text: "기술연구소 설립" },
            { year: "2010", text: "글로벌 네트워크 (북미/유럽) 확장" },
            { year: "2024", text: "차세대 Smart Seat AI 발표" }
          ].map((item, idx) => (
            <div key={idx} className="flex-1 border-t-2 border-primary/30 pt-4 relative group">
              <div className="w-4 h-4 rounded-full bg-primary absolute -top-[9px] left-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform"></div>
              <h3 className="text-3xl font-headline font-black text-tertiary mb-2">{item.year}</h3>
              <p className="text-secondary font-body">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Culture & Benefits */}
        <div>
          <h2 className="text-4xl font-headline font-bold mb-8 text-on-surface">Culture & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: 'flight', title: '글로벌 커리어', desc: '해외 법인 주재원 파견 및 글로벌 인재 육성' },
              { icon: 'balance', title: '워라밸 보장', desc: '유연근무제 및 리프레시 휴가 지원' },
              { icon: 'payments', title: '확실한 성과 보상', desc: '경쟁력 있는 연봉 및 성과급 제도' },
              { icon: 'school', title: '성장 지원', desc: '직무 교육 및 자격증 취득 비용 지원' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-surface-container p-6 rounded-xl hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">{benefit.icon}</span>
                <h4 className="font-headline font-bold text-lg mb-2">{benefit.title}</h4>
                <p className="text-sm font-body text-secondary">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div>
          <h2 className="text-4xl font-headline font-bold mb-8 text-on-surface">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-surface-container rounded-xl overflow-hidden">
                <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-surface-container-high transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-headline font-bold">{faq.q}</span>
                  <span className="material-symbols-outlined text-primary">
                    {openFaq === idx ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 bg-surface-container-low border-t border-outline-variant/10">
                    <p className="text-secondary font-body text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
