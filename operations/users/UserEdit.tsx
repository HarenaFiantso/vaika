import { Edit, PasswordInput, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = () => {
  const password = 'test';
  return (
    <Edit>
      <SimpleForm>
        <TextInput source='username' name='username' />
        <TextInput source='email' name='email' />
        <PasswordInput source={password} name='password' />
      </SimpleForm>
    </Edit>
  );
};
