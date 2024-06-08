'use client';

import CustomButton from './customButton';
import { Car } from '@vaika-api/typescript-client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type CarCardProps = {
  car: Car;
  isPinned: boolean;
};

export default function CarCard({ car, isPinned }: CarCardProps) {
  const router = useRouter();
  const [isPinnedBtnActive, setIsPinnedBtnActive] = useState(isPinned);

  return (
    <div className='group mx-auto  h-fit w-full max-w-lg rounded-2xl border bg-white from-slate-700 to-slate-900 p-3 transition-all duration-150 ease-linear group-hover:scale-125 dark:border-slate-700/70 dark:bg-gradient-radial md:p-4  md:hover:shadow-lg'>
      <div className='flex items-center justify-between'>
        <h1 className='max-w-[75%] truncate text-lg font-bold capitalize md:text-xl'>{car.name}</h1>
        <button type='button'>
          <Image
            src={`/icons/${isPinnedBtnActive ? 'heart-filled' : 'heart-outline'}.svg`}
            alt='favorite button'
            width={20}
            height={20}
            className={`cursor-pointer object-contain ${
              isPinnedBtnActive && 'scale-150 transition-transform duration-150 ease-in'
            }`}
          />
        </button>
      </div>

      <div className='relative mt-1 h-48 w-full rounded-lg'>
        <Image
          src={car.images && car.images.length > 0 ? `${car.images[0].url}` : ''}
          alt='car'
          fill
          className='absolute w-full rounded-lg object-contain'
        />
      </div>
      <div className='mt-2 h-fit w-full p-2'>
        <div className='flex w-full items-center justify-between '>
          <div className='flex  items-center justify-center gap-1'>
            <Image
              src={'/icons/steering-wheel.svg'}
              alt='steering wheel'
              width={15}
              height={15}
              className='object-contain'
            />
            <span className='text-sm text-gray-400'>Manual</span>
          </div>
          <div className='flex  items-center justify-center gap-1'>
            <Image src={'/icons/fuel-tank.svg'} alt='fuel-tank' width={15} height={15} className='object-contain' />
            <span className='text-sm text-gray-400'>{car.power}</span>
          </div>
          <div className='flex items-center justify-center gap-1'>
            <Image src={'/icons/people.svg'} alt='people' width={15} height={15} className='object-contain' />
            <span className='text-sm text-gray-400 '>{car.place_number} People</span>
          </div>
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <div className='relative '>
            <span className='absolute top-0 text-xs font-bold'>$</span>
            <span className='ml-2 text-center text-lg font-bold md:text-2xl'>{car.price?.toFixed(2)}</span>
          </div>
          <Link href={`/cars/${car.id}`}>
            <CustomButton
              handleClick={() => router.push(`/cars/${car.id}`)}
              title='More Info'
              type='button'
              containerStyle='bg-blue-600 text-white w-full px-5 rounded-full dark:bg-slate-700 dark:text-slate-300'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
