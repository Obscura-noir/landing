'use client';
import React, { useState } from 'react';
import InvestorForm from '../../components/InvestorForm';

const investorScreens = [
  '/img/1.jpeg',
  '/img/2.jpeg',
  '/img/3.jpeg',
  '/img/4.jpeg',
  '/img/5.jpeg',
];

export default function InvestorLanding() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const handleScrollToForm = () => {
    const el = document.getElementById('investor-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className='bg-dark-bg text-white'>
      {/* Hero Section */}
      <section className='min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-12 md:py-20 px-4'>
        <div className='absolute inset-0 bg-gradient-to-br from-accent-purple/30 via-accent-pink/20 to-transparent animate-gradient-move' />
        <div className='relative z-10 text-left w-full max-w-xl md:w-3/4 mx-auto'>
          <h1 className='text-2xl sm:text-3xl md:text-6xl font-bold mb-4 md:mb-6 font-display leading-tight'>SECTOR 8 — платежная инфраструктура для международного B2B без банков</h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-2 md:mb-4'>Где банки отказывают — мы запускаем расчёты. Без посредников. Без следов. Без риска.</p>
          <p className='text-sm sm:text-base md:text-lg text-gray-400 mb-2 md:mb-4'>SECTOR 8 — это закрытая платформа, через которую компании проводят международные расчёты без банков. Всё автоматизировано смарт-контрактами.</p>
          <div className='text-lg md:text-2xl font-bold text-white mb-4 md:mb-6'>ВРЕМЯ - ДЕНЬГИ</div>
          <ul className='mb-6 md:mb-8 space-y-2 text-gray-300 text-sm sm:text-base'>
            <li>Пока вы это читаете, миллионы уходят через Telegram, агента и аванс на слово.</li>
            <li>Мы создаём первую платформу, которая автоматизирует эту реальность.</li>
            <li>Теперь это — Смарт-контракты, escrow и маршрут в коде.</li>
          </ul>
          <div className='flex flex-col sm:flex-row gap-3 md:gap-4 justify-start w-full'>
            <button onClick={handleScrollToForm} className='bg-gradient-to-r from-accent-purple to-accent-pink text-white px-5 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow text-base md:text-lg w-full sm:w-auto'>Стать инвестором</button>
            <a
              href='https://drive.google.com/file/d/1h5IGsWQflCqzkoPmK9fVPu2UReHLRNRx/view?usp=sharing'
              className='px-5 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-white bg-accent-green hover:bg-green-500 transition shadow-lg text-base md:text-lg border-2 border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green w-full sm:w-auto text-center'
              style={{ boxShadow: '0 2px 16px 0 #10B98155' }}
              target='_blank' rel='noopener noreferrer'
            >
              Скачать презентацию
            </a>
          </div>
        </div>
      </section>

      {/* Проблемы рынка */}
      <section className='py-12 md:py-20 border-t border-gray-800 px-4'>
        <div className='container mx-auto px-0 md:px-4'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center'>Мы — первые</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center'>
            <div className='bg-dark-secondary border border-error rounded-lg p-4 md:p-6 mb-2 md:mb-0'>
              <div className='text-2xl md:text-3xl mb-1 md:mb-2'>❌</div>
              <div className='text-base md:text-lg font-semibold mb-1'>Банки блокируют переводы</div>
            </div>
            <div className='bg-dark-secondary border border-error rounded-lg p-4 md:p-6 mb-2 md:mb-0'>
              <div className='text-2xl md:text-3xl mb-1 md:mb-2'>❌</div>
              <div className='text-base md:text-lg font-semibold mb-1'>Страны запрещают работать друг с другом</div>
            </div>
            <div className='bg-dark-secondary border border-error rounded-lg p-4 md:p-6'>
              <div className='text-2xl md:text-3xl mb-1 md:mb-2'>❌</div>
              <div className='text-base md:text-lg font-semibold mb-1'>Серые схемы не гарантируют исполнение</div>
            </div>
          </div>
          <div className='text-center text-gray-400 mt-6 md:mt-8 text-sm md:text-base'>Никто не дал этому рынку прозрачную и безопасную инфраструктуру. Мы первые, кто её строит.</div>
        </div>
      </section>

      {/* Как работает платформа */}
      <section className='py-12 md:py-20 border-t border-gray-800 px-4'>
        <div className='container mx-auto px-0 md:px-4'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center'>Как это работает</h2>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8'>
            <div className='bg-dark-secondary border border-gray-800 rounded-lg p-4 md:p-6 text-sm md:text-base'>SECTOR 8 — платформа, через которую компании переводят деньги напрямую, минуя банки.</div>
            <div className='bg-dark-secondary border border-gray-800 rounded-lg p-4 md:p-6 text-sm md:text-base'>Выбор страны, маршрута, условий находится внутри интерфейса.</div>
            <div className='bg-dark-secondary border border-gray-800 rounded-lg p-4 md:p-6 text-sm md:text-base'>Смарт-контракт блокирует средства, проверяет условия и запускает расчёт.</div>
            <div className='bg-dark-secondary border border-gray-800 rounded-lg p-4 md:p-6 text-sm md:text-base'>Все шаги зашиты в код. Никакого ручного контроля.</div>
          </div>
          <div className='flex flex-wrap gap-2 md:gap-4 justify-center mb-2 md:mb-4'>
            <span className='inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-dark-secondary border border-success rounded-lg text-success font-semibold text-xs md:text-base'>✅ Без SWIFT</span>
            <span className='inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-dark-secondary border border-success rounded-lg text-success font-semibold text-xs md:text-base'>✅ Без KYC</span>
            <span className='inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-dark-secondary border border-success rounded-lg text-success font-semibold text-xs md:text-base'>✅ Без посредников и агентов «на слове»</span>
          </div>
        </div>
      </section>

      {/* Бизнес-модель */}
      <section className='py-12 md:py-20 border-t border-gray-800 px-4'>
        <div className='container mx-auto px-0 md:px-4 max-w-lg md:max-w-2xl'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center'>Деньги здесь. Вот как мы их зарабатываем</h2>
          <ul className='list-disc list-inside text-base md:text-lg text-gray-300 space-y-2 mb-4 md:mb-6'>
            <li>Каждая сделка приносит 0.2–1% комиссии</li>
            <li>Доход платформы зависит от объёма транзакций</li>
            <li>Инвестор получает долю от прибыли</li>
            <li>Чем больше маршрутов — тем больше сделок</li>
          </ul>
          <div className='text-gray-400 mb-6 md:mb-8 text-sm md:text-base'>Доход инвестора начинается с первой сделки. Продукт не зависит от рекламы — он работает в закрытом рынке.</div>
          <div className='flex justify-center'>
            <button onClick={handleScrollToForm} className='bg-gradient-to-r from-accent-purple to-accent-pink text-white px-5 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow text-base md:text-lg'>Запросить финмодель</button>
          </div>
        </div>
      </section>

      {/* Демонстрация платформы */}
      <section className='py-12 md:py-20 border-t border-gray-800 px-2 md:px-4'>
        <div className='container mx-auto px-0 md:px-4'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center'>SOON 2025....</h2>
          <div className='text-gray-400 mb-6 md:mb-8 text-center max-w-xl md:max-w-2xl mx-auto text-sm md:text-base'>Платформа в активной разработке. Эта инфраструктура уже строится нами. Личный кабинет, интерфейс сделок, ордербук и логика маршрутов — все это скоро выйдет в свет.</div>
          <div className='flex gap-3 md:gap-6 overflow-x-auto pb-2 md:pb-4'>
            {investorScreens.map((src, i) => (
              <div key={i} className='relative min-w-[180px] sm:min-w-[220px] md:min-w-[340px] h-32 sm:h-40 md:h-64 bg-dark-secondary border border-gray-800 rounded-lg overflow-hidden group flex items-center justify-center cursor-pointer' onClick={() => setLightboxSrc(src)}>
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity'>
                  <span className='text-2xl md:text-3xl text-gray-500'>🔒</span>
                </div>
                <img
                  src={src}
                  alt={`Скриншот платформы ${i + 1}`}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Lightbox Modal */}
        {lightboxSrc && (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all'
            onClick={() => setLightboxSrc(null)}
          >
            <div className='relative max-w-3xl w-full flex justify-center items-center' onClick={e => e.stopPropagation()}>
              <button
                className='absolute top-2 right-2 text-white text-3xl bg-black/60 rounded-full p-2 hover:bg-black/80 transition-colors z-10'
                onClick={() => setLightboxSrc(null)}
                aria-label='Закрыть'
              >
                &times;
              </button>
              <img
                src={lightboxSrc}
                alt='Скриншот платформы (увеличено)'
                className='max-h-[80vh] max-w-full rounded-lg shadow-2xl border border-gray-700'
                draggable={false}
              />
            </div>
          </div>
        )}
      </section>

      {/* Форма заявки инвестора */}
      <section id='investor-form' className='py-12 md:py-20 border-t border-gray-800 px-4'>
        <div className='container mx-auto px-0 md:px-4 max-w-md md:max-w-xl'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center'>Время первых</h2>
          <div className='text-gray-400 mb-4 md:mb-6 text-center text-sm md:text-base'>SECTOR 8 — не публичный раунд. Мы рассматриваем только одного стратегического партнёра.</div>
          <InvestorForm />
        </div>
      </section>

      {/* FAQ */}
      <section className='py-12 md:py-20 border-t border-gray-800 px-4'>
        <div className='container mx-auto px-0 md:px-4 max-w-lg md:max-w-2xl'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center'>FAQ</h2>
          <div className='space-y-3 md:space-y-4'>
            <div className='border border-gray-800 rounded-lg p-3 md:p-4 flex items-start gap-2 md:gap-3 text-sm md:text-base'><span className='text-xl md:text-2xl'>💬</span><div><div className='font-semibold'>Вы предлагаете долю в компании?</div><div className='text-gray-400'>Да, мы готовы обсуждать индивидуальные условия с единственным инвестором.</div></div></div>
            <div className='border border-gray-800 rounded-lg p-3 md:p-4 flex items-start gap-2 md:gap-3 text-sm md:text-base'><span className='text-xl md:text-2xl'>💬</span><div><div className='font-semibold'>Когда запуск?</div><div className='text-gray-400'>MVP платформы запланирован на 2025 год.</div></div></div>
            <div className='border border-gray-800 rounded-lg p-3 md:p-4 flex items-start gap-2 md:gap-3 text-sm md:text-base'><span className='text-xl md:text-2xl'>💬</span><div><div className='font-semibold'>Что я получу как инвестор?</div><div className='text-gray-400'>Долю от прибыли платформы и эксклюзивный доступ к ключевым решениям.</div></div></div>
            <div className='border border-gray-800 rounded-lg p-3 md:p-4 flex items-start gap-2 md:gap-3 text-sm md:text-base'><span className='text-xl md:text-2xl'>💬</span><div><div className='font-semibold'>Как работает платформа?</div><div className='text-gray-400'>Вся логика построена на смарт-контрактах и автоматизации маршрутов.</div></div></div>
            <div className='border border-gray-800 rounded-lg p-3 md:p-4 flex items-start gap-2 md:gap-3 text-sm md:text-base'><span className='text-xl md:text-2xl'>💬</span><div><div className='font-semibold'>Можно ли будет пользоваться платформой без инвестиций?</div><div className='text-gray-400'>Да, для клиентов платформа будет открыта после запуска.</div></div></div>
          </div>
          <div className='text-gray-500 italic text-center mt-6 md:mt-8 text-xs md:text-base'>Этот шанс не повторится. Через полгода рынок будет занят.</div>
        </div>
      </section>
    </main>
  );
} 