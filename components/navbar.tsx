'use client';

import { CustomButton } from '@/components';
import Link from 'next/link';
import { useState } from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { RiMenu3Line } from 'react-icons/ri';

export default function Navbar() {
  const [isDropdownShown, setIsDropdownShown] = useState(false);

  return (
    <nav className='absolute left-0 right-0 z-10 w-full border-b bg-transparent p-2 dark:border-b-gray-800'>
      <div className='mx-auto flex max-w-[1440px] items-center justify-between px-2 md:px-6'>
        <Link href={'/'}>
          <span className='text-xl font-bold text-indigo-700 md:text-3xl dark:text-white'>Vaika</span>
        </Link>

        <div className='hidden items-center gap-5 text-white md:flex'>
          <Link href={'/cars'}>View all cars</Link>
          <Link href={'/'}>Contact us</Link>
          <Link href={'/'}>
            <CustomButton
              title='Login'
              type='button'
              containerStyle='bg-white rounded-full border text-blue-500 w-full rounded-full dark:bg-pink-700 dark:text-slate-300 dark:border-slate-700 dark:text-slate-300'
            />
          </Link>

          <div className='ml-4 flex items-center gap-4 border-l border-slate-600 pl-4'>
            <Link href={'https://github.com/HarenaFiantso'} className='flex  gap-2'>
              <BsGithub size={20} className='h-6 w-6 text-slate-400' />
            </Link>
            <Link href={'https://twitter.com/HarenaFiantso'} className='flex gap-2'>
              <BsTwitter size={20} className='h-6 w-6 text-slate-400' />
            </Link>
          </div>
        </div>

        <div className='flex h-full cursor-pointer items-center gap-4 object-contain md:hidden'>
          <RiMenu3Line
            size={20}
            className='flex h-full cursor-pointer items-center object-contain text-slate-400 md:hidden'
          />
        </div>

        {isDropdownShown && (
          <div className='absolute right-8 top-16 z-50 flex min-h-[270px] min-w-[290px]  flex-col gap-2 rounded-lg border bg-white/30 from-slate-700 to-slate-900 px-5 py-6 text-left shadow backdrop-blur-sm md:hidden dark:border-zinc-600 dark:bg-gradient-radial '>
            <Link href={'/'}>
              <span>Search</span>
            </Link>
            <Link href={'/'}>
              <span>AddCar</span>
            </Link>
            <Link href={'/'}>
              <CustomButton
                title='Login'
                type='button'
                containerStyle='rounded-full dark:bg-pink-700 dark:text-slate-300 text-white mt-4 px-6'
              />
            </Link>
            <div className='absolute bottom-4 flex flex-1 items-baseline gap-2'>
              <Link href={'https://github.com/HarenaFiantso'} className='mr-4 flex gap-2'>
                <BsGithub size={20} className='h-6 w-6 text-slate-50' />
                <span>Github</span>
              </Link>
              <Link
                href={'https://twitter.com/HarenaFiantso'}
                className='flex gap-2 border-l pl-4 dark:border-zinc-500'
              >
                <BsTwitter size={20} className='h-6 w-6 text-slate-50' />
                <span>Twitter</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
