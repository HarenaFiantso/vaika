'use client';

import CustomButton from './customButton';
import { Car } from '@vaika-api/typescript-client';
import { useRouter } from 'next/navigation';

export default function carCard({ car }: { car: Car }) {
  const router = useRouter();
  return (
    <div className='group h-fit  w-full max-w-lg rounded-2xl border bg-white from-slate-700 to-slate-900   p-3 transition-all duration-150 ease-linear md:p-4 md:hover:border md:hover:shadow-lg dark:border-zinc-600 dark:bg-gradient-radial dark:text-slate-300'>
      <div className='flex items-center justify-between'>
        <h1 className=' w-28 max-w-[75%] truncate text-lg font-bold capitalize md:text-xl '> {car.type?.name} </h1>
      </div>
      <p className='mt-1 capitalize text-gray-400 '> {car.brand?.name} </p>

      <div className='relative mt-2 h-40 w-full'>
        <div className='h-full w-full rounded dark:bg-slate-900'></div>
      </div>
      <div className='mt-2 h-fit w-full p-2'>
        <div className='flex w-full items-center justify-between gap-4'>
          <div className='flex w-full max-w-xs items-center justify-center gap-2'>
            <span className=' text-sm text-gray-400 '> {car.motor_type?.name} </span>
          </div>
          <div className='flex w-full max-w-xs items-center justify-center gap-2'>
            <span className=' text-sm text-gray-400'> {car.power} </span>
          </div>
          <div className='flex w-full max-w-xs items-center justify-center gap-2'>
            <span className='text-sm text-gray-400 '> {car.color} </span>
          </div>
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <div className='relative '> {car.price} $</div>
          <CustomButton
            title='Details'
            type='submit'
            handleClick={() => router.push(`/appointment/${car.id}`)}
            containerStyle=' mx-left mt-[1rem] w-[7rem] bg-blue-600 text-white px-6 border rounded-full dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600'
          />
        </div>
      </div>
    </div>
  );
}
