'use client';

import { CarCard } from '@/components';
import { Id } from '@/constants';
import { carApi } from '@/services/vaika-api';
import { Car } from '@vaika-api/typescript-client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import CarCardSkeleton from '@/components/skeleton/carCardSkeleton';

export default function CarsBrand() {
  const [cars, setCars] = useState<Car[]>([]);
  const { id } = useParams<Id>();

  useEffect(() => {
    carApi
      .getCarsByBrands(id)
      .then((response) => setCars(response.data))
      .catch((error) => console.log(error));
  });
  return (
    <div className='pt-8'>
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
    </div>
  );
}
