'use client';

import { brandApi } from '@/services/vaika-api';
import { Brand } from '@vaika-api/typescript-client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Brands() {
  const [brands, setBrands] = useState<Brand[] | any>([]);
  const router = useRouter();

  useEffect(() => {
    brandApi.getBrands().then((response) => setBrands(response.data));
  }, []);
  return (
    <section className='w-full'>
      <div className='mx-auto max-w-[1330px] pb-[10rem] text-black dark:text-white'>
        <h1 className='pb-5 text-center text-2xl font-bold'>Top brands</h1>
        <p className='pb-10 text-center text-zinc-400'>Here are our top brands</p>
        {brands.length > 0 ? (
          <ul className='flex flex-row justify-around gap-2'>
            {brands.map((brand: Brand) => (
              <li
                onClick={() => router.push(`/brand/${brand.id}`)}
                key={brand.id}
                className='w-full cursor-pointer rounded bg-zinc-300 py-5 text-center text-xl font-semibold text-zinc-900'
                data-aos='fade-up'
              >
                {brand.name}
              </li>
            ))}
          </ul>
        ) : (
          <h1 className='text-center'>No brands found</h1>
        )}
      </div>
    </section>
  );
}
