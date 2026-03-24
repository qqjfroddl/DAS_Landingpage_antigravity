import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const CountUp = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const Stats: React.FC = () => {
  return (
    <section className="py-24 px-8 lg:px-24 bg-surface-container-lowest">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
        <div className="space-y-2">
          <p className="font-label text-xs text-tertiary uppercase tracking-tighter">Established</p>
          <h3 className="text-5xl font-headline font-black"><CountUp value={1987} /></h3>
          <p className="text-secondary font-body text-sm">대한민국 대표 부품 기업</p>
        </div>
        <div className="space-y-2">
          <p className="font-label text-xs text-tertiary uppercase tracking-tighter">Global Networks</p>
          <h3 className="text-5xl font-headline font-black"><CountUp value={14} suffix="+" /></h3>
          <p className="text-secondary font-body text-sm">전 세계 8개국 전략적 거점</p>
        </div>
        <div className="space-y-2">
          <p className="font-label text-xs text-tertiary uppercase tracking-tighter">Patents Held</p>
          <h3 className="text-5xl font-headline font-black"><CountUp value={350} suffix="+" /></h3>
          <p className="text-secondary font-body text-sm">끊임없는 R&D 기술 자산</p>
        </div>
        <div className="space-y-2">
          <p className="font-label text-xs text-tertiary uppercase tracking-tighter">Total Employees</p>
          <h3 className="text-5xl font-headline font-black"><CountUp value={4000} suffix="+" /></h3>
          <p className="text-secondary font-body text-sm">함께 성장하는 글로벌 인재</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
