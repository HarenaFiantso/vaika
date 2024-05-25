import { Car, Check, Star } from '@/assets';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='hero-pattern h-[875px] w-full'>
      <div className='m-auto flex h-full max-w-[1536px] flex-col'>
        <div className='flex h-full flex-col items-start justify-center gap-10'>
          <h1 className='text-8xl font-semibold'>
            Find the car that <br /> searching for you.
          </h1>
          <button className='w-[500px] rounded-lg bg-[#E83657] px-10 py-5 text-lg font-semibold transition-all hover:bg-white hover:text-black'>
            Button
          </button>
        </div>
        {/* TODO: Should map this */}
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <Image src={Star} alt='star' />
            <span>
              7-day money-back promise. <br /> Better than a test drive.
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Image src={Check} alt='star' />
            <span>
              3 month warranty. <br /> Relax, your car is covered.
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Image src={Car} alt='star' />
            <span>
              Carma Checklist certified. <br /> Examined by experts.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
