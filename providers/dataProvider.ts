import { VaikaDataProvider } from './VaikaDataProvider';
import { carProvider } from './carProvider';
import { userProvider } from './userProvider';
import { brandProvider } from '@/providers/brandProvider';
import {
  DeleteManyParams,
  DeleteManyResult,
  GetManyParams,
  GetManyReferenceParams,
  GetManyReferenceResult,
  GetManyResult,
  Identifier,
  DataProvider as RaDataProvider,
  RaRecord,
  UpdateManyParams,
  UpdateManyResult,
} from 'react-admin';

export const MAX_ITEM_PER_PAGE = 50;

const getProvider = (resourceType: string): VaikaDataProvider => {
  if (resourceType === 'users') return userProvider;
  if (resourceType === 'brands') return brandProvider;
  if (resourceType === 'cars') return carProvider;

  throw new Error('Unexpected resourceType: ' + resourceType);
};

const dataProvider: RaDataProvider = {
  async getList(resourceType: string, params: any) {
    const pagination = params.pagination;
    const meta = params.meta;
    const page = pagination.page > 0 ? pagination : 0;
    let perPage = pagination.perPage;
    if (perPage > MAX_ITEM_PER_PAGE) {
      console.warn(
        `Page size is too big, truncating to MAX_ITEM_PER_PAGE=${MAX_ITEM_PER_PAGE}: resourceType=${resourceType}, requested pageSize=${perPage}`
      );
      perPage = MAX_ITEM_PER_PAGE;
    }
    const filter = params.filter;
    const result = await getProvider(resourceType).getList(page, perPage, filter, meta);
    return { data: result, pageInfo: { hasNextPage: true, hasPreviousPage: true } };
  },
  async getOne(resourceType: string, params: any) {
    const result = await getProvider(resourceType).getOne(params.id, params.meta);
    return { data: result };
  },
  async update(resourceType: string, params: any) {
    const result = await getProvider(resourceType).saveOrUpdate([params.data], {
      isUpdate: true,
    });
    return { data: result[0] };
  },
  async create(resourceType: string, params: any) {
    const result = await getProvider(resourceType).saveOrUpdate(params.data);
    return { data: result[0] };
  },
  async delete(resourceType: string, params: any) {
    const result = await getProvider(resourceType).delete(params.id);
    return { data: result };
  },
  getMany: function <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: GetManyParams
  ): Promise<GetManyResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  getManyReference: function <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: GetManyReferenceParams
  ): Promise<GetManyReferenceResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  updateMany: function <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: UpdateManyParams<any>
  ): Promise<UpdateManyResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  deleteMany: function <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: DeleteManyParams<RecordType>
  ): Promise<DeleteManyResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
};

export default dataProvider;
