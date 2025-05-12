'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Как обеспечивается анонимность?',
    a: 'Используем TOR-доступ, не требуем KYC, все транзакции проходят через децентрализованный эскроу.'
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
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border border-gray-800 rounded-lg">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-white focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="ml-4 text-2xl">{open === i ? '−' : '+'}</span>
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