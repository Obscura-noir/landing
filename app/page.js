'use client';
import { useEffect } from 'react';
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import ProblemsSection from '../components/ProblemsSection'
import HowItWorks from '../components/HowItWorks'
import TrustSection from '../components/TrustSection'
import ApplicationForm from '../components/ApplicationForm'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

function FixedHeader() {
  const handleClick = () => {
    window.open('/investor', '_blank');
  };
  // Чтобы не перекрывать контент, добавим padding-top к main
  useEffect(() => {
    document.body.style.paddingTop = '64px';
    return () => { document.body.style.paddingTop = '' };
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center h-16 bg-dark-bg/80 backdrop-blur border-b border-gray-800 shadow-sm">
      <button
        onClick={handleClick}
        className="bg-gradient-to-r from-accent-purple to-accent-pink text-white px-6 py-2 rounded-full font-bold text-base md:text-lg shadow-lg hover:scale-105 active:scale-95 transition-all"
        style={{ boxShadow: '0 2px 16px 0 #7C3AED55' }}
      >
        Стать инвестором
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <FixedHeader />
      <HeroSection />
      <FeaturesSection />
      <ProblemsSection />
      <HowItWorks />
      <TrustSection />
      <section id="apply" className="py-20 bg-dark-bg border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Мы открываем бета-доступ для 10 компаний</h2>
          <div className="text-center text-accent-pink mb-6 font-semibold">Осталось мест: <span className="inline-block animate-pulse">8</span></div>
          <ApplicationForm />
          <div className="text-gray-500 text-xs text-center mt-4">Ваша заявка конфиденциальна. Мы не передаём данные третьим лицам.</div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </main>
  )
} 