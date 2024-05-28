import Image from 'next/image';

export default function SearchBar() {
  return (
    <form className='flex w-full max-w-3xl flex-col items-center justify-center gap-2 rounded border bg-white  px-2 md:flex-row dark:border-slate-700 dark:bg-slate-800'>
      <div className='relative flex w-full items-center px-4 py-2.5 md:border-r dark:border-slate-700 '>
        <Image src={'/icons/car-logo.svg'} alt='car company logo' width={20} height={20} className='object-contain' />
        <input
          type='text'
          placeholder='Search a brand...'
          className='flex-1 bg-transparent pl-4 text-xs text-gray-400 outline-none'
        />

        <button type='submit'>
          <Image
            src={'/icons/search.svg'}
            alt='magnifying glass'
            width={20}
            height={20}
            className='flex object-contain md:hidden'
          />
        </button>
      </div>
      <div className='flex w-full items-center px-4 py-2.5 '>
        <Image src={'/images/model-icon.png'} alt='model icon' width={20} height={20} className='object-contain' />
        <input
          type='text'
          placeholder='Search a model...'
          className='flex-1 bg-transparent pl-4 text-xs text-gray-400 outline-none'
        />
        <button type='submit'>
          <Image
            src={'/icons/search.svg'}
            alt='magnifying glass'
            width={20}
            height={20}
            className='flex object-contain md:hidden'
          />
        </button>
      </div>
      <button type='submit'>
        <Image
          src={'/icons/search.svg'}
          alt='search'
          width={30}
          height={30}
          className='hidden object-contain md:flex'
        />
      </button>
    </form>
  );
}