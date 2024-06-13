'use client';

import { carApi } from '@/services/vaika-api';
import { Car } from '@vaika-api/typescript-client';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

import CarCard from '@/components/common/carCard';
import CarCardSkeleton from '@/components/common/carCardSkeleton';

export default function ShowAllCars() {
  const [cars, setCars] = useState<Car[] | any>([]);
  useEffect((): void => {
    carApi.getCars().then((data) => setCars(data.data));
  }, []);

  return (
    <div className='p-2'>
      <div
        data-aos='fade-up'
        className='mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-3 2xl:grid-cols-4'
      >
        {cars?.length === 0 ? (
          <p className='text-zinc-800'>No cars found...</p>
        ) : (
          cars?.map((car: Car, i: number) => <CarCard key={i} car={car} />)
        )}
        {!cars &&
          Array(8)
            .fill(0)
            .map((_, i: number) => <CarCardSkeleton key={i} />)}
      </div>
    </div>
  );
}
