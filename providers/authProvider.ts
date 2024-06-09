import { authTokenCache } from '@/lib/cache';
import { securityApi, unwrap } from '@/services/vaika-api';
import { AuthProvider } from 'react-admin';

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    const loginRes = await unwrap(() => securityApi.login({ email: email, password: password }));
    authTokenCache.replace(loginRes);
    return Promise.resolve();
  },
  logout: () => {
    authTokenCache.invalidate();
    return Promise.resolve();
  },
  checkAuth: () => {
    return authTokenCache.isPresent() ? Promise.resolve() : Promise.reject();
  },
  checkError: function (error) {
    const status = error.status;
    if (status === 401 || status === 403) {
      authTokenCache.invalidate();
      return Promise.reject({ message: 'Authentication failed' });
    }
    return Promise.resolve();
  },
  getPermissions: function (params: any): Promise<any> {
    throw new Error('Function not implemented.');
  },
};
