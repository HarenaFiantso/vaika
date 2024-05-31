'use client';

import { CustomButton, Filter, SearchBar } from '@/components';
import Link from 'next/link';

import { CarCardSkeleton } from '@/components/skeleton';

type CatalogueProps = {
  isLoading: boolean;
};

export default function Catalogue({ isLoading }: CatalogueProps) {
  return (
    <section id='explore' className='relative mx-auto mt-12 w-full max-w-[1440px] p-4 md:p-16'>
      <h1 className='text-2xl font-bold text-white md:text-4xl '>Car Catalogue</h1>
      <p className='mt-2 text-sm text-white md:text-lg'>Explore out cars you might like</p>
      <div className='mt-6 flex w-full flex-col items-center justify-center  gap-2 md:flex-row md:justify-between'>
        <SearchBar />
        <Filter />
      </div>

      <div className='mt-12 flex items-baseline justify-between'>
        <h2 className='text-left text-lg font-bold md:text-2xl dark:text-pink-500'>Recommendations</h2>
        <Link href={'/cars'} className='capitalize text-blue-600 dark:text-pink-500'>
          view all
        </Link>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2  md:grid-cols-3 md:gap-3 2xl:grid-cols-4'>
        {/* TODO: We map car here */}
        {isLoading &&
          Array(4)
            .fill(0)
            .map((_, i) => <CarCardSkeleton key={i} />)}
      </div>
      <div className='mt-12 flex items-baseline justify-between'>
        <h2 className='text-left text-lg font-bold md:text-2xl dark:text-indigo-400'>Hot Collections</h2>
        <Link href={'/cars'} className='capitalize text-blue-600 dark:text-indigo-400'>
          view all
        </Link>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2  md:grid-cols-3 md:gap-3 2xl:grid-cols-4'>
        {/* TODO: We map car here */}
        {isLoading &&
          Array(8)
            .fill(0)
            .map((_, i) => <CarCardSkeleton key={i} />)}
      </div>

      <CustomButton
        title='Show More'
        type='button'
        containerStyle='mt-12 mx-auto bg-blue-600 text-white px-6 border rounded-full dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600'
      />
    </section>
  );
}
