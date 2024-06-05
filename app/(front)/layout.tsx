import { Footer, Navbar } from '@/components';
import { ReactNode } from 'react';
import CustomThemeProvider from '@/components/theme/customThemeProvider';

export default function FrontOfficeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <CustomThemeProvider>
        <main className='app bg-slate-50 dark:bg-[#0b1120]'>
          <Navbar />
          {children}
        </main>
        <Footer />
      </CustomThemeProvider>
    </>
  );
}
