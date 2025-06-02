import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';

import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  private users: { [id: string]: User } = {};

  private checkUserExistence(createUserDto: CreateUserDto) {
    const isUserAlreadyExists = Object.values(this.users).some(
      (user) => user.login === createUserDto.login,
    );
    if (isUserAlreadyExists)
      throw new ConflictException(`User ${createUserDto.login} already exists`);
  }

  private findUser(id: string): User {
    const user = this.users[id];
    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  create(createUserDto: CreateUserDto): UserUpdatePassword {
    this.checkUserExistence(createUserDto);

    const id = uuidV4();
    const { login, password } = createUserDto;
    const now = Date.now();
    const createdAt = now;
    const updatedAt = now;
    const version = 1;

    const user: User = {
      id,
      login,
      password,
      createdAt,
      updatedAt,
      version,
    };

    const userUpdatePassword: UserUpdatePassword = {
      id,
      login,
      createdAt,
      updatedAt,
      version,
    };

    this.users[id] = user;

    return userUpdatePassword;
  }

  findAll(): UserUpdatePassword[] {
    return Object.values(this.users).map((user) => {
      const response = { ...user };
      delete response.password;

      return response;
    });
  }

  findOne(id: string): UserUpdatePassword {
    const user = this.findUser(id);

    const response = { ...user };
    delete response.password;

    return response;
  }

  update(id: string, updateUserDto: UpdateUserDto): UserUpdatePassword {
    const user = this.findUser(id);

    if (user.password !== updateUserDto.prevPassword)
      throw new ForbiddenException('Password don`t match with old password');

    const updatedUser = {
      ...user,
      password: updateUserDto.newPassword,
      updatedAt: Date.now(),
      version: user.version + 1,
    };

    this.users[id] = updatedUser;

    const response = { ...updatedUser };
    delete response.password;

    return response;
  }

  remove(id: string) {
    this.findUser(id);
    this.users = Object.fromEntries(
      Object.entries(this.users).filter(([key]) => key !== id),
    );
  }
}
