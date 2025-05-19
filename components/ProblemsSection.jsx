import { motion } from 'framer-motion'

const problems = [
  { problem: 'Блокировка SWIFT', solution: 'Альтернативные маршруты через крипто' },
  { problem: 'Риск заморозки средств', solution: 'Децентрализованный эскроу' },
  { problem: 'Высокие банковские комиссии', solution: 'Фиксированная ставка 1%' },
  { problem: 'Отсутствие доверия', solution: 'Прозрачные условия в смарт-контракте' },
]

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-dark-bg border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Проблемы и решения
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-6 bg-gray-900/40 border border-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="flex-1 flex items-center gap-3">
                <span className="text-3xl text-error">❌</span>
                <span className="text-lg text-white font-semibold">{item.problem}</span>
              </div>
              <div className="flex-1 flex items-center gap-3">
                <span className="text-2xl text-success">✅</span>
                <span className="text-lg text-success font-semibold">{item.solution}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 