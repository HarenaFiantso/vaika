'use client';

import { Catalogue, Hero } from '@/components';
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
      <div className='absolute right-1/2 top-3/4 hidden h-44 w-44 rotate-12 rounded-full from-indigo-500 to-violet-950 blur-3xl md:flex dark:bg-gradient-radial' />
      <div className='absolute left-1/2 top-[98%] h-44 w-44 rotate-12 rounded-2xl from-pink-500 to-pink-950 blur-3xl dark:bg-gradient-radial' />
      <div className='absolute left-1/2 top-1/2 h-72 w-72 rotate-12 rounded-2xl from-indigo-900 to-pink-700 blur-3xl dark:bg-gradient-radial' />
      <div className='absolute left-4 top-0 h-20 w-72 rotate-12 rounded-2xl from-indigo-500 to-indigo-700 blur-3xl dark:bg-gradient-radial' />
      <div className='absolute right-0 top-[15%] h-72 w-72 rotate-12 rounded-2xl from-pink-700 to-pink-600 blur-3xl dark:bg-gradient-radial' />

      <Hero />
      {allCars && <Catalogue allCars={allCars} isLoading={isLoading} size={(size || 20) / 10} />}
    </main>
  );
}
