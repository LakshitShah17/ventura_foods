import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContextSection from './components/ContextSection';
import MainContentWithSidebar from './components/MainContentWithSidebar';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-[#0DB765] selection:text-white">
      <Header />
      <main>
        <HeroSection />
        <ContextSection />
        <MainContentWithSidebar />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;