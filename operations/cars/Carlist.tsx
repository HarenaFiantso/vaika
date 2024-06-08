import { Datagrid, List, TextField } from 'react-admin';

export const CarList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='name' />
      <TextField source='brand.name' />
      <TextField source='price' />
      <TextField source='model' />
      <TextField source='power' />
      <TextField source='images' />
    </Datagrid>
  </List>
);
