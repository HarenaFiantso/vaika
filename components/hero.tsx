import Image from 'next/image';
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

export default function Hero(): ReactNode {
  return (
    <section className="hero-pattern w-full h-[875px]">
      <div className="max-w-[1080px] m-auto h-full flex flex-col gap-10 items-center justify-center">
        <h1 className="text-5xl font-semibold">Find the car that searching for you.</h1>
        <div>
          <Button className="bg-[#E83657]">Button</Button>
        </div>
      </div>
    </section>
  )
}
