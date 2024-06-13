'use client';

import { carApi } from '@/services/vaika-api';
import { Category, Colorize } from '@mui/icons-material';
import { Car } from '@vaika-api/typescript-client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsHammer, BsLightning } from 'react-icons/bs';
import { PiEngine, PiMotorcycle } from 'react-icons/pi';
import { SiWorkplace } from 'react-icons/si';

import { Button } from '@/components/ui/button';

export default function Page() {
  const pathname = usePathname().split('/');
  const id = pathname[2];
  const [car, setCar] = useState<Car | undefined>();

  useEffect(() => {
    carApi.getACarById(id).then((data) => setCar(data.data));
  }, [id]);

  console.log(pathname);
  return (
    <section className='relative mx-auto max-w-[1440px] p-2 pt-16'>
      {car ? (
        <div>
          <div className='flex w-full flex-row gap-6'>
            <div className='w-1/2 rounded-2xl bg-zinc-400'>
              <Image
                src={`${car.images?.map((image) => image.url)}`}
                alt='car'
                width={1024}
                height={1024}
                className='h-full w-full rounded-lg object-cover'
              />
            </div>
            <div className='flex w-full max-w-sm flex-col p-4'>
              <h2 className='text-3xl font-bold text-zinc-900'>{car.name}</h2>
              <p className='text-zinc-400'>
                <span className='font-semibold'>Model:</span> {car.model}
              </p>
              <div className='mt-6 w-full space-y-4'>
                <div className='flex w-full items-center justify-between'>
                  <div className='w-1/2'>
                    <h4 className='flex items-center gap-2 text-lg font-semibold capitalize text-zinc-500'>
                      <PiEngine /> Engine
                    </h4>
                    <p className='font-normal'>{car.model}</p>
                  </div>
                  <div className='w-1/2'>
                    <h4 className='flex items-center gap-2 text-lg font-semibold capitalize text-zinc-500'>
                      <PiMotorcycle /> Motor type
                    </h4>
                    <p className='font-normal'>{car.motor_type?.name}</p>
                  </div>
                </div>
                <div className='flex w-full items-center justify-between'>
                  <div className='w-1/2'>
                    <h4 className='flex items-center gap-2 text-lg font-semibold capitalize text-zinc-500'>
                      <Colorize /> Color
                    </h4>
                    <p className='font-normal'>{car.color}</p>
                  </div>
                  <div className='w-1/2'>
                    <h4 className='flex items-center gap-2 text-lg font-semibold capitalize text-zinc-500'>
                      <BsLightning /> Power
                    </h4>
                    <p className='font-normal'>{car.power}</p>
                  </div>
                </div>
                <div className='flex w-full items-center justify-between'>
                  <div className='w-1/2'>
                    <h4 className='flex items-center gap-2 text-lg font-semibold capitalize text-zinc-500'>
                      <Category /> Type
                    </h4>
                    <p className='font-normal'>{car.type?.name}</p>
                  </div>
                  <div className='w-1/2'>
                    <h4 className='flex items-center gap-2 text-lg font-semibold capitalize text-zinc-500'>
                      <SiWorkplace /> Place number
                    </h4>
                    <p className='font-normal'>{car.place_number} persons</p>
                  </div>
                </div>
              </div>
              <Button className='mt-10'>Create an appointment</Button>
            </div>
          </div>
          <div className='mt-4 rounded-2xl bg-zinc-100 p-4 dark:bg-gray-900 md:mt-6 md:p-6'>
            <h3 className='text-2xl font-bold capitalize'>About the {car.name}</h3>
            <p className='text-zinc-700-400 mt-1.5 text-sm'>{car.description}</p>
            <div className='mt-4 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 md:gap-6'>
              <div className='w-full gap-2'>
                <h4 className='flex items-center gap-2 text-xl font-semibold text-zinc-600'>
                  <BsHammer />
                  Creator
                </h4>
                <p className='text-sm md:text-lg'>{car.brand?.name}</p>
              </div>
              <div className='w-full gap-2'>
                <h4 className='flex items-center gap-2 text-xl font-semibold text-zinc-600'>
                  <AiFillDollarCircle />
                  Price
                </h4>
                <p className='text-sm md:text-lg'>$ {car.price}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
