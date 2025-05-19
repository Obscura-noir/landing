import { motion } from 'framer-motion'

const steps = [
  { icon: '📝', title: 'Оставляете заявку', desc: 'Получаете доступ' },
  { icon: '🤝', title: 'Создаёте сделку', desc: 'Находим контрагента' },
  { icon: '💰', title: 'Депонируем средства', desc: 'Контролируем исполнение' },
  { icon: '✅', title: 'Подтверждаем завершение', desc: 'Получаете результат' },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-dark-secondary border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Как это работает
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center flex-1 min-w-[160px]"
            >
              <div className="text-4xl mb-2">{step.icon}</div>
              <div className="text-lg font-semibold text-white mb-1">{step.title}</div>
              <div className="text-gray-400 text-sm">{step.desc}</div>
            </motion.div>
          ))}
          {/* Прогресс-бар */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-2 z-0">
            <div className="h-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-green rounded-full opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
} 