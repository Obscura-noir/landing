import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import ApplicationForm from '../components/ApplicationForm'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <section className="py-20 bg-dark-bg">
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