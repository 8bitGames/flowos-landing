'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { StarBorder } from './star-border';
import { Locale, Translations } from '@/locales/types';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  message: string;
}

interface ContactFormProps {
  locale: Locale;
  translations: Translations;
}

export function ContactForm({ locale, translations: t }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 필수 필드 검증
    if (!formData.name || !formData.company || !formData.email || !formData.phone || !formData.message) {
      setSubmitStatus('error');
      setErrorMessage(locale === 'ko' ? '필수 항목을 모두 입력해주세요.' : 'Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Next.js API Route를 통해 제출 (CORS 문제 해결)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.status === 'success') {
        setSubmitStatus('success');
      } else {
        throw new Error(result.message || (locale === 'ko' ? '전송에 실패했습니다.' : 'Submission failed.'));
      }

      // 폼 초기화
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        website: '',
        message: ''
      });

      // 3초 후 성공 메시지 제거
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(locale === 'ko' ? '문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' : 'An error occurred while submitting. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-700 dark:text-slate-400 mb-2 font-medium">{t.contact.formLabels.name} *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.formPlaceholders.name}
              required
              className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 dark:text-slate-400 mb-2 font-medium">{t.contact.formLabels.company} *</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder={t.contact.formPlaceholders.company}
              required
              className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 dark:text-slate-400 mb-2 font-medium">{t.contact.formLabels.email} *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.contact.formPlaceholders.email}
            required
            className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-700 dark:text-slate-400 mb-2 font-medium">{t.contact.formLabels.phone} *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.contact.formPlaceholders.phone}
              required
              className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 dark:text-slate-400 mb-2 font-medium">Website</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://www.example.com"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 dark:text-slate-400 mb-2 font-medium">{t.contact.formLabels.message} *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder={t.contact.formPlaceholders.message}
            required
            maxLength={500}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
          />
          <p className="text-xs text-gray-500 dark:text-slate-500 mt-1 text-right">
            {formData.message.length}/500
          </p>
        </div>

        {/* 상태 메시지 */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-green-800 dark:text-green-300 text-sm font-medium">
              ✅ {t.contact.messages.success}
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-800 dark:text-red-300 text-sm font-medium">
              ❌ {errorMessage}
            </p>
          </div>
        )}

        <StarBorder as="button" type="submit" color="#06b6d4" className="w-full" disabled={isSubmitting}>
          <div className={`w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white text-lg font-medium transition-all duration-300 transform ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}>
            {isSubmitting ? t.contact.formLabels.submitting : t.contact.formLabels.submit}
          </div>
        </StarBorder>
      </form>
    </div>
  );
}
