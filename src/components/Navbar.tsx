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
        <div className="text-2xl font-black text-primary tracking-tighter font-headline">DAS</div>
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
