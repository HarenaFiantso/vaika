import { CarCreate } from '@/operations/cars/CarCreate';
import { CarEdit } from '@/operations/cars/CarEdit';
import { CarList } from '@/operations/cars/CarList';

const cars = {
  list: <CarList />,
  edit: <CarEdit />,
  create: <CarCreate />,
};

export default cars;
