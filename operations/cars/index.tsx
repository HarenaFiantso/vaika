import { CarCreate } from './CarCreate';
import { CarList } from './Carlist';
import { CarEdit } from '@/operations/cars/CarEdit';

const cars = {
  list: <CarList />,
  edit: <CarEdit />,
  create: <CarCreate />,
};

export default cars;
