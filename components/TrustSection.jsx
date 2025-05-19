import { motion } from 'framer-motion'

export default function TrustSection() {
  return (
    <section className="py-20 bg-dark-bg border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Доверие и опыт
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-accent-purple">10+</span>
            <span className="text-gray-400 mt-2">лет опыта в финтехе</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-accent-green">$XX млн</span>
            <span className="text-gray-400 mt-2">проведено транзакций</span>
          </div>
        </div>
        <div className="flex justify-center gap-8 mb-8">
          {/* Логотипы технологий/партнеров (заглушки) */}
          <div className="w-20 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">Logo1</div>
          <div className="w-20 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">Logo2</div>
          <div className="w-20 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">Logo3</div>
        </div>
        <blockquote className="text-center text-lg text-gray-300 italic max-w-2xl mx-auto border-l-4 border-accent-purple pl-6">
          "Наша миссия — сделать международные расчёты простыми, анонимными и безопасными для бизнеса."
          <div className="mt-2 text-sm text-gray-500">— Основатель Sector 8</div>
        </blockquote>
      </div>
    </section>
  )
} 