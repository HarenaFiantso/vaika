'use client';

import { LoginOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

const navLinks = [
  {
    href: '/home',
    label: 'Home',
  },
  {
    href: '#about',
    label: 'About',
  },
  {
    href: '#contact',
    label: 'Contact us',
  },
  {
    href: '/cars',
    label: 'View all cars',
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className='flex items-center justify-around border-b px-4 py-4'>
      <Link href={'/home'} className='flex items-center gap-2 text-4xl font-bold'>
        Vaika
      </Link>

      <nav>
        <ul className='flex gap-x-10 text-[16px]'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`${
                  pathname === link.href ? 'font-semibold text-zinc-900' : 'text-zinc-400'
                } transition-all hover:text-zinc-900`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Button onClick={() => router.push('/admin')} className='flex gap-x-5 rounded-full px-10 py-7 text-[16px]'>
        <LoginOutlined /> Login
      </Button>
    </header>
  );
}
