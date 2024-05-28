import { Hero } from '@/components';

export default function Home() {
  return (
    <main className='relative overflow-hidden backdrop-blur-3xl backdrop-filter dark:bg-slate-900'>
      <div className='absolute right-1/2 top-3/4 hidden h-44 w-44 rotate-12 rounded-full from-pink-500 to-purple-700 blur-3xl md:flex dark:bg-gradient-radial' />
      <div className='absolute left-1/2 top-[98%] h-44 w-44 rotate-12 rounded-2xl from-blue-500 to-violet-950 blur-3xl dark:bg-gradient-radial' />
      <div className='absolute left-1/2 top-1/2 h-72 w-72 rotate-12 rounded-2xl from-indigo-900 to-purple-700 blur-3xl dark:bg-gradient-radial' />
      <div className='absolute left-4 top-0 h-20 w-72 rotate-12 rounded-2xl from-teal-500 to-green-700 blur-3xl dark:bg-gradient-radial' />
      <div className='absolute right-0 top-[15%] h-72 w-72 rotate-12 rounded-2xl from-slate-700 to-[#343434] blur-3xl dark:bg-gradient-radial' />

      <Hero />
    </main>
  );
}
