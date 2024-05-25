'use client';

import jsonServerProvider from 'ra-data-json-server';
import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';

import { DashboardLayout } from '@/app/(back)/DashboardLayout';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminApp = () => (
  <Admin dataProvider={dataProvider} layout={DashboardLayout}>
    <Resource name='users' list={ListGuesser} edit={EditGuesser} recordRepresentation='name' />
    <Resource name='posts' list={ListGuesser} edit={EditGuesser} recordRepresentation='title' />
    <Resource name='comments' list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default AdminApp;
