import { ReactNode } from 'react';

import Hero from '@/components/common/hero';

export default function HomePage(): ReactNode {
  return (
    <main className='home__main_content'>
      <Hero />
    </main>
  );
}
