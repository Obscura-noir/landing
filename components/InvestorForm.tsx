'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import React from 'react';

const schema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Введите корректный email'),
  contact: z.string().min(3, 'Укажите Telegram или WhatsApp'),
  comment: z.string().optional(),
});

type InvestorFormData = z.infer<typeof schema>;

export default function InvestorForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<InvestorFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: InvestorFormData) => {
    await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, isInvestor: true }),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      <div>
        <input
          {...register('name')}
          placeholder='Имя'
          className='w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:border-accent-purple focus:ring-2 focus:ring-accent-purple'
        />
        {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
      </div>
      <div>
        <input
          {...register('email')}
          type='email'
          placeholder='Email'
          className='w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:border-accent-purple focus:ring-2 focus:ring-accent-purple'
        />
        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
      </div>
      <div>
        <input
          {...register('contact')}
          placeholder='Telegram / WhatsApp'
          className='w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:border-accent-purple focus:ring-2 focus:ring-accent-purple'
        />
        {errors.contact && <p className='text-red-500 text-sm mt-1'>{errors.contact.message}</p>}
      </div>
      <div>
        <textarea
          {...register('comment')}
          placeholder='Комментарий'
          rows={3}
          className='w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:border-accent-purple focus:ring-2 focus:ring-accent-purple'
        />
      </div>
      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full bg-gradient-to-r from-accent-purple to-accent-pink text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow'
      >
        {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
      </button>
      {isSubmitSuccessful && <p className='text-green-500 text-center mt-2'>Заявка отправлена!</p>}
      <div className='text-xs text-gray-500 text-center mt-2'>Информация строго конфиденциальна. Заявка — не обязательство.</div>
    </form>
  );
} 