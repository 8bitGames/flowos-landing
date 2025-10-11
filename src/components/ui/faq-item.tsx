'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 dark:border-slate-700 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors px-4 sm:px-6"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white pr-4">
          {question}
        </h3>
        <ChevronDown
          className={`w-6 h-6 flex-shrink-0 text-[#00268B] dark:text-[#5B8DEF] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 pb-6">
          <p className="text-base sm:text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
