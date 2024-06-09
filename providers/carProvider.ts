import { TVaikaDataProvider } from '@/lib/type';
import { carApi, unwrap } from '@/services/vaika-api';
import { CrupdateCar } from '@vaika-api/typescript-client';

export const carProvider: TVaikaDataProvider = {
  getList: async function (page?: number | undefined, perPage?: number | undefined, filter?: any, meta?: any) {
    return await unwrap(() => carApi.getCars(page, perPage));
  },
  getOne: async function (id: string, meta?: any) {
    return await unwrap(() => carApi.getACarById(id));
  },
  saveOrUpdate: async function (resources: CrupdateCar[]) {
    return await unwrap(() => carApi.crupdateCars(resources));
  },
  delete: function (id: string) {
    return unwrap(() => carApi.deleteACarById(id));
  },
};
