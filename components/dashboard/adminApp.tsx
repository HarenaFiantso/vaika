'use client'

import {Admin, Resource} from "react-admin";
import {authProvider, dataProvider} from "@/providers";
import {brands, cars, users} from "@/operations";
import Login from "@/components/dashboard/login";

export default function AdminApp() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider} loginPage={Login} requireAuth>
      <Resource name='users' {...users} />
      <Resource name='cars' {...cars} />
      <Resource name='brands' {...brands} />
    </Admin>
  )
}
