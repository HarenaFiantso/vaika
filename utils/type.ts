import { ReactNode } from 'react';

export type CustomThemeProviderProps = {
  children: ReactNode;
};

export type FrontOfficeLayoutProps = {
  children: ReactNode;
};

export type FetchCarProps = {
  size?: number;
};

export type HomeProps = {
  searchParams: FetchCarProps;
};
