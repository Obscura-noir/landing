'use client';
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import ProblemsSection from '../components/ProblemsSection'
import HowItWorks from '../components/HowItWorks'
import TrustSection from '../components/TrustSection'
import ApplicationForm from '../components/ApplicationForm'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ProblemsSection />
      <HowItWorks />
      <TrustSection />
      <section id="apply" className="py-20 bg-dark-bg border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Мы открываем бета-доступ для 5 компаний</h2>
          <div className="text-center text-accent-pink mb-6 font-semibold">Осталось мест: <span className="inline-block animate-pulse">5</span></div>
          <ApplicationForm />
          <div className="text-gray-500 text-xs text-center mt-4">Ваша заявка конфиденциальна. Мы не передаём данные третьим лицам.</div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </main>
  )
} 