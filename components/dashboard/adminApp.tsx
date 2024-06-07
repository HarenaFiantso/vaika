'use client';

import users from '@/operations/users';
import LoginPage from './loginPage';
import { authProvider } from '@/providers/authProvider';
import dataProvider from '@/providers/dataProvider';
import { Admin, Resource } from 'react-admin';
import brands from '@/operations/brands';
import cars from '@/operations/cars';

const AdminApp = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} loginPage={LoginPage} requireAuth>
    <Resource name='users' {...users} />
    <Resource name='cars' {...cars}/>
    <Resource name='brands' {...brands} />
  </Admin>
);

export default AdminApp;
