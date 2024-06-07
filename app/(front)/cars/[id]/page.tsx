'use client';

import { carApi } from '@/services/vaika-api';
import { Car } from '@vaika-api/typescript-client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { CustomButton } from '@/components';
import { useRouter } from 'next/navigation';

const CardDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [car, setCar] = useState<Car | undefined>();
  const router = useRouter();

  useEffect(() => {
    const car = carApi.getACarById(id).then((data) => setCar(data.data));

    toast.promise(car, {
      loading: 'Fetching car details...',
      success: 'Fetched car details.',
      error: (err) => err.message,
    });
  }, [id]);

  return (
    <section className='relative mx-auto max-w-[1440px] p-2 pt-16 md:pt-24'>
      {car ? (
        <div>
          <div className='flex w-full flex-col gap-2 md:flex-row md:gap-6'>
            <div className='rounded-2xl bg-gray-100 dark:bg-gray-900 md:w-1/2'>
              <Image
                src={`${car.images?.map((image) => image.url)}`}
                alt='car'
                width={1024}
                height={1024}
                className='h-full w-full'
              />
            </div>
            <div className='flex w-full max-w-sm flex-col p-4'>
              <h2 className='text-lg font-bold md:text-3xl'>{car.name}</h2>
              <p className='text-gray-700 dark:text-gray-300'>{car.model}</p>
              <div className='mt-4 w-full space-y-2 md:mt-6 md:space-y-4'>
                <div className='flex w-full items-center justify-between'>
                  <div className='w-1/2'>
                    <h4 className='font-semibold capitalize md:text-lg'>Engine</h4>
                    <p className='font-normal'>{car.model}</p>
                  </div>
                  <div className='w-1/2'>
                    <h4 className='text-left font-semibold capitalize md:text-lg'>Motor type</h4>
                    <p className='font-normal'>{car.motor_type?.name}</p>
                  </div>
                </div>
                <div className='flex w-full items-center justify-between'>
                  <div className='w-1/2'>
                    <h4 className='font-semibold capitalize md:text-lg'>Color</h4>
                    <p className='font-normal'>{car.color}</p>
                  </div>
                  <div className='w-1/2'>
                    <h4 className='font-semibold capitalize md:text-lg'>Power</h4>
                    <p className='font-normal'>{car.power}</p>
                  </div>
                </div>
                <div className='flex w-full items-center justify-between'>
                  <div className='w-1/2'>
                    <h4 className='font-semibold capitalize md:text-lg'>Type</h4>
                    <p className='font-normal'>{car.type?.name}</p>
                  </div>
                  <div className='w-1/2'>
                    <h4 className='font-semibold capitalize md:text-lg'>Place number</h4>
                    <p className='font-normal'>{car.place_number} persons</p>
                  </div>
                </div>
                <CustomButton
                handleClick={() => router.push(`/appointment/${car.id}`)}
            title='Take an appointement'
            type='submit'
            containerStyle=' mx-left mt-[1rem] w-[70%] bg-blue-600 text-white px-6 border rounded-full dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600'
          />
              </div>
            </div>
          </div>
          <div className='mt-4 rounded-2xl bg-gray-100 p-4 dark:bg-gray-900 md:mt-6 md:p-6'>
            <h3 className='text-lg font-bold capitalize md:text-2xl'>About the {car.name}</h3>
            <p className='text-normal mt-1.5 text-gray-800 dark:text-gray-400 md:text-lg'>{car.description}</p>
            <div className='mt-4 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 md:gap-6'>
              <div className='w-full gap-2 '>
                <h4 className='text-lg md:text-xl'> 👨 Creator</h4>
                <p className='text-sm md:text-lg'>{car.brand?.name}</p>
              </div>
              <div className='w-full gap-2'>
                <h4 className='text-lg md:text-xl'> 💸 Price</h4>
                <p className='text-sm md:text-lg'>${car.price} per day</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default CardDetails;
