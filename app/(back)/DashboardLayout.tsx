import { Layout, LayoutProps } from 'react-admin';

import Navbar from '@/components/navbar';

export const DashboardLayout = (props: LayoutProps) => <Layout {...props} appBar={Navbar} />;
