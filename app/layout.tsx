import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import {ReactNode} from 'react';

import '@/styles/globals.css';
import {Toaster} from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Vaika',
  description: 'Generated by create next app',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
    <body className={`${poppins.className}`}>
    {children}
    <Toaster/>
    </body>
    </html>
  );
}
