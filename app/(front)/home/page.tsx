import { ReactNode } from 'react';

import Hero from '@/components/hero';

export default function HomePage(): ReactNode {
  return (
    <main className='home__main_content'>
      <Hero />
    </main>
  );
}
