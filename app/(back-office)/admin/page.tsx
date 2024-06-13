import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const AdminApp = dynamic(() => import('@/components/dashboard/adminApp'), { ssr: false });

export default function Admin() {
  return (
    <Suspense fallback='Loading...'>
      <AdminApp />
    </Suspense>
  );
}
