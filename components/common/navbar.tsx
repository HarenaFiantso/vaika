import Link from 'next/link';
import { ReactNode } from 'react';
import { CircleUserIcon } from 'lucide-react';
import { Menu } from '@mui/icons-material';

export default function Navbar(): ReactNode {
  return (
    <header className='fixed top-0 w-full backdrop-blur-lg'>
      <nav className='mx-auto flex max-w-[1536px] items-center justify-between gap-5 py-5'>
        <Link
          href={'/home'}
          className='flex-2 px-5 text-[30px] font-semibold tracking-wider text-[#E83657] '
        >
          Vaika
        </Link>

        {/* TODO: Map using constants */}
        <ul className='flex flex-1 gap-10'>
          <li className='text-white'>
            <Link href=''>Find your car</Link>
          </li>
          <li className='text-white'>
            <Link href=''>Sell or trade in</Link>
          </li>
          <li className='text-white'>
            <Link href=''>How it works</Link>
          </li>
          <li className='text-white'>
            <Link href=''>Car Finance</Link>
          </li>
        </ul>

        {/* TODO: Use shadcn button */}
        <button className='rounded-full flex gap-2 border-2 border-[#E83657] px-5 py-2 text-[#E83657]'>
          <Menu className="text-white" /> <CircleUserIcon/>
        </button>
      </nav>
    </header>
  );
}
