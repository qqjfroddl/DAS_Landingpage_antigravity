import React from 'react';

interface NavbarProps {
  onThemeToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onThemeToggle }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl shadow-[0_40px_40px_rgba(0,0,0,0.04)] transition-colors duration-500">
      <div className="flex justify-between items-center px-8 py-4 max-w-[1920px] mx-auto">
        <div className="text-2xl font-black text-primary tracking-tighter font-headline">DAS</div>
        <div className="hidden md:flex space-x-12 font-headline font-bold tracking-tight">
          <a className="text-tertiary border-b-2 border-tertiary pb-1" href="#">Company</a>
          <a className="text-secondary hover:text-primary transition-colors" href="#">Technology</a>
          <a className="text-secondary hover:text-primary transition-colors" href="#">Career</a>
          <a className="text-secondary hover:text-primary transition-colors" href="#">Sustainability</a>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onThemeToggle}
            className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors px-3 py-1.5 rounded hover:bg-secondary/10"
          >
            <span className="material-symbols-outlined text-sm">palette</span>
            <span className="text-xs font-label">Theme</span>
          </button>
          <button className="bg-primary text-primary-container px-6 py-2.5 rounded font-headline font-bold hover:scale-95 duration-200 ease-in-out">
            방문 신청
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
