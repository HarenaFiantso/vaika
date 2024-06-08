import { VaikaDataProvider } from './VaikaDataProvider';
import { brandApi, carApi, unwrap } from '@/services/vaika-api';
import { CrupdateCar } from '@vaika-api/typescript-client';

export const carProvider: VaikaDataProvider = {
  getList: async function (page?: number | undefined, perPage?: number | undefined, filter?: any, meta?: any) {
    const cars = await unwrap(() => carApi.getCars(page, perPage));
    return cars;
  },
  getOne: async function (id: string, meta?: any) {
    return await unwrap(() => carApi.getACarById(id));
  },
  saveOrUpdate: async function (resources: CrupdateCar[]) {
    return await unwrap(() => carApi.crupdateCars(resources));
  },
  delete: function (id: string): Promise<any> {
    return unwrap(() => carApi.deleteACarById(id));
  },
};
