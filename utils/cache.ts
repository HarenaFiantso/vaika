'use client';

import { LoginResponse } from '@vaika-api/typescript-client';

export interface CacheObject<T> {
  replace: (obj: T) => T;
  get: () => T | null;
  invalidate: () => void;
  isPresent: () => boolean;
}

const createObjectCacher = <T>(key: string, storageFactory: () => Storage) => {
  const storage: Storage = storageFactory();
  return {
    replace: (obj: T) => {
      storage?.setItem(key, JSON.stringify(obj));
      return obj;
    },
    get: () => {
      const obj = storage?.getItem(key);
      if (!obj) return null;
      try {
        return JSON.parse(obj) as T;
      } catch {
        return obj as T;
      }
    },
    invalidate: () => {
      storage?.removeItem(key);
    },
    isPresent: () => storage?.getItem(key) != null,
  };
};

const inLocalStorage = <T>(key: string) =>
  createObjectCacher<T>(key, () => {
    if (typeof window !== 'undefined') {
      return window?.localStorage;
    }
  });

export const authTokenCache = inLocalStorage<LoginResponse>('auth_token');

export const clearCaches = () => {
  if (typeof window !== 'undefined') {
    localStorage.clear();
    sessionStorage.clear();
  }
};

