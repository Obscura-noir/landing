'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Как обеспечивается анонимность?',
    a: 'TOR-доступ, отсутствие KYC, децентрализованный эскроу. Мы не храним ваши данные.'
  },
  {
    q: 'Какие гарантии безопасности средств?',
    a: 'Средства депонируются в смарт-контракте, вывод возможен только по условиям сделки.'
  },
  {
    q: 'Сколько времени занимает транзакция?',
    a: 'Обычно 1-2 часа после подтверждения обеими сторонами.'
  },
  {
    q: 'Какие валюты поддерживаются?',
    a: 'USDT, USDC, BTC, ETH и другие по запросу.'
  },
  {
    q: 'Как работает эскроу?',
    a: 'Контракт блокирует средства до выполнения условий сделки, после чего автоматически переводит их получателю.'
  },
  {
    q: 'Можно ли работать без регистрации?',
    a: 'Да, регистрация и KYC не требуются для доступа к платформе.'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-20 bg-dark-bg border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className={`border border-gray-800 rounded-lg transition-colors ${open === i ? 'bg-gray-900/40 border-accent-purple' : 'bg-gray-900/20'}`}>
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-white focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="flex items-center gap-2"><span className="text-2xl">💬</span>{item.q}</span>
                <span className={`ml-4 text-2xl transition-transform ${open === i ? 'text-accent-purple rotate-45' : 'text-gray-400'}`}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-gray-300 animate-fade-in">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 