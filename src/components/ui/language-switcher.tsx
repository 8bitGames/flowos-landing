'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  const togglePath = isEnglish ? pathname.replace('/en', '') || '/' : `/en${pathname}`;

  return (
    <Link
      href={togglePath}
      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4 text-gray-700 dark:text-slate-300" />
      <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
        {isEnglish ? 'KO' : 'EN'}
      </span>
    </Link>
  );
}
