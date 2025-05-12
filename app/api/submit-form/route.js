import { sendToTelegram } from '../../../lib/telegram'

export async function POST(req) {
  try {
    const data = await req.json()
    const ok = await sendToTelegram(data)
    return new Response(JSON.stringify({ ok }), { status: ok ? 200 : 500 })
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: e.message }), { status: 500 })
  }
} 