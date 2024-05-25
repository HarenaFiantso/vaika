import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const AdminApp = dynamic(() => import('@/components/dashboard/AdminApp'), { ssr: false });

const Admin: NextPage = () => {
  return <AdminApp />;
};

export default Admin;
