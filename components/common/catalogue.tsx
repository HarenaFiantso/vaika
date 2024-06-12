import { Car } from '@vaika-api/typescript-client';

type CatalogueProps = {
  allCars: Car[] | null,
  isLoading: boolean
}

export default function Catalogue({ allCars, isLoading }: CatalogueProps) {
  return <>Catalogue</>;
}