'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  company: z.string().optional(),
  contact: z.string().min(3, 'Укажите Telegram или Email'),
  description: z.string().min(10, 'Опишите вашу потребность подробнее'),
  justInfo: z.boolean().optional()
})

export default function ApplicationForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data) => {
    await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto">
      <div>
        <input
          {...register('name')}
          placeholder="Имя / Никнейм"
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <input
          {...register('company')}
          placeholder="Компания (опционально)"
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white"
        />
      </div>
      <div>
        <input
          {...register('contact')}
          placeholder="Telegram / Email"
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white"
        />
        {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
      </div>
      <div>
        <textarea
          {...register('description')}
          placeholder="Что хотите сделать? (Пример: Отправить $100k из РФ → EMEA)"
          rows={4}
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>
      <div className="flex items-center">
        <input
          {...register('justInfo')}
          type="checkbox"
          className="mr-2"
        />
        <label className="text-gray-300">Хочу просто узнать больше</label>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
      >
        {isSubmitting ? 'Отправка...' : 'Запросить доступ'}
      </button>
      {isSubmitSuccessful && <p className="text-green-500 text-center mt-2">Заявка отправлена!</p>}
    </form>
  )
} 