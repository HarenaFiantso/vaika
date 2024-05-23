import Link from 'next/link';
import { ReactNode } from 'react';

export default function Navbar(): ReactNode {
  return (
    <header className='sticky top-0 w-full border-b-2'>
      <nav className='mx-auto flex max-w-[1536px] items-center justify-between gap-5 py-5'>
        <Link
          href={'/home'}
          className='flex-2 border-r-2 px-5 text-[30px] font-semibold tracking-wider text-[#E83657] '
        >
          Vaika
        </Link>

        {/* TODO: Map using constants */}
        <ul className='flex flex-1 gap-10'>
          <li className='text-[#332E69]'>
            <Link href=''>Find your car</Link>
          </li>
          <li className='text-[#332E69]'>
            <Link href=''>Sell or trade in</Link>
          </li>
          <li className='text-[#332E69]'>
            <Link href=''>How it works</Link>
          </li>
          <li className='text-[#332E69]'>
            <Link href=''>Car Finance</Link>
          </li>
        </ul>

        {/* TODO: Use shadcn button */}
        <button  className='rounded-full border-2 border-[#E83657] px-10 py-2 text-[#E83657]'>Sign In</button>
      </nav>
    </header>
  );
}
