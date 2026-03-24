import React from 'react';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-32 px-8 lg:px-24">
      <div className="mb-20">
        <h2 className="text-4xl lg:text-5xl font-headline font-bold mb-4 text-on-surface">Innovation Showcase</h2>
        <p className="text-on-surface-variant font-body">다스의 정밀한 엔지니어링이 완성하는 모빌리티의 미래 기술입니다.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 min-h-[800px]">
        {/* Large Feature Card */}
        <div className="md:col-span-3 md:row-span-2 bento-card p-10 rounded-xl relative overflow-hidden group">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <span className="text-tertiary font-label text-xs tracking-widest block mb-4">CORE TECHNOLOGY</span>
              <h3 className="text-3xl font-headline font-bold mb-4">Smart Seat AI</h3>
              <p className="text-secondary font-body max-w-sm">탑승자의 체형과 상태를 실시간으로 분석하여 최적의 안락함과 안전을 자동으로 조절하는 AI 시트 시스템.</p>
            </div>
            <a
              href="http://www.i-das.com/page/products.php"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary group-hover:gap-4 transition-all"
            >
              <span className="font-headline font-bold">더 알아보기</span>
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </a>
          </div>
          <img 
            className="absolute right-0 bottom-0 w-3/4 opacity-20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB92dIu4aWxLqd8LluCzIe-ucqfQlx5G4m3wPPMJRH12x4VOu-FIEOZ9sAvpv0ARDntMSpaRfx_fAXHin3D7mlQ0IHKjnJJEXzfDzCFhMWiZIYDl99xf-voYxnpKupaoMiKONpC-Ga2fdURADfQGkZpk-ViOJnwEkvG7tMsq6Y9K7PFLajUrAFs7RGMbvoI5fVVHzkQKqYU6NHsRbyX4zJkI76AEx0YSlBDYK0xMcyOd7gCzQrO5TLUObS0twhWGOJJUNOnp5NQWv8" 
            alt="AI Seat Technology"
          />
        </div>
        {/* Medium Card 1 */}
        <div className="md:col-span-3 bento-card rounded-xl relative overflow-hidden group">
          <img src="/zero_gravity_seat.png" alt="Zero Gravity Seat" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700" />
          <div className="relative z-10 p-10 h-full flex flex-col justify-between bg-gradient-to-t from-surface-container/80 to-transparent">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-headline font-bold mb-2 drop-shadow-md">Zero-Gravity Mode</h3>
                <p className="text-secondary font-body text-sm max-w-[80%] drop-shadow-md">자율주행 시 최고의 휴식을 제공하는 무중력 시트 메커니즘.</p>
              </div>
              <span className="material-symbols-outlined text-tertiary text-4xl drop-shadow-[0_0_10px_rgba(0,218,243,0.5)]">airline_seat_recline_extra</span>
            </div>
            <div className="mt-8 bg-surface-container-high/50 backdrop-blur-sm h-2 w-full rounded-full overflow-hidden">
              <div className="bg-tertiary h-full w-3/4 shadow-[0_0_10px_rgba(0,218,243,0.8)]"></div>
            </div>
          </div>
        </div>
        {/* Small Card 1 */}
        <div className="md:col-span-1 bento-card rounded-xl relative overflow-hidden group">
          <img src="/eco_material.png" alt="Eco Materials" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700" />
          <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center bg-gradient-to-b from-transparent to-surface-container/90">
            <span className="material-symbols-outlined text-primary text-4xl mb-4 drop-shadow-[0_0_8px_rgba(177,199,242,0.8)]">eco</span>
            <h4 className="font-headline font-bold drop-shadow-md">Eco-Materials</h4>
          </div>
        </div>
        {/* Small Card 2 */}
        <div className="md:col-span-2 bento-card rounded-xl relative overflow-hidden group">
          <img src="/global_rnd.png" alt="Global R&D" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700" />
          <div className="relative z-10 p-8 h-full flex items-center gap-6 bg-gradient-to-r from-surface-container/90 to-transparent">
            <div className="bg-primary/20 backdrop-blur-md p-4 rounded border border-primary/10 shadow-[0_0_15px_rgba(177,199,242,0.15)] group-hover:shadow-[0_0_20px_rgba(177,199,242,0.3)] transition-all">
              <span className="material-symbols-outlined text-primary">biotech</span>
            </div>
            <div>
              <h4 className="font-headline font-bold drop-shadow-md text-lg">Global R&D</h4>
              <p className="text-sm text-secondary font-body mt-1 drop-shadow-sm">최첨단 시뮬레이션 연구소</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
