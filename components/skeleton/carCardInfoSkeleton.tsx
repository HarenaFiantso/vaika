'use client';

import { IdCar } from '@/constants';
import { carApi } from '@/services/vaika-api';
import { Car } from '@vaika-api/typescript-client';
import { useEffect, useState } from 'react';

export default function CarCardInfoSkeleton({ idCar }: IdCar) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [car, setCar] = useState<Car | any>();

  useEffect((): void => {
    setIsLoading(true);
    carApi.getACarById(idCar).then((data) => setCar(data.data));
    setIsLoading(false);
  }, [idCar]);

  return (
    <div
      className={`group w-[100%]  max-w-lg p-3   transition-all duration-150 ease-linear md:p-4 dark:border-zinc-600 dark:bg-gradient-radial  dark:text-slate-300 ${isLoading ? 'animate-pulse  from-slate-700 to-slate-900 ' : ''}`}
    >
      <div className='flex items-center justify-between'>
        <h1
          className={`w-28 max-w-[75%] truncate text-lg font-bold capitalize md:text-xl  ${isLoading ? 'h-3 bg-gray-400 dark:bg-slate-900 ' : ''}`}
        >
          {' '}
          {car?.brand?.name}{' '}
        </h1>
      </div>
      <p className={`mt-1 h-3 w-24 capitalize text-gray-400 ${isLoading ? 'bg-gray-400  dark:bg-slate-900' : ''}`}></p>

      <div className='relative mt-2 h-[40vh] w-full'>
        <div className='h-full w-full rounded bg-gray-400 dark:bg-slate-900'></div>
      </div>
      <div className='mt-2 h-fit w-full p-2'>
        <div className='flex w-full items-center justify-between gap-4'>
          <div className='flex w-full max-w-xs items-center justify-center gap-2'>
            <span className=' text-sm text-gray-400 '> {car?.motor_type?.name} </span>
          </div>
          <div className='flex w-full max-w-xs items-center justify-center gap-2'>
            <span className=' text-sm text-gray-400'> {car?.power} </span>
          </div>
          <div className='flex w-full max-w-xs items-center justify-center gap-2'>
            <span className='text-sm text-gray-400 '> {car?.color} </span>
          </div>
        </div>
        <div>
          {isLoading ? (
            <>
              <div className='mt-2 flex items-center justify-between'>
                <div className='relative h-[2vh] w-full bg-gray-400 dark:bg-slate-900 '></div>
              </div>
              <div className='mt-2 flex items-center justify-between'>
                <div className='relative h-[2vh] w-full bg-gray-400 dark:bg-slate-900 '></div>
              </div>
            </>
          ) : (
            <div className='mt-6 flex items-center justify-between'>
              <div className={`relative w-full ${isLoading ? 'h-[2vh]bg-gray-400 dark:bg-slate-900 ' : ''} `}>
                {' '}
                {car?.description}{' '}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
