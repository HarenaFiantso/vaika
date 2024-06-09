import { Datagrid, EmailField, List, TextField } from 'react-admin';

export const UserList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='username' />
      <EmailField source='email' />
    </Datagrid>
  </List>
);
