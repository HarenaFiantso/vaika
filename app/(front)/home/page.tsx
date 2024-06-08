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
      <div
        className="w-44 h-44 hidden md:flex dark:bg-gradient-radial from-pink-500 to-purple-700 rounded-full rotate-12 absolute top-3/4 right-1/2 blur-3xl" />
      <div
        className="w-44 h-44 dark:bg-gradient-radial from-blue-500 to-violet-950 rounded-2xl rotate-12 absolute top-[98%] left-1/2 blur-3xl" />
      <div
        className="w-72 h-72 dark:bg-gradient-radial from-indigo-900 to-purple-700 rounded-2xl rotate-12 absolute top-1/2 left-1/2 blur-3xl" />
      <div
        className="w-72 h-20 dark:bg-gradient-radial from-teal-500 to-green-700 rounded-2xl rotate-12 absolute top-0 left-4 blur-3xl" />
      <div
        className="w-72 h-72 dark:bg-gradient-radial from-slate-700 to-[#343434] rounded-2xl rotate-12 absolute top-[15%] right-0 blur-3xl" />

      <Hero />
      <Brands />
      {allCars && <Catalogue allCars={allCars} isLoading={isLoading} size={(size || 20) / 10} />}
      <Contact />
    </main>
  );
}
