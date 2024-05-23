import { ReactNode } from 'react';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
