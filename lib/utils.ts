import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {Configuration} from "@vaika-api/typescript-client";
import {authTokenCache} from "@/lib/cache";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCachedConfiguration(): Configuration {
  const token = authTokenCache.get();
  const configuration = new Configuration();
  configuration.accessToken = token?.token ?? '';
  return configuration;
}
