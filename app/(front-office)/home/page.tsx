'use client';

import { carApi } from '@/services/vaika-api';
import { Car } from '@vaika-api/typescript-client';
import { useEffect, useState } from 'react';

import Brands from '@/components/common/brands';
import Catalogue from '@/components/common/catalogue';
import Hero from '@/components/common/hero';
import Aos from 'aos';

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allCars, setAllCars] = useState<Car[] | any>([]);

  useEffect((): void => {
    setIsLoading(true);
    Aos.init({
      offset: 100,
    });
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
