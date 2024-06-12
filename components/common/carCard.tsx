'use client';

import { People } from '@mui/icons-material';
import { Car } from '@vaika-api/typescript-client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GiCarWheel, GiPowerLightning } from 'react-icons/gi';

import { Button } from '@/components/ui/button';

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  const router = useRouter();

  return (
    <div data-aos='fade-up' className='flex w-full flex-col gap-5 rounded-lg border border-zinc-500/30'>
      <Image
        src={car.images && car.images.length > 0 ? `${car.images[0].url}` : ''}
        alt='car'
        width={500}
        height={500}
        priority
        className='h-[15rem] w-[100rem] rounded-t-lg object-cover saturate-0 transition-all hover:saturate-100'
      />
      <div className='mt-2 flex flex-col gap-2 p-2'>
        <h1 className='max-w-[75%] truncate text-lg font-bold capitalize md:text-xl'>{car.name}</h1>

        <div className='flex w-full items-center justify-between gap-10'>
          <div className='flex items-center justify-center gap-1'>
            <GiCarWheel />
            <span className='text-sm text-gray-400'>Manual</span>
          </div>
          <div className='flex items-center justify-center gap-1'>
            <GiPowerLightning />
            <span className='text-sm text-gray-400'>{car.power}</span>
          </div>
          <div className='flex items-center justify-center gap-1'>
            <People />
            <span className='text-sm text-gray-400'>{car.place_number}</span>
          </div>
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <div className='relative text-zinc-700'>
            <span className='absolute top-0 text-xs font-bold'>$</span>
            <span className='ml-2 text-center text-lg font-bold md:text-2xl'>{car.price?.toFixed(2)}</span>
          </div>
          <Button
            onClick={() => router.push(`/cars/${car.id}`)}
            title='More Info'
            type='button'
            className='bg-zinc-400'
          >
            More info
          </Button>
        </div>
      </div>
    </div>
  );
}
