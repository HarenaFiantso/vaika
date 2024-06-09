import { Call } from '@mui/icons-material';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className='light dark:dark gradient-radial relative mx-auto flex max-w-[1440px] flex-col items-center gap-10 bg-contain bg-bottom bg-no-repeat md:flex-row'>
      <div className='flex-1 p-4 pt-32 md:p-16 md:pt-28'>
        <h1 className='text-5xl font-bold text-black md:text-7xl'>Find the car that is searching for you.</h1>
        <p className='mb-4 mt-4 text-[14px] text-zinc-400 md:mt-6 md:text-xl lg:mb-8'>
          Streamline your car rental experience with our effortless booking process.
        </p>
        <div className='flex space-x-5'>
          <Button type='button' className='flex gap-x-5 rounded px-10 py-7 text-[16px]'>
            Explore cars
          </Button>
          <Button className='flex gap-x-5 rounded px-10 py-7 text-[16px]'>
            {' '}
            <Call /> Contact us
          </Button>
        </div>
      </div>

      <div className='flex h-[590px] w-full items-end justify-end lg:h-screen lg:flex-[1.25]'>
        <div className='relative h-full w-full'>
          <Image
            src={'/chevrolet-camaro.webp'}
            alt='hero'
            quality={100}
            fill
            priority={true}
            sizes=''
            className='animate-car absolute bottom-0 left-0 right-0 top-0 h-[590px] w-[80%] object-contain md:scale-125 lg:h-full lg:w-full'
          />
        </div>
      </div>
    </section>
  );
}
