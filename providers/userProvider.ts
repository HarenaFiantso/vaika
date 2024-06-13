import { TVaikaDataProvider } from '@/lib/type';
import { unwrap, userApi } from '@/services/vaika-api';

export const userProvider: TVaikaDataProvider = {
  getList: async function (page?: number | undefined, perPage?: number | undefined, filter?: any, meta?: any) {
    return await unwrap(() => userApi.getUsers(page, perPage));
  },
  getOne: async function (id: string, meta?: any) {
    return await unwrap(() => userApi.getUserById(id));
  },
  saveOrUpdate: async function (resources: any, meta?: any) {
    return await unwrap(() => userApi.crupdateUsers(resources));
  },
  delete: function (id: string): Promise<any> {
    throw new Error('Function not implemented.');
  },
};
