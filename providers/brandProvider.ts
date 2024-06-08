import { VaikaDataProvider } from './VaikaDataProvider';
import { brandApi, unwrap } from '@/services/vaika-api';

export const brandProvider: VaikaDataProvider = {
  getList: async function (page?: number | undefined, perPage?: number | undefined, filter?: any, meta?: any) {
    const brands = await unwrap(() => brandApi.getBrands(page, perPage));
    return brands;
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
