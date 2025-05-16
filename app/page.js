'use client';
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import ApplicationForm from '../components/ApplicationForm'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  const handleInvestClick = () => {
    window.open('/investor', '_blank');
    setShowModal(false);
  };

  return (
    <main>
      {/* Модальное окно для раннего инвестора */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm">
          <div className="mt-16 bg-dark-secondary border border-accent-purple rounded-xl shadow-2xl px-8 py-6 flex flex-col items-center relative max-w-md w-full mx-4 animate-fade-in">
            <button
              className="absolute top-2 right-2 text-gray-400 text-2xl hover:text-white transition-colors"
              onClick={() => setShowModal(false)}
              aria-label="Закрыть"
            >
              &times;
            </button>
            <div className="text-xl md:text-2xl font-bold text-accent-purple mb-2 text-center">Стань ранним инвестором нашей площадки</div>
            <button
              className="mt-4 bg-gradient-to-r from-accent-purple to-accent-pink text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              onClick={handleInvestClick}
            >
              Подробнее
            </button>
          </div>
        </div>
      )}
      <HeroSection />
      <FeaturesSection />
      <section id="apply" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Мы открываем бета-доступ для 5 компаний</h2>
          <ApplicationForm />
        </div>
      </section>
      <FAQ />
      <Footer />
    </main>
  )
} 