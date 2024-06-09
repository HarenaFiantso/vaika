import { Car, CrupdateCar } from '@vaika-api/typescript-client';
import { Create, NumberInput, SimpleForm, TextInput, useGetList } from 'react-admin';

export const CarCreate = () => {
  const { data } = useGetList('brands', { pagination: { page: 1, perPage: 10 } });

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
        <TextInput source='name' name='name' />
        <TextInput source='description' name='description' />
        <NumberInput source='price' name='number' />
        <TextInput source='model' name='model' />
        <TextInput source='color' name='color' />
        <TextInput source='power' name='power' />
        <NumberInput source='place_number' name='placeNumber' />
      </SimpleForm>
    </Create>
  );
};
