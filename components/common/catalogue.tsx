import { Car } from '@vaika-api/typescript-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import CarCard from '@/components/common/carCard';
import CarCardSkeleton from '@/components/common/carCardSkeleton';
import Filter from '@/components/common/filter';
import SearchBar from '@/components/common/searchBar';
import { Button } from '@/components/ui/button';

type CatalogueProps = {
  allCars: Car[] | null;
  isLoading: boolean;
};

export default function Catalogue({ allCars, isLoading }: CatalogueProps) {
  const router = useRouter();
  return (
    <section id='explore' className='relative mx-auto mt-12 flex w-full max-w-[1440px] flex-col p-4 md:p-16'>
      <h1 className='text-4xl font-bold text-zinc-900'>Car Catalogue</h1>
      <p className='mt-2 text-sm text-zinc-400'>Explore out cars you might like</p>
      <div className='mt-6 flex w-full flex-col items-center justify-center gap-2 md:flex-row md:justify-between'>
        <SearchBar
          setSearchBrand={() => console.log('search brand')}
          setSearchModel={() => console.log('search model')}
        />
        <Filter />
      </div>

      <div className='mt-12 flex items-center justify-between'>
        <h2 className='text-left text-lg font-bold dark:text-indigo-400 md:text-2xl'>Recommended cars</h2>
        <Link href={'/cars'} className='capitalize text-zinc-600 underline dark:text-indigo-400'>
          view all
        </Link>
      </div>
      <div className='mt-6 grid grid-cols-4 gap-2'>
        {allCars?.length === 0 && !isLoading ? (
          <h1 className='text-center'>No cars found...</h1>
        ) : (
          allCars?.slice(0, 6).map((car: Car, i: number) => <CarCard key={i} car={car} />)
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
