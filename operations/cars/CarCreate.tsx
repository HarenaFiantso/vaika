import { Brand, Car, CrupdateCar } from '@vaika-api/typescript-client';
import {
  BooleanInput,
  Create,
  NumberInput,
  ReferenceField,
  SelectInput,
  SimpleForm,
  TextInput,
  useGetList,
} from 'react-admin';

export const CarCreate = () => {
  const { data } = useGetList('brands', { pagination: { page: 1, perPage: 10 } });

  console.log(data);

  return (
    <Create
      transform={(car: Car): CrupdateCar => ({
        id: car.id,
        name: car.name,
        description: car.description,
        price: car.price,
        model: car.model,
        color: car.color,
        power: car.power,
        place_number: car.place_number,
        brand_id: car.brand?.id,
        type_id: car.type?.id,
        motor_type_id: car.motor_type?.id,
      })}
    >
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='description' />
        <NumberInput source='price' />
        <TextInput source='model' />
        <TextInput source='color' />
        <TextInput source='power' />
        <NumberInput source='place_number' />
      </SimpleForm>
    </Create>
  );
};
