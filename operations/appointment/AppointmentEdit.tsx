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
      <TextInput source='id' />
      <TextInput source='last_name' />
      <TextInput source='first_name' />
      <TextInput source='email' />
      <TextInput source='contact' />
      <TextInput source='message' />
      <TextInput source='appointment_datetime' />
      <TextInput source='car.id' />
      <SelectInput source='status' choices={statusChoices} />
    </SimpleForm>
  </Edit>
);