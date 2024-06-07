'use client';

import { CarCard, CustomButton, Filter, SearchBar } from '@/components';
import { Car } from '@vaika-api/typescript-client';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { updateSearchParams } from '@/utils/utils';

import { CarCardSkeleton } from '@/components/skeleton';

type CatalogueProps = {
  isLoading: boolean;
  allCars: Car[];
  size: number;
};

export default function Catalogue({ isLoading, allCars, size }: CatalogueProps) {
  const router: AppRouterInstance = useRouter();
  const handleClick = (): void => {
    const newSize: number = ((size || 10) + 1) * 10;
    const pathname: string = updateSearchParams('size', `${newSize}`);
    router.push(pathname);
  };

  return (
    <section id='explore' className='relative mx-auto mt-12 w-full max-w-[1440px] p-4 md:p-16'>
      <h1 className='bg-gradient-radial from-[#456efd] to-[#00377b,#017cd0] bg-clip-text text-2xl font-bold text-transparent dark:text-white md:text-4xl'>
        Car Catalogue
      </h1>
      <p className='mt-2 text-sm text-gray-700 dark:text-white md:text-lg'>Explore out cars you might like</p>
      <div className='mt-6 flex w-full flex-col items-center justify-center  gap-2 md:flex-row md:justify-between'>
        <SearchBar />
        <Filter />
      </div>

      <div className='mt-12 flex items-center justify-between'>
        <h2 className='text-left text-lg font-bold dark:text-indigo-400 md:text-2xl'>Recommended</h2>
        <Link href={'/cars'} className='capitalize text-blue-600 underline dark:text-indigo-400'>
          view all
        </Link>
      </div>
      <div className='mt-6 flex flex-wrap justify-center gap-2'>
        {allCars?.length === 0 && !isLoading ? (
          <div className='flex flex-col items-center justify-center'>
            <Image src={'/images/empty-box.webp'} alt='hero' quality={100} width={300} height={300} priority={true} />
            <h2 className='font-semibold text-black dark:text-white'>No cars found</h2>
          </div>
        ) : (
          allCars?.slice(0, 4).map((car: Car, i: number) => <CarCard key={i} car={car} />)
        )}
        {isLoading &&
          Array(4)
            .fill(0)
            .map((_, i: number) => <CarCardSkeleton key={i} />)}
      </div>
      <div className='mt-12 flex items-baseline justify-between'>
        <h2 className='text-left text-lg font-bold dark:text-indigo-400 md:text-2xl'>Hot Collections</h2>
        <Link href={'/cars'} className='capitalize text-blue-600 underline dark:text-indigo-400'>
          view all
        </Link>
      </div>
      <div className='mt-6 flex flex-wrap justify-center gap-2'>
        {allCars?.length === 0 && !isLoading ? (
          <div className='flex flex-col items-center justify-center'>
            <Image src={'/images/empty-box.webp'} alt='hero' quality={100} width={300} height={300} priority={true} />
            <h2 className='font-semibold text-white'>No cars found</h2>
          </div>
        ) : (
          allCars?.reverse()?.map((car: Car, i: number) => <CarCard key={i} car={car} />)
        )}
        {isLoading &&
          Array(8)
            .fill(0)
            .map((_, i: number) => <CarCardSkeleton key={i} />)}
      </div>

      {size < allCars?.length && (
        <CustomButton
          title='Show More'
          type='button'
          containerStyle='mt-12 mx-auto bg-blue-600 text-white px-6 border rounded-full dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600'
          handleClick={handleClick}
        />
      )}
    </section>
  );
}
