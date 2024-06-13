import { Datagrid, List, TextField } from 'react-admin';

export const AppointmentList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='last_name' />
      <TextField source='first_name' />
      <TextField source='email' />
      <TextField source='contact' />
      <TextField source='message' />
      <TextField source='appointment_datetime' />
      <TextField source='status' />
    </Datagrid>
  </List>
);
