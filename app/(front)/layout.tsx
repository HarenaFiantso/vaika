import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="bg-[#0b1120]">
      <h1>Navbar</h1>
      {children}
      <h1>Footer</h1>
    </main>
  );
}