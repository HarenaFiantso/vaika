import { CustomButton } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='light dark:dark gradient-radial relative mx-auto flex max-w-[1440px] flex-col items-center gap-10 bg-contain bg-bottom bg-no-repeat md:flex-row'>
      <div className='flex-1 p-4 pt-32 md:p-16 md:pt-28'>
        <h1 className='bg-gradient-radial from-[#456efd] to-[#00377b,#017cd0] bg-clip-text text-5xl font-bold text-blue-500 text-transparent dark:text-white md:text-7xl'>
          Find the car that is searching for you.
        </h1>
        <p className='text-slat-600 mb-4 mt-4 text-sm dark:text-slate-400 md:mt-6 md:text-xl lg:mb-8'>
          Ireny ilay menaka mahagaga e! azo hoanina, azo anorana, azo anosorana.
        </p>
        <Link href={'#explore'}>
          <CustomButton title='Explore Cars' type='button' containerStyle='text-white bg-blue-500 dark:bg-pink-500' />
        </Link>
      </div>

      <div className='flex h-[590px] w-full items-end justify-end lg:h-screen lg:flex-[1.25]'>
        <div className='relative h-full w-full'>
          <Image
            src={'/images/main-car.webp'}
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
