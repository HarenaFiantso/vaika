'use client';

import { Brands, Catalogue, Contact, Hero } from '@/components';
import { carApi } from '@/services/vaika-api';
import { Car } from '@vaika-api/typescript-client';
import { ReactNode, useEffect, useState } from 'react';

import { HomeProps } from '@/utils/type';

export default function Home({ searchParams }: HomeProps): ReactNode {
  const { size } = searchParams;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allCars, setAllCars] = useState<Car[] | any>([]);

  useEffect((): void => {
    setIsLoading(true);
    carApi.getCars().then((data) => setAllCars(data.data));
    setIsLoading(false);
  }, []);

  return (
    <main className='relative overflow-hidden backdrop-blur-3xl backdrop-filter dark:bg-slate-900'>
      <Hero />
      <Brands />
      {allCars && <Catalogue allCars={allCars} isLoading={isLoading} size={(size || 20) / 10} />}
      <Contact />
    </main>
  );
}
