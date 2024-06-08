import { VaikaDataProvider } from './VaikaDataProvider';
import { brandApi, carApi, unwrap } from '@/services/vaika-api';

export const carProvider: VaikaDataProvider = {
  getList: async function (page?: number | undefined, perPage?: number | undefined, filter?: any, meta?: any) {
    const cars = await unwrap(() => carApi.getCars(page, perPage));
    return cars;
  },
  getOne: async function (id: string, meta?: any) {
    return await unwrap(() => carApi.getACarById(id));
  },
  saveOrUpdate: async function (resources: any, meta?: any) {
    return await unwrap(() => carApi.crupdateCars(resources));
  },
  delete: function (id: string): Promise<any> {
    return unwrap(() => carApi.deleteACarById(id));
  },
};
