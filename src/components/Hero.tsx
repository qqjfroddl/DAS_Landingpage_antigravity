import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TechnologyModal from './TechnologyModal';

const Hero: React.FC = () => {
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[921px] flex items-center px-8 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover grayscale opacity-40" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYWIapFnsPd_mEGjhsK2vp08quTNF4SpCVIoi47XziOu_BsRMNX7saqDAhXOhn68Z_o6ubh0CX_Ux-bJuh-lAssyGaTLoVBI17FqruQTIxS_QWR0pgWuRrAFInjUhBUaXU6Wb45KAsWk3xRYgGBBsrfkOikjetn2AQ4zAdVrof4ggUoOKZ4pklvzA5QirobJ3OmRnqk7FLiAKFMTnMrgRHOIbml_CcqypxOm2fexR8acyDT0OMcUoZ0LDCyllUHBOm6aMDxifNzxw" 
            alt="Modern luxury car interior"
          />
        </div>
        
        <motion.div 
          className="relative z-20 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 bg-tertiary/10 text-tertiary font-label text-xs tracking-widest uppercase mb-8 border border-tertiary/20">
            Future Mobility Leader
          </span>
          <h1 className="text-6xl lg:text-8xl font-headline font-black tracking-tighter text-on-background leading-none mb-8">
            시트의 혁신을 넘어,<br/>
            <span className="text-gradient">미래 모빌리티</span>를<br/>
            설계합니다
          </h1>
          <p className="text-lg lg:text-xl text-on-surface-variant font-body max-w-2xl mb-12 leading-relaxed">
            (주)다스는 자동차 시트 메커니즘 분야의 독보적인 기술력을 바탕으로, 자율주행 시대의 새로운 공간 경험과 안전을 혁신적으로 정의합니다.
          </p>
          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => setIsTechModalOpen(true)}
              className="px-10 py-5 bg-gradient-to-r from-primary to-on-primary-container text-surface font-headline font-extrabold rounded-md shadow-[0_0_20px_rgba(0,218,243,0.1)] hover:shadow-[0_0_30px_rgba(0,218,243,0.2)] transition-all"
            >
              기술력 확인하기
            </button>
          </div>
        </motion.div>
      </section>

      <TechnologyModal
        isOpen={isTechModalOpen}
        onClose={() => setIsTechModalOpen(false)}
      />
    </>
  );
};

export default Hero;
