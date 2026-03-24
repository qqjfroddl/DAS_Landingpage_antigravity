import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import BentoGrid from './components/BentoGrid';
import Recruitment from './components/Recruitment';
import VisitForm from './components/VisitForm';
import Footer from './components/Footer';
import CompanyInfo from './components/CompanyInfo';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen bg-background text-on-surface transition-colors duration-500 ${isDark ? 'dark' : ''}`}>
      <Navbar onThemeToggle={() => setIsDark(!isDark)} />
      <main className="pt-24 overflow-x-hidden">
        <section id="hero">
          <Hero />
        </section>
        <Stats />
        <CompanyInfo />
        <section id="technology">
          <BentoGrid />
        </section>
        <section id="recruitment">
          <Recruitment />
        </section>
        <section id="visit">
          <VisitForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
