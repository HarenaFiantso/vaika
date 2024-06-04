export default function CarCardInfoSkeleton() {
    return (
      <div className='group  w-[100%] max-w-lg animate-pulse bg-white from-slate-700 to-slate-900   p-3 transition-all duration-150 ease-linear md:p-4 dark:border-zinc-600 dark:bg-gradient-radial dark:text-slate-300'>
        <div className='flex items-center justify-between'>
          <h1 className='h-3 w-28 max-w-[75%] truncate bg-gray-400 text-lg font-bold capitalize md:text-xl dark:bg-slate-900'></h1>
        </div>
        <p className='mt-1 h-3 w-24 bg-gray-400 capitalize text-gray-400 dark:bg-slate-900'></p>
  
        <div className='relative mt-2 h-[40vh] w-full'>
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
            <div className='relative h-[2vh] w-full bg-gray-400 dark:bg-slate-900 '></div>
          </div>
          <div className='mt-2 flex items-center justify-between'>
            <div className='relative h-[2vh] w-full bg-gray-400 dark:bg-slate-900 '></div>
          </div>
          <div className='mt-2 flex items-center justify-between'>
            <div className='relative h-[2vh] w-full bg-gray-400 dark:bg-slate-900 '></div>
          </div>
        </div>
      </div>
    );
  }
  