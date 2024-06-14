import { TVaikaDataProvider } from '@/lib/type';
import { motorTypeApi, unwrap } from '@/services/vaika-api';

export const motorTypeProvider: TVaikaDataProvider = {
  getList: async function (page, perPage, filter, meta) {
    return await unwrap(() => motorTypeApi.getAllMotorTypePaginate(page, perPage));
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
