import { Configuration } from '@vaika-api/typescript-client';

//TODO: set access token got from JWT authentication
export function getCachedConfiguration(): Configuration {
  const configuration = new Configuration();
  configuration.accessToken = '';
  return configuration;
}
