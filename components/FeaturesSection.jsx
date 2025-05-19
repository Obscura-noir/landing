import FeatureCard from './FeatureCard'

const features = [
  {
    icon: '🔒',
    title: 'Ручной эскроу под вашу сделку',
    description: 'Контроль и защита средств на каждом этапе.'
  },
  {
    icon: '🧍',
    title: 'Анонимность и TOR-доступ',
    description: 'Конфиденциальность и приватность.'
  },
  {
    icon: '💸',
    title: 'Фиксированная комиссия 1%',
    description: 'Прозрачные условия, никаких скрытых платежей.'
  },
  {
    icon: '🌍',
    title: 'Крипта, OTC и реальный бизнес',
    description: 'Работаем с криптовалютой и настоящими компаниями.'
  },
  {
    icon: '🧾',
    title: 'Без регистрации, без KYC',
    description: 'Минимум формальностей — максимум скорости.'
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
} 