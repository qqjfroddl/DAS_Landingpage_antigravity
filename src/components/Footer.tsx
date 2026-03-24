import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#111319] border-t border-secondary/5 transition-all">
      <div className="w-full px-12 py-16 flex flex-col md:flex-row justify-between items-center max-w-[1920px] mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="font-headline font-bold text-primary text-3xl">DAS</div>
          <p className="text-secondary/60 font-label text-xs uppercase tracking-widest leading-relaxed text-center md:text-left">
            경상북도 경주시 외동읍 외동산단로 123-45<br/>
            © 2024 DAS Co., Ltd. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-label text-xs uppercase tracking-widest">
          <a className="text-secondary/60 hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
          <a className="text-secondary/60 hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
          <a className="text-secondary/60 hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">Ethical Management</a>
          <a className="text-secondary/60 hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">Global Network</a>
        </div>
        <div className="flex space-x-4">
          <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-sm">language</span>
          </div>
          <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-sm">share</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
