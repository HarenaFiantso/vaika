import { AppointmentStatusEnum } from '@vaika-api/typescript-client';
import React from 'react';
import { BooleanInput, Edit, NumberInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

const statusChoices = Object.entries(AppointmentStatusEnum).map(([key, value]) => ({
  id: value,
  name: value,
}));

export const AppointmentEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source='id' readOnly />
      <TextInput source='last_name' readOnly />
      <TextInput source='first_name' readOnly />
      <TextInput source='email' readOnly />
      <TextInput source='contact' readOnly />
      <TextInput source='message' readOnly />
      <TextInput source='appointment_datetime' readOnly />
      <TextInput source='car.id' readOnly />
      <SelectInput source='status' choices={statusChoices} />
    </SimpleForm>
  </Edit>
);
