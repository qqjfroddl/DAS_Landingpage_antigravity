import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechnologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const technologies = [
  {
    icon: 'settings',
    category: '시트 조절장치',
    title: 'Seat Adjustment Mechanism',
    description:
      '글로벌 완성차 OEM 공급을 목표로 개발된 고정밀 시트 조절 메커니즘입니다. 리클라이너, 하이트 어저스터, 슬라이드 레일 등 다양한 조절 장치를 독자 기술로 설계·생산합니다.',
    highlights: ['리클라이너(Recliner)', '하이트 어저스터(Height Adjuster)', '슬라이드 레일(Slide Rail)', '럼버 서포트(Lumbar Support)'],
    color: 'from-cyan-500/20 to-blue-500/10',
    border: 'border-cyan-500/30',
  },
  {
    icon: 'chair',
    category: '시트 프레임',
    title: 'Seat Frame Structure',
    description:
      '경량화 및 고강성을 동시에 실현한 통합형 시트 프레임 구조입니다. 충돌 안전성 기준(FMVSS, ECE)을 만족하며, 초고강도 강판 적용으로 탑승자 보호 성능을 극대화합니다.',
    highlights: ['초고강도 강판 적용', 'FMVSS/ECE 안전 인증', '경량화 설계', '모듈형 구조'],
    color: 'from-purple-500/20 to-violet-500/10',
    border: 'border-purple-500/30',
  },
  {
    icon: 'airline_seat_recline_extra',
    category: '완성 시트',
    title: 'Complete Seat Assembly',
    description:
      '조절·프레임·전자 장치를 통합한 완성 시트로 현대·기아·GM 등 글로벌 완성차 브랜드에 직접 공급합니다. 자동화 생산라인을 통해 품질 균일성과 납기 신뢰성을 보장합니다.',
    highlights: ['현대·기아 OEM 공급', 'GM·Ford 글로벌 공급', '자동화 품질 검사', '원스톱 통합 생산'],
    color: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/30',
  },
  {
    icon: 'electric_bolt',
    category: '시트 전자장치',
    title: 'Seat Electronics',
    description:
      '파워 시트 모터, 열선 시트, 통풍 시트, 조향 연동 메모리 시트 등 스마트 승차 경험을 구현하는 전자·전기 통합 시스템을 개발·공급합니다.',
    highlights: ['파워 시트 액추에이터', '히팅/쿨링 시트', '메모리 시트 ECU', 'CAN 통신 연동'],
    color: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/30',
  },
  {
    icon: 'flight',
    category: '항공 시트',
    title: 'Aviation Seat',
    description:
      '자동차 시트 기술을 항공 분야로 확장하여 비즈니스 클래스 수준의 경량·고기능 항공 시트를 개발합니다. FAA/EASA 인증 기준에 부합하는 절충형 충돌 흡수 구조를 적용합니다.',
    highlights: ['비즈니스 클래스 시트', 'FAA/EASA 인증 대응', '경량 복합소재 적용', '16G 충돌 흡수 구조'],
    color: 'from-sky-500/20 to-indigo-500/10',
    border: 'border-sky-500/30',
  },
  {
    icon: 'biotech',
    category: 'R&D 혁신',
    title: 'R&D & Future Technology',
    description:
      '자율주행 시대에 최적화된 Zero-Gravity 시트, Smart AI 포지셔닝, 친환경 바이오 소재 등 미래 모빌리티 핵심 기술을 선제적으로 연구·개발합니다.',
    highlights: ['Zero-Gravity Seat', 'AI 자세 최적화', '친환경 바이오 소재', '글로벌 R&D 거점'],
    color: 'from-rose-500/20 to-pink-500/10',
    border: 'border-rose-500/30',
  },
];

const TechnologyModal: React.FC<TechnologyModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-surface-container rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-outline-variant/30 bg-surface-container-high flex-shrink-0">
              <div>
                <span className="text-tertiary font-label text-xs tracking-widest uppercase block mb-1">
                  TECHNOLOGY OVERVIEW
                </span>
                <h2 className="text-2xl lg:text-3xl font-headline font-bold text-on-surface">
                  DAS 핵심 기술력
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors text-secondary hover:text-on-surface"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto flex-1 p-8">
              {/* Intro */}
              <p className="text-on-surface-variant font-body mb-8 leading-relaxed">
                (주)다스는 1988년 창립 이래 자동차 시트 메커니즘 분야의 독보적인 기술력을 바탕으로,
                현대·기아·GM 등 글로벌 완성차 브랜드에 핵심 시트 시스템을 공급하는 미래 모빌리티 시트 전문 기업입니다.
              </p>

              {/* Tech Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.category}
                    className={`p-6 rounded-xl border ${tech.border} bg-gradient-to-br ${tech.color} relative overflow-hidden`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-primary">{tech.icon}</span>
                      </div>
                      <div>
                        <span className="text-xs font-label text-secondary tracking-widest uppercase block">
                          {tech.category}
                        </span>
                        <h3 className="font-headline font-bold text-on-surface">{tech.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-secondary font-body leading-relaxed mb-4">
                      {tech.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tech.highlights.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface-variant border border-outline-variant/40 font-label"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 p-6 rounded-xl border border-primary/20 bg-primary/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-headline font-bold text-on-surface mb-1">
                    더 자세한 기술 정보가 궁금하신가요?
                  </h4>
                  <p className="text-sm text-secondary font-body">
                    DAS 공식 홈페이지 또는 기술 쇼룸을 방문해보세요.
                  </p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <a
                    href="http://www.i-das.com/page/products.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-primary text-surface font-headline font-bold text-sm rounded hover:brightness-110 transition-all"
                  >
                    공식 홈페이지
                  </a>
                  <a
                    href="http://tech.i-das.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-outline-variant text-on-surface font-headline font-bold text-sm rounded hover:bg-surface-container-highest transition-colors"
                  >
                    기술 쇼룸
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TechnologyModal;
