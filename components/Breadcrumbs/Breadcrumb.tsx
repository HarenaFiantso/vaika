import Link from 'next/link';

interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className='mb-6 flex flex-col gap-3 bg-[#0b1120] sm:flex-row sm:items-center sm:justify-between'>
      <h2 className='text-title-md2 font-semibold text-white'>{pageName}</h2>

      <nav>
        <ol className='flex items-center gap-2'>
          <li>
            <Link className='font-medium text-white' href='/admin'>
              Admin /
            </Link>
          </li>
          <li className='font-medium text-primary text-white'>{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
