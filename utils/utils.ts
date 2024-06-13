import { authTokenCache } from './cache';
import { Configuration, LoginResponse } from '@vaika-api/typescript-client';
import { maxLength } from 'ra-core';

export function getCachedConfiguration(): Configuration {
  const token = authTokenCache.get();
  const configuration = new Configuration();
  configuration.accessToken = token?.token ?? '';
  return configuration;
}

export const updateSearchParams = (type: string, value: string): string => {
  const searchParams: URLSearchParams = new URLSearchParams(window.location.search);
  if (value) {
    searchParams.set(type, value);
  } else {
    searchParams.delete(type);
  }

  return `${window.location.pathname}?${searchParams.toString()}`;
};

export const validateString = (value: unknown, maxLength: number) => {
  return !(!value || typeof value !== 'string' || value.length > maxLength);
};
