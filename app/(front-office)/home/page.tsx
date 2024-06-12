'use client';

import Brands from '@/components/common/brands';
import Hero from '@/components/common/hero';
import { carApi } from '@/services/vaika-api';
import { useEffect, useState } from 'react';
import { Car } from '@vaika-api/typescript-client';
import Catalogue from '@/components/common/catalogue';

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allCars, setAllCars] = useState<Car[] | any>([]);

  useEffect((): void => {
    setIsLoading(true);
    carApi.getCars().then((data) => setAllCars(data.data));
    setIsLoading(false);
  }, []);

  return (
    <main>
      <Hero />
      <Brands />
      {allCars && <Catalogue allCars={allCars} isLoading={isLoading} />}
    </main>
  );
}
