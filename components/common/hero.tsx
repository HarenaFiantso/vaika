import { ReactNode } from 'react';

export default function Hero(): ReactNode {
  return (
    <section className="hero-pattern w-full h-[875px]">
      <div className="max-w-[1536px] m-auto h-full flex flex-col gap-10 items-start justify-center">
        <h1 className="text-8xl font-semibold">Find the car that <br /> searching for you.</h1>
        <button
          className="bg-[#E83657] w-[500px] rounded-lg text-lg py-5 px-10 hover:bg-white hover:text-black transition-all">Button
        </button>
      </div>
    </section>
  );
}
