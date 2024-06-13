'use client';

import CarCard from './carCard';
import { CarCardSkeleton } from './skeleton';
import { Car } from '@vaika-api/typescript-client';
import { useEffect, useState } from 'react';

import { carApi } from '../services/vaika-api';

export default function ShowAllCars() {
  const [cars, setCars] = useState<Car[] | any>([]);
  useEffect((): void => {
    carApi.getCars().then((data) => setCars(data.data));
  }, []);

  return (
    <div className='h-[100vh] overflow-auto p-7'>
      <div className='mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2  md:grid-cols-3 md:gap-3 2xl:grid-cols-4'>
        {cars?.length === 0 ? (
          <p className='w-full text-center text-xl font-semibold text-black dark:text-white'>No cars found</p>
        ) : (
          cars?.slice(0, 4).map((car: Car, i: number) => <CarCard key={i} car={car} isPinned={false} />)
        )}
        {!cars &&
          Array(4)
            .fill(0)
            .map((_, i: number) => <CarCardSkeleton key={i} />)}
      </div>
    </div>
  );
}

