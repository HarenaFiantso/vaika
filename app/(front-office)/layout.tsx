import { ReactNode } from 'react';

import Container from '@/components/common/container';
import Footer from '@/components/common/footer';
import Navbar from '@/components/common/navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className='min-h-screen bg-zinc-100 text-zinc-900'>
      <Container>
        <Navbar />
        {children}
        <Footer />
      </Container>
    </main>
  );
}
