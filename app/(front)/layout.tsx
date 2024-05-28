import { ReactNode } from 'react';
import { Navbar } from '@/components';

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="bg-[#0b1120]">
      <Navbar />
      {children}
      <h1>Footer</h1>
    </main>
  );
}