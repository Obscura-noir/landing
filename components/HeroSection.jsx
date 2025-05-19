'use client'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const handleScroll = () => {
    const el = document.getElementById('apply')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center bg-dark-bg overflow-hidden">
      {/* Animated Aztec-style gradient pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/30 via-accent-pink/20 to-transparent animate-gradient-move z-0" />
      {/* Абстрактный паттерн (можно заменить на SVG/PNG) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/img/1.jpeg')] bg-cover bg-center z-0" />
      {/* Контент */}
      <div className="container mx-auto px-4 py-20 z-10 relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 font-display"
        >
          Sector 8 — анонимные B2B-платежи с защитой и гарантией
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl"
        >
          Без банков, без блокировок, без риска. Платите или получайте в USDT и других активах через защищённый эскроу. В 2–3 раза дешевле SWIFT.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-accent-purple to-accent-pink text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow text-lg"
          onClick={handleScroll}
        >
          Запросить доступ к бета-версии
        </motion.button>
      </div>
    </section>
  )
} 