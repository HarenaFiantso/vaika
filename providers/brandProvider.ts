import { TVaikaDataProvider } from '@/lib/type';
import { brandApi, unwrap } from '@/services/vaika-api';

export const brandProvider: TVaikaDataProvider = {
  getList: async function (page, perPage) {
    return await unwrap(() => brandApi.getBrands(page, perPage));
  },
  getOne: async function (id: string, meta?: any) {
    return new Error('Function not implemented');
  },
  saveOrUpdate: async function (resources: any, meta?: any) {
    return new Error('Function not implemented');
  },
  delete: function (id: string): Promise<any> {
    throw new Error('Function not implemented.');
  },
};
