import { TVaikaDataProvider } from '@/lib/type';
import { carTypeApi, unwrap } from '@/services/vaika-api';

export const carTypeProvider: TVaikaDataProvider = {
  getList: async function (page, perPage, filter, meta) {
    return await unwrap(() => carTypeApi.getAllCarTypePaginate(page, perPage));
  },
  getOne: function (id: string, meta?: any): Promise<any> {
    throw new Error('Function not implemented.');
  },
  saveOrUpdate: function (resources: any, meta?: any): Promise<any> {
    throw new Error('Function not implemented.');
  },
  delete: function (id: string): Promise<any> {
    throw new Error('Function not implemented.');
  },
};
