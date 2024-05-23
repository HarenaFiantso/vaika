'use client';

import { CarFront, CircleDollarSign, Search, TrainTrack } from 'lucide-react';
import { useParams } from 'next/navigation';
import React from 'react';

import AccordionComponent from '@/components/accordion';

import CarsBrandList from '../carList';

export default function BrandPage() {
  const { brand } = useParams();
  return (
    <div className='h-[85vh] w-full bg-gray-100'>
      <div className='flex h-[100%] w-full justify-evenly p-6'>
        <div className='h-[max-content] w-[25%] rounded-md bg-white p-4'>
          <h1 className='font-bold'>Filter</h1>
          <AccordionComponent icon={<Search size={15} />} title='Keyword' content='search by keyword' />
          <AccordionComponent icon={<CircleDollarSign size={15} />} title='Price' content='search by price' />
          <AccordionComponent icon={<TrainTrack size={15} />} title='Kilometers' content='idk' />
          <AccordionComponent icon={<CarFront size={15} />} title="Motor's type" content='idk' />
        </div>
        <CarsBrandList brands={brand} />
      </div>
    </div>
  );
}
