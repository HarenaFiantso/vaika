import React from 'react';
import { BooleanInput, Edit, NumberInput, SimpleForm, TextInput, TextField, SelectInput } from 'react-admin';
import { AppointmentStatusEnum } from '@vaika-api/typescript-client';

const statusChoices = Object.entries(AppointmentStatusEnum).map(([key, value]) => ({
    id: value,
    name: value
}));

export const AppointmentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source='id' />
            <TextField source='last_name' />
            <TextField source='first_name' />
            <TextField source='email' />
            <TextField source='contact' />
            <TextField source='message' />
            <TextField source='appointment_datetime' />
            <SelectInput source='status' choices={statusChoices} />
        </SimpleForm>
    </Edit>
);
