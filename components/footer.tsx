import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className='flex flex-col items-center gap-2 border-t bg-slate-50 p-4 dark:border-slate-800 dark:bg-[#0b1120] md:flex-row md:justify-between md:p-12'>
        <p className='text-sm text-gray-400'>&copy;2024 Vaika. All right reserved</p>
        <div className='flex items-center gap-2'>
          <Link href={'/'} className='text-sm text-gray-400'>
            Privacy & Policy
          </Link>
          <Link href={'/'} className='text-sm text-gray-400'>
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
}
