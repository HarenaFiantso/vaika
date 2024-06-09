'use client';

import { brands, cars, users } from '@/operations';
import { authProvider, dataProvider } from '@/providers';
import { BrandingWatermark, CarCrashOutlined } from '@mui/icons-material';
import { createTheme } from '@mui/system';
import { Admin, Resource } from 'react-admin';
import { FaUser } from 'react-icons/fa';

import Login from '@/components/dashboard/login';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#000000',
    },
  },
});

export default function AdminApp() {
  return (
    <Admin
      title='Vaika Dashboard'
      theme={theme}
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={Login}
      requireAuth
    >
      <Resource icon={FaUser} name='users' {...users} />
      <Resource icon={CarCrashOutlined} name='cars' {...cars} />
      <Resource icon={BrandingWatermark} name='brands' {...brands} />
    </Admin>
  );
}
