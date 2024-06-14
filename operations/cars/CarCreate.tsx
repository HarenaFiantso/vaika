import { Car, CrupdateCar } from '@vaika-api/typescript-client';
import {
  BooleanInput,
  Create,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  minLength,
  number,
  required,
} from 'react-admin';

const numberValidator = [required(), number(), minLength(1)];

export const CarCreate = () => {
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
        pinned: car.pinned,
      })}
    >
      <SimpleForm>
        <TextInput source='name' name='name' validate={required()} />
        <TextInput source='description' name='description' validate={required()} />
        <NumberInput source='price' name='price' validate={numberValidator} />
        <TextInput source='model' name='model' validate={required()} />
        <TextInput source='color' name='color' validate={required()} />
        <TextInput source='power' name='power' validate={required()} />
        <NumberInput source='place_number' name='place_number' validate={numberValidator} />
        <ReferenceInput source='brand.id' reference='brands' />
        <ReferenceInput source='type.id' reference='car-types' />
        <ReferenceInput source='motor_type.id' reference='motor-types' />
        <BooleanInput source='pinned' name='pinned' />
      </SimpleForm>
    </Create>
  );
};
