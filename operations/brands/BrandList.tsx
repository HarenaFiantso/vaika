import { Datagrid, List, TextField } from 'react-admin';

export const BrandList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='logoUrl' />
    </Datagrid>
  </List>
);
