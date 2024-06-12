export default function CarCardSkeleton() {
  return (
    <div className='dark:bg-gradient-radial group h-fit w-full max-w-lg animate-pulse rounded-2xl border bg-white from-slate-700 to-slate-900 p-3 transition-all duration-700 ease-linear dark:border-zinc-600 dark:text-slate-300 md:p-4 md:hover:border md:hover:shadow-lg'>
      <div className='flex items-center justify-between'>
        <h1 className='h-3 w-28 max-w-[75%] truncate bg-gray-400 text-lg font-bold capitalize dark:bg-slate-900 md:text-xl'></h1>
        <div className='h-[30px] w-[30px] rounded-full bg-gray-400 dark:bg-slate-900'></div>
      </div>
      <p className='mt-1 h-3 w-24 bg-gray-400 capitalize text-gray-400 dark:bg-slate-900'></p>

      <div className='relative mt-2 h-40 w-full'>
        <div className='h-full w-full rounded bg-gray-400 dark:bg-slate-900'></div>
      </div>
      <div className='mt-2 h-fit w-full p-2'>
        <div className='flex w-full items-center justify-between gap-4'>
          <div className='flex w-full max-w-xs items-center justify-center gap-2'>
            <span className='h-3 w-full bg-gray-400 text-sm text-gray-400 dark:bg-slate-900'></span>
          </div>
          <div className='flex w-full max-w-xs items-center justify-center gap-2'>
            <span className='h-3 w-full bg-gray-400 text-sm text-gray-400 dark:bg-slate-900'></span>
          </div>
          <div className='flex w-full max-w-xs items-center justify-center gap-2'>
            <span className='h-3 w-full bg-gray-400 text-sm text-gray-400 dark:bg-slate-900'></span>
          </div>
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <div className='relative h-3 w-12 bg-gray-400 dark:bg-slate-900'></div>
          <div className='h-10 w-32 rounded-full bg-gray-400 dark:bg-slate-900'></div>
        </div>
      </div>
    </div>
  );
}
