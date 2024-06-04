'use client'

import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

export default function CustomThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">{children}</ThemeProvider>
  )
}