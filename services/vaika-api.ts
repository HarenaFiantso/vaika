import { getCachedConfiguration } from '@/lib/utils';
import { AppointmentApi, BrandApi, CarApi, CarTypeApi, SecurityApi, UserApi } from '@vaika-api/typescript-client';
import { AxiosResponse } from 'axios';

export const securityApi = new SecurityApi(getCachedConfiguration());
export const carApi = new CarApi(getCachedConfiguration());
export const userApi = new UserApi(getCachedConfiguration());
export const brandApi = new BrandApi(getCachedConfiguration());
export const appointmentApi = new AppointmentApi(getCachedConfiguration());
export const carTypeApi = new CarTypeApi(getCachedConfiguration());

export type UnwrapResult<TReturn extends () => Promise<AxiosResponse<any>>> = TReturn extends () => Promise<
  AxiosResponse<infer Res>
>
  ? Res
  : never;

export const unwrap = async <Fn extends () => Promise<AxiosResponse<any>>>(execute: Fn): Promise<UnwrapResult<Fn>> => {
  const _ = await execute();
  return _.data;
};
