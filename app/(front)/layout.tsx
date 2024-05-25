import { ReactNode } from 'react';

import Footer from '@/components/common/footer';
import Navbar from '@/components/common/navbar';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
