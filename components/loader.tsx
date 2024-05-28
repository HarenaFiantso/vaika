import Image from 'next/image';

export default function Loader() {
  return (
    <Image src={'/icons/loading.svg'} width={20} height={20} className='animate-spin object-contain' alt='loader' />
  );
}
