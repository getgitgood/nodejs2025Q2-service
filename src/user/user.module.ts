import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  findAll() {
    // TODO: fetch users
    return [{ id: 1, login: 'user1' }];
  }

  create(createUserDto: CreateUserDto) {
    // TODO: create new user
    return { id: 2, ...createUserDto };
  }
}
