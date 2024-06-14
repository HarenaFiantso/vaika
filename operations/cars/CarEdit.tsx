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
        pinned: car.pinned,
      })}
    >
      <SimpleForm>
        <TextInput source='id' readOnly name='id' />
        <TextInput source='name' name='name' />
        <TextInput source='description' name='description' />
        <NumberInput source='price' name='price' />
        <TextInput source='model' name='model' />
        <TextInput source='color' name='color' />
        <TextInput source='power' name='power' />
        <NumberInput source='place_number' name='placeNumber' />
        <BooleanInput source='pinned' name='pinned' />
      </SimpleForm>
    </Edit>
  );
};
