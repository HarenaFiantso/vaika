'use client'

import { useEffect, useState } from 'react';
import { Brand } from '@vaika-api/typescript-client';
import { brandApi } from '@/services/vaika-api';

export default function Brands() {
  const [brands, setBrands] = useState<Brand[] | any>([]);

  useEffect(() => {
    brandApi.getBrands().then(response => setBrands(response.data))
  }, []);

  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto dark:text-white text-black">
        {brands.length > 0? (
          <ul className="flex flex-row justify-around">
            {brands.map((brand: Brand) => (
              <li key={brand.id} className="px-5 py-2 text-xl font-semibold text-white bg-slate-800 rounded-lg">{brand.name}</li>
            ))}
          </ul>
        ) : (
          <h1>No brands found</h1>
        )}
      </div>
    </section>
  );
}
