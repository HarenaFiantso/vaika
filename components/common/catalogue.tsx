'use client';

import { Car } from '@vaika-api/typescript-client';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { updateSearchParams } from '@/utils/utils';

import CarCard from '@/components/common/carCard';
import CarCardSkeleton from '@/components/common/carCardSkeleton';
import Filter from '@/components/common/filter';
import SearchBar from '@/components/common/searchBar';
import { Button } from '@/components/ui/button';

type CatalogueProps = {
  allCars: Car[];
  isLoading: boolean;
  size: number;
};

export default function Catalogue({ allCars, isLoading, size }: CatalogueProps) {
  const router: AppRouterInstance = useRouter();
  const [searchBrand, setSearchBrand] = useState('');
  const [searchModel, setSearchModel] = useState('');
  const [filteredCars, setFilteredCars] = useState<Car[]>(allCars);

  useEffect(() => {
    const result = allCars.filter(
      (car) =>
        car?.brand?.name?.toLowerCase().includes(searchBrand.toLowerCase()) &&
        car?.model?.toLowerCase().includes(searchModel.toLowerCase())
    );
    setFilteredCars(result);
  }, [searchBrand, searchModel, allCars]);

  const handleClick = (): void => {
    const newSize: number = ((size || 10) + 1) * 10;
    const pathname: string = updateSearchParams('size', `${newSize}`);
    router.push(pathname);
  };
  return (
    <section id='explore' className='relative mx-auto mt-12 flex w-full max-w-[1440px] flex-col p-4 md:p-16'>
      <h1 className='text-4xl font-bold text-zinc-900'>Car Catalogue</h1>
      <p className='mt-2 text-sm text-zinc-400'>Explore out cars you might like</p>
      <div className='mt-6 flex w-full flex-col items-center justify-center gap-2 md:flex-row md:justify-between'>
        <SearchBar setSearchBrand={setSearchBrand} setSearchModel={setSearchModel} />
        <Filter />
      </div>

      <div className='mt-12 flex items-center justify-between'>
        <h2 className='text-left text-lg font-bold dark:text-indigo-400 md:text-2xl'>Recommended cars</h2>
        <Link href={'/cars'} className='capitalize text-zinc-600 underline dark:text-indigo-400'>
          view all
        </Link>
      </div>
      <div className='mt-6 grid grid-cols-4 gap-2'>
        {filteredCars?.length === 0 && !isLoading ? (
          <h1 className='text-center'>No cars found...</h1>
        ) : (
          filteredCars?.slice(0, 6).map((car: Car, i: number) => <CarCard key={i} car={car} />)
        )}
        {isLoading &&
          Array(6)
            .fill(0)
            .map((_, i: number) => <CarCardSkeleton key={i} />)}
      </div>

      <Button className='mx-auto mt-10 w-max px-10 py-7' onClick={() => router.push('/cars')}>
        Show more
      </Button>
    </section>
  );
}
