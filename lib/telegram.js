export async function sendToTelegram(formData) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  const message = `\n🆕 Новая заявка на бета-тест!\n\n👤 Имя: ${formData.name}\n🏢 Компания: ${formData.company || 'Не указана'}\n📱 Контакт: ${formData.contact}\n📋 Описание: ${formData.description}\nℹ️ Только информация: ${formData.justInfo ? 'Да' : 'Нет'}\n\nВремя: ${new Date().toLocaleString('ru-RU')}`

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
      })
    })
    return response.ok
  } catch (error) {
    console.error('Telegram send error:', error)
    return false
  }
} 