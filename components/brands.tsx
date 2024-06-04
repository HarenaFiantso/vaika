'use client';

import { brandApi } from '@/services/vaika-api';
import { Brand } from '@vaika-api/typescript-client';
import { useEffect, useState } from 'react';

export default function Brands() {
  const [brands, setBrands] = useState<Brand[] | any>([]);

  useEffect(() => {
    brandApi.getBrands().then((response) => setBrands(response.data));
  }, []);

  return (
    <section className='w-full'>
      <div className='mx-auto max-w-[1330px] text-black dark:text-white'>
        {brands.length > 0 ? (
          <ul className='flex flex-row justify-around'>
            {brands.map((brand: Brand) => (
              <li
                key={brand.id}
                className='cursor-pointer rounded-lg bg-slate-800 px-5 py-2 text-xl font-semibold text-white'
              >
                {brand.name}
              </li>
            ))}
          </ul>
        ) : (
          <h1>No brands found</h1>
        )}
      </div>
    </section>
  );
}
