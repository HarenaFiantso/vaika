import { Datagrid, ImageField, List, TextField } from 'react-admin';

export const CarList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="brand.name" />
      <TextField source="price" />
      <TextField source="model" />
      <TextField source="power" />
      <ImageField source="images[0].url" title="Featured image" />
    </Datagrid>
  </List>
);