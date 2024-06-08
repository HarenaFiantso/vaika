import { BooleanInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const CarEdit = () => (
  <Edit>
    <SimpleForm>
      <BooleanInput source='pinned' />
      <TextInput source='brand.id' />
      <TextInput source='type.id' />
      <TextInput source='motor_type.id' />
      <TextInput source='images' />
      <TextInput source='id' />
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
