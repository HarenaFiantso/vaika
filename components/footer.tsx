import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div
        className='border-t bg-slate-50 dark:bg-[#0b1120] dark:border-slate-800 p-4 md:p-12 flex items-center md:justify-between flex-col md:flex-row gap-2'>
        <p className='text-sm text-gray-400'>&copy;2024 Vaika. All right reserved</p>
        <div className='flex items-center gap-2'>
          <Link href={'/'} className='text-gray-400 text-sm'>Privacy & Policy</Link>
          <Link href={'/'} className='text-gray-400 text-sm'>Terms & Condition</Link>
        </div>
      </div>
    </footer>
  )
}