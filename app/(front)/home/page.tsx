'use client';

import { Brands, Catalogue, Hero } from '@/components';
import { carApi } from '@/services/vaika-api';
import { Car } from '@vaika-api/typescript-client';
import { useEffect, useState } from 'react';

type FetchCarProps = {
  size?: number;
};

type HomeProps = {
  searchParams: FetchCarProps;
};

export default function Home({ searchParams }: HomeProps) {
  const { size } = searchParams;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allCars, setAllCars] = useState<Car[] | any>([]);

  useEffect((): void => {
    setIsLoading(true);
    carApi.getCars().then((data) => setAllCars(data));
    setIsLoading(false);
  }, []);

  return (
    <main className='relative overflow-hidden backdrop-blur-3xl backdrop-filter dark:bg-slate-900'>
      <Hero />
      <Brands />
      {allCars && <Catalogue allCars={allCars} isLoading={isLoading} size={(size || 20) / 10} />}
    </main>
  );
}
