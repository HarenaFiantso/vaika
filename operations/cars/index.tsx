import { CarCreate } from './CarCreate';
import { CarEdit } from '@/operations/cars/CarEdit';
import { CarList } from '@/operations/cars/Carlist';

const cars = {
  list: <CarList />,
  edit: <CarEdit />,
  create: <CarCreate />,
};

export default cars;
