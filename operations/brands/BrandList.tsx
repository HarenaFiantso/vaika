import {Datagrid, ImageField, List, TextField} from 'react-admin';

export const BrandList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='id'/>
      <TextField source='name'/>
      <ImageField source='logo_url'/>
    </Datagrid>
  </List>
);