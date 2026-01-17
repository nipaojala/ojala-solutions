'use client';

import { useState, FormEvent } from 'react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission (you can integrate with an API later)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // For now, just show success message
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
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
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFAAB8] focus:border-transparent transition-all outline-none"
          placeholder="Your name"
        />
      </div>
      <div className="animate-fade-in-up delay-200">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFAAB8] focus:border-transparent transition-all outline-none"
          placeholder="your.email@example.com"
        />
      </div>
      <div className="animate-fade-in-up delay-300">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFAAB8] focus:border-transparent transition-all outline-none resize-none"
          placeholder="Tell me about your project..."
        />
      </div>
      <div className="animate-fade-in-up delay-400">
        <Button
          type="submit"
          variant="primary"
          className="w-full md:w-auto"
          onClick={undefined}
        >
          {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
        </Button>
        {status === 'success' && (
          <p className="mt-4 text-green-600 animate-fade-in">
            Thank you! I'll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600 animate-fade-in">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
