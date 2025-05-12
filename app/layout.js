import '../styles/globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata = {
  title: 'Sector 8 — анонимные B2B-платежи',
  description: 'Платформа для анонимных B2B-платежей через децентрализованный эскроу. Без банков, без блокировок, без риска.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-dark-bg text-white min-h-screen font-sans">
        {children}
      </body>
    </html>
  )
} 