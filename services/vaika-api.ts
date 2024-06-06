import { AppointmentApi, BrandApi, CarApi, SecurityApi, UserApi } from '@vaika-api/typescript-client';
import { AxiosResponse } from 'axios';

import { getCachedConfiguration } from '@/utils/utils';

//APIs are created by the client from OpenAPI tags
//A "User" tag in the spec creates a UserApi class
export const securityApi = new SecurityApi(getCachedConfiguration());
export const carApi = new CarApi(getCachedConfiguration());
export const userApi = new UserApi(getCachedConfiguration());
export const brandApi = new BrandApi(getCachedConfiguration());
export const appointmentApi = new AppointmentApi(getCachedConfiguration());

/* Unwrap responses, by default, API responses are wrapped like AxiosReponse<T> */
/* unwrap() extracts the T object */
/* T can be User or Car etc... Based on the endpoint's response types */
export type UnwrapResult<TReturn extends () => Promise<AxiosResponse<any>>> = TReturn extends () => Promise<
  AxiosResponse<infer Res>
>
  ? Res
  : never;

export const unwrap = async <Fn extends () => Promise<AxiosResponse<any>>>(execute: Fn): Promise<UnwrapResult<Fn>> => {
  const _ = await execute();
  return _.data;
};
