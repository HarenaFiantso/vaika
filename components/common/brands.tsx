'use client';

import { brandApi } from '@/services/vaika-api';
import { Brand } from '@vaika-api/typescript-client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Brands() {
  const [brands, setBrands] = useState<Brand[] | any>([]);
  const router = useRouter();

  useEffect(() => {
    brandApi.getBrands().then((response) => setBrands(response.data));
  }, []);
  return (
    <section className="w-full">
      <div className="mx-auto pb-[10rem] max-w-[1330px] text-black dark:text-white">
        <h1 className="text-2xl pb-5 font-bold text-center">Top brands</h1>
        <p className="text-center pb-10 text-zinc-400">Here are our top brands</p>
        {brands.length > 0 ? (
          <ul className="flex flex-row justify-around gap-2">
            {brands.map((brand: Brand) => (
              <li
                onClick={() => router.push(`/brand/${brand.id}`)}
                key={brand.id}
                className="cursor-pointer text-center w-full rounded bg-zinc-300 py-5 text-xl font-semibold text-zinc-900"
                data-aos="fade-up"
              >
                {brand.name}
              </li>
            ))}
          </ul>
        ) : (
          <h1 className="text-center">No brands found</h1>
        )}
      </div>
    </section>
  );
}
