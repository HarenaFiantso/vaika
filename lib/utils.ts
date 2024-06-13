import { authTokenCache } from '@/lib/cache';
import { Configuration } from '@vaika-api/typescript-client';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCachedConfiguration(): Configuration {
  const token = authTokenCache.get();
  const configuration = new Configuration();
  configuration.accessToken = token?.token ?? '';
  return configuration;
}

export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }
  return true;
};
