import { Car, CrupdateCar } from '@vaika-api/typescript-client';
import { BooleanInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const CarEdit = () => {
  return (
    <Edit
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
        <BooleanInput source='pinned' />
        <TextInput source='id' readOnly />
        <TextInput source='name' />
        <TextInput source='description' />
        <NumberInput source='price' />
        <TextInput source='model' />
        <TextInput source='color' />
        <TextInput source='power' />
        <NumberInput source='place_number' />
      </SimpleForm>
    </Edit>
  );
};
