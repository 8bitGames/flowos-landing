'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export function DynamicFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;

    if (favicon) {
      favicon.href = resolvedTheme === 'dark'
        ? '/logo/symbol-white.svg'
        : '/logo/symbol.svg';
    }
  }, [resolvedTheme]);

  return null;
}
