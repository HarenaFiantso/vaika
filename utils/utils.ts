import { Configuration } from '@vaika-api/typescript-client';

//TODO: set access token got from JWT authentication
export function getCachedConfiguration(): Configuration {
  const configuration = new Configuration();
  configuration.accessToken = '';
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
