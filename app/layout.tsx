import { Navbar } from '@/components';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';

import '../styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Vaika',
  description: 'An application that allow to manage car store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} app dark:bg-[#0b1120 bg-slate-50`}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
