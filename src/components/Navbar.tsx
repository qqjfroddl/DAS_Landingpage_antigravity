import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onThemeToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onThemeToggle }) => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'technology', 'recruitment', 'visit'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const getMenuClass = (id: string) => {
    return activeSection === id
      ? "text-tertiary border-b-2 border-tertiary pb-1 transition-colors"
      : "text-secondary hover:text-primary transition-colors pb-1 border-b-2 border-transparent";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl shadow-[0_40px_40px_rgba(0,0,0,0.04)] transition-colors duration-500">
      <div className="flex justify-between items-center px-8 py-4 max-w-[1920px] mx-auto">
        <div className="flex items-center space-x-3 cursor-pointer text-primary hover:text-tertiary transition-colors" onClick={() => scrollToSection('hero')}>
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
            {/* Outer Circle */}
            <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="8"/>
            
            {/* Symmetrical Intersection Lines using Cubic Bezier */}
            <path d="M 12 36 C 38 36, 62 64, 88 64" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
            <path d="M 12 64 C 38 64, 62 36, 88 36" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
            
            {/* Background Cutout for Inner Circle (to simulate over/under) */}
            <circle cx="50" cy="50" r="16" fill="var(--color-surface, #111319)" className="dark:fill-[#111319] fill-[#f8f9fa]" />
            
            {/* Inner Ring */}
            <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="7" fill="transparent"/>
          </svg>
          <div className="text-[34px] font-black tracking-tighter flex items-center h-full relative" style={{ fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '-0.06em' }}>
            <span className="relative inline-block mr-[1px]">D</span>
            <span>A</span>
            <span>S</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-12 font-headline font-bold tracking-tight">
          <button className={getMenuClass('hero')} onClick={() => scrollToSection('hero')}>Company</button>
          <button className={getMenuClass('technology')} onClick={() => scrollToSection('technology')}>Technology</button>
          <button className={getMenuClass('recruitment')} onClick={() => scrollToSection('recruitment')}>Career</button>
          <button className={getMenuClass('visit')} onClick={() => scrollToSection('visit')}>Visit</button>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onThemeToggle}
            className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors px-3 py-1.5 rounded hover:bg-secondary/10"
          >
            <span className="material-symbols-outlined text-sm">palette</span>
            <span className="text-xs font-label">Theme</span>
          </button>
          <button
            onClick={() => scrollToSection('visit')}
            className="bg-primary text-primary-container px-6 py-2.5 rounded font-headline font-bold hover:scale-95 duration-200 ease-in-out"
          >
            방문 신청
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
