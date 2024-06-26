export type VaikaDataProvider = {
  getList: (page?: number, perPage?: number, filter?: any, meta?: any) => Promise<Array<any>>;
  getOne: (id: string, meta?: any) => Promise<any>;
  saveOrUpdate: (resources: any, meta?: any) => Promise<any>;
  delete: (id: string) => Promise<any>;
};
