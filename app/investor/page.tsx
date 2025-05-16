'use client';
import React from 'react';
import InvestorForm from '../../components/InvestorForm';

export default function InvestorLanding() {
  const handleScrollToForm = () => {
    const el = document.getElementById('investor-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className='bg-dark-bg text-white'>
      {/* Hero Section */}
      <section className='min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-20'>
        <div className='absolute inset-0 bg-gradient-to-br from-accent-purple/30 via-accent-pink/20 to-transparent animate-gradient-move' />
        <div className='relative z-10 text-left w-full md:w-3/4 mx-auto'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 font-display'>SECTOR 8 — платежная инфраструктура для международного B2B без банков</h1>
          <p className='text-xl text-gray-300 mb-4'>Где банки отказывают — мы запускаем расчёты. Без посредников. Без следов. Без риска.</p>
          <p className='text-lg text-gray-400 mb-4'>SECTOR 8 — это закрытая платформа, через которую компании проводят международные расчёты без банков. Всё автоматизировано смарт-контрактами.</p>
          <div className='text-2xl font-bold text-white mb-6'>ВРЕМЯ - ДЕНЬГИ</div>
          <ul className='mb-8 space-y-2 text-gray-300'>
            <li>Пока вы это читаете, миллионы уходят через Telegram, агента и аванс на слово.</li>
            <li>Мы создаём первую платформу, которая автоматизирует эту реальность.</li>
            <li>Теперь это — Смарт-контракты, escrow и маршрут в коде.</li>
          </ul>
          <div className='flex flex-col md:flex-row gap-4 justify-start'>
            <button onClick={handleScrollToForm} className='bg-gradient-to-r from-accent-purple to-accent-pink text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow'>Стать инвестором</button>
            <a href='https://drive.google.com/file/d/1h5IGsWQflCqzkoPmK9fVPu2UReHLRNRx/view?usp=sharing' className='px-8 py-4 rounded-lg border border-accent-purple text-accent-purple font-semibold hover:bg-accent-purple/10 transition'>Скачать презентацию</a>
          </div>
        </div>
      </section>

      {/* Проблемы рынка */}
      <section className='py-20 border-t border-gray-800'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Мы — первые</h2>
          <div className='grid md:grid-cols-3 gap-6 text-center'>
            <div className='bg-dark-secondary border border-error rounded-lg p-6'>
              <div className='text-3xl mb-2'>❌</div>
              <div className='text-lg font-semibold mb-2'>Банки блокируют переводы</div>
            </div>
            <div className='bg-dark-secondary border border-error rounded-lg p-6'>
              <div className='text-3xl mb-2'>❌</div>
              <div className='text-lg font-semibold mb-2'>Страны запрещают работать друг с другом</div>
            </div>
            <div className='bg-dark-secondary border border-error rounded-lg p-6'>
              <div className='text-3xl mb-2'>❌</div>
              <div className='text-lg font-semibold mb-2'>Серые схемы не гарантируют исполнение</div>
            </div>
          </div>
          <div className='text-center text-gray-400 mt-8'>Никто не дал этому рынку прозрачную и безопасную инфраструктуру. Мы первые, кто её строит.</div>
        </div>
      </section>

      {/* Как работает платформа */}
      <section className='py-20 border-t border-gray-800'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Как это работает</h2>
          <div className='grid md:grid-cols-4 gap-6 mb-8'>
            <div className='bg-dark-secondary border border-gray-800 rounded-lg p-6'>SECTOR 8 — платформа, через которую компании переводят деньги напрямую, минуя банки.</div>
            <div className='bg-dark-secondary border border-gray-800 rounded-lg p-6'>Выбор страны, маршрута, условий находится внутри интерфейса.</div>
            <div className='bg-dark-secondary border border-gray-800 rounded-lg p-6'>Смарт-контракт блокирует средства, проверяет условия и запускает расчёт.</div>
            <div className='bg-dark-secondary border border-gray-800 rounded-lg p-6'>Все шаги зашиты в код. Никакого ручного контроля.</div>
          </div>
          <div className='flex flex-wrap gap-4 justify-center mb-4'>
            <span className='inline-flex items-center px-4 py-2 bg-dark-secondary border border-success rounded-lg text-success font-semibold'>✅ Без SWIFT</span>
            <span className='inline-flex items-center px-4 py-2 bg-dark-secondary border border-success rounded-lg text-success font-semibold'>✅ Без KYC</span>
            <span className='inline-flex items-center px-4 py-2 bg-dark-secondary border border-success rounded-lg text-success font-semibold'>✅ Без посредников и агентов «на слове»</span>
          </div>
        </div>
      </section>

      {/* Бизнес-модель */}
      <section className='py-20 border-t border-gray-800'>
        <div className='container mx-auto px-4 max-w-2xl'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Деньги здесь. Вот как мы их зарабатываем</h2>
          <ul className='list-disc list-inside text-lg text-gray-300 space-y-2 mb-6'>
            <li>Каждая сделка приносит 0.2–1% комиссии</li>
            <li>Доход платформы зависит от объёма транзакций</li>
            <li>Инвестор получает долю от прибыли</li>
            <li>Чем больше маршрутов — тем больше сделок</li>
          </ul>
          <div className='text-gray-400 mb-8'>Доход инвестора начинается с первой сделки. Продукт не зависит от рекламы — он работает в закрытом рынке.</div>
          <div className='flex justify-center'>
            <button onClick={handleScrollToForm} className='bg-gradient-to-r from-accent-purple to-accent-pink text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow'>Запросить финмодель</button>
          </div>
        </div>
      </section>

      {/* Демонстрация платформы */}
      <section className='py-20 border-t border-gray-800'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>SOON 2025....</h2>
          <div className='text-gray-400 mb-8 text-center max-w-2xl mx-auto'>Платформа в активной разработке. Эта инфраструктура уже строится нами. Личный кабинет, интерфейс сделок, ордербук и логика маршрутов — все это скоро выйдет в свет.</div>
          <div className='flex gap-6 overflow-x-auto pb-4'>
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className='relative min-w-[340px] h-64 bg-dark-secondary border border-gray-800 rounded-lg overflow-hidden group'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity'>
                  <span className='text-3xl text-gray-500'>🔒</span>
                </div>
                <div className='w-full h-full bg-gray-700 group-hover:scale-105 transition-transform' />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма заявки инвестора */}
      <section id='investor-form' className='py-20 border-t border-gray-800'>
        <div className='container mx-auto px-4 max-w-xl'>
          <h2 className='text-3xl font-bold mb-4 text-center'>Время первых</h2>
          <div className='text-gray-400 mb-6 text-center'>SECTOR 8 — не публичный раунд. Мы рассматриваем только одного стратегического партнёра.</div>
          <InvestorForm />
        </div>
      </section>

      {/* FAQ */}
      <section className='py-20 border-t border-gray-800'>
        <div className='container mx-auto px-4 max-w-2xl'>
          <h2 className='text-3xl font-bold mb-8 text-center'>FAQ</h2>
          <div className='space-y-4'>
            <div className='border border-gray-800 rounded-lg p-4 flex items-start gap-3'><span className='text-2xl'>💬</span><div><div className='font-semibold'>Вы предлагаете долю в компании?</div><div className='text-gray-400'>Да, мы готовы обсуждать индивидуальные условия с единственным инвестором.</div></div></div>
            <div className='border border-gray-800 rounded-lg p-4 flex items-start gap-3'><span className='text-2xl'>💬</span><div><div className='font-semibold'>Когда запуск?</div><div className='text-gray-400'>MVP платформы запланирован на 2025 год.</div></div></div>
            <div className='border border-gray-800 rounded-lg p-4 flex items-start gap-3'><span className='text-2xl'>💬</span><div><div className='font-semibold'>Что я получу как инвестор?</div><div className='text-gray-400'>Долю от прибыли платформы и эксклюзивный доступ к ключевым решениям.</div></div></div>
            <div className='border border-gray-800 rounded-lg p-4 flex items-start gap-3'><span className='text-2xl'>💬</span><div><div className='font-semibold'>Как работает платформа?</div><div className='text-gray-400'>Вся логика построена на смарт-контрактах и автоматизации маршрутов.</div></div></div>
            <div className='border border-gray-800 rounded-lg p-4 flex items-start gap-3'><span className='text-2xl'>💬</span><div><div className='font-semibold'>Можно ли будет пользоваться платформой без инвестиций?</div><div className='text-gray-400'>Да, для клиентов платформа будет открыта после запуска.</div></div></div>
          </div>
          <div className='text-gray-500 italic text-center mt-8'>Этот шанс не повторится. Через полгода рынок будет занят.</div>
        </div>
      </section>
    </main>
  );
} 