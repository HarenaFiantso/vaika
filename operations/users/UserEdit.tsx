import { Edit, PasswordInput, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = () => {
  const password = 'test';
  return (
    <Edit>
      <SimpleForm>
        <TextInput source='username' />
        <TextInput source='email' />
        <PasswordInput source={password} />
      </SimpleForm>
    </Edit>
  );
};
