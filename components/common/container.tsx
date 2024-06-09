import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return <div className='mx-auto flex min-h-screen max-w-[1736px] flex-col justify-between bg-white'>{children}</div>;
}
