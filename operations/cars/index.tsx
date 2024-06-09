import {CarCreate} from './CarCreate';
import {CarList} from './CarList';
import {CarEdit} from '@/operations/cars/CarEdit';

const cars = {
  list: <CarList/>,
  edit: <CarEdit/>,
  create: <CarCreate/>,
};

export default cars;