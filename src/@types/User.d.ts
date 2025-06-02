interface User {
  id: string;
  login: string;
  password: string;
  version: number;
  createdAt: number;
  updatedAt: number;
}

type UserPassword = Omit<User, 'password'>;

interface ICreateUserDto {
  login: string;
  password: string;
}

interface IUpdatePasswordDto {
  prevPassword: string;
  newPassword: string;
}
