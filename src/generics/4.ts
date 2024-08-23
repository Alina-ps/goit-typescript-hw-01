type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const defaultValues: User = {
    name: 'defaultName',
    surname: 'dafaultSurname',
    email: '',
    password: '',
  };

  return { ...defaultValues, ...initialValues };
}

const updatedUser = createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});
