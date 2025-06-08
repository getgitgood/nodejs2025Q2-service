interface User {
  id: string;
  login: string;
  password: string;
  version: number;
  createdAt: number;
  updatedAt: number;
}

type UserUpdatePassword = Omit<User, 'password'>;

interface ICreateUserDto {
  login: string;
  password: string;
}

interface UpdatePasswordDto {
  oldPassword: string;
  newPassword: string;
}
