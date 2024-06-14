'use client';

import { brands, cars, users } from '@/operations';
import appointments from '@/operations/appointment';
import { authProvider, dataProvider } from '@/providers';
import { BrandingWatermark, CarCrashTwoTone } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
import { Admin, ListGuesser, Resource } from 'react-admin';
import { FaUser } from 'react-icons/fa';

import Login from '@/components/dashboard/login';

export const mainTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#202020',
    },
    secondary: {
      main: '#020617',
    },
    text: {
      primary: '#323333',
      secondary: '#404040',
    },
    background: {
      default: '#fafbfc',
      paper: '#e7eef9',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    body1: {
      color: '#323333',
    },
    subtitle1: {
      color: '#404040',
    },
  },
});

export default function AdminApp() {
  return (
    <Admin
      title='Vaika Dashboard'
      theme={mainTheme}
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={Login}
      requireAuth
    >
      <Resource icon={FaUser} name='users' {...users} />
      <Resource icon={CarCrashTwoTone} name='cars' {...cars} />
      <Resource name='appointments' {...appointments} />
      <Resource icon={BrandingWatermark} name='brands' {...brands} recordRepresentation='name' />
      <Resource name='car-types' list={ListGuesser} recordRepresentation='name' />
    </Admin>
  );
}
