'use client';

import { brandApi } from '@/services/vaika-api';
import { Brand } from '@vaika-api/typescript-client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Brands() {
  const [brands, setBrands] = useState<Brand[] | any>([]);
  const router = useRouter();

  useEffect(() => {
    brandApi.getBrands().then((response) => setBrands(response.data));
  }, []);

  return (
    <section className='w-full'>
      <div className='mx-auto max-w-[1330px] text-black dark:text-white'>
        {brands.length > 0 ? (
          <ul className='flex flex-row flex-wrap justify-around gap-2'>
            {brands.map((brand: Brand) => (
              <div>
                <li
                onClick={() => router.push(`/brand/${brand.id}`)}
                key={brand.id}
                className='cursor-pointer rounded-lg bg-slate-800 px-5 py-2 text-xl font-semibold text-white'
              >
                {brand.name}
              </li>
              </div>
            ))}
          </ul>
        ) : (
          <h1>No brands found</h1>
        )}
      </div>
    </section>
  );
}
