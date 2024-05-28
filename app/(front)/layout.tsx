import { Navbar } from '@/components';
import { ReactNode } from 'react';

export default function FrontOfficeLayout({ children }: { children: ReactNode }) {
  return (
    <main className='app bg-slate-50 dark:bg-[#0b1120]'>
      <Navbar />
      {children}
    </main>
  );
}
