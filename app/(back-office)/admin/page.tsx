import dynamic from 'next/dynamic';

const AdminApp = dynamic(() => import('@/components/dashboard/adminApp'), { ssr: false });

export default function Admin() {
  return <AdminApp />;
}
