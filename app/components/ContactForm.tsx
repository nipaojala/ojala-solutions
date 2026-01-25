'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import Button from './Button';
import { sendContact } from '@/app/actions/sendContact';

export default function ContactForm() {
  const t = useTranslations('ContactForm');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const result = await sendContact(formData);
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="animate-fade-in-up delay-100">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          {t('name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F7A5A5] focus:border-transparent transition-all outline-none"
          placeholder={t('namePlaceholder')}
        />
      </div>
      <div className="animate-fade-in-up delay-200">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          {t('email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F7A5A5] focus:border-transparent transition-all outline-none"
          placeholder={t('emailPlaceholder')}
        />
      </div>
      <div className="animate-fade-in-up delay-300">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          {t('message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F7A5A5] focus:border-transparent transition-all outline-none resize-none"
          placeholder={t('messagePlaceholder')}
        />
      </div>
      <div className="animate-fade-in-up delay-400">
        <Button
          type="submit"
          variant="primary"
          className="w-full md:w-auto"
          onClick={undefined}
        >
          {status === 'sending' ? t('sending') : status === 'success' ? t('success') : t('send')}
        </Button>
        {status === 'success' && (
          <p className="mt-4 text-green-600 animate-fade-in">
            {t('successMessage')}
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600 animate-fade-in">
            {t('error')}
          </p>
        )}
      </div>
    </form>
  );
}
