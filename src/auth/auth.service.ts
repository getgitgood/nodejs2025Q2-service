import { Injectable } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  login(loginDto: LoginDto) {
    const { login, password } = loginDto;
    // TODO: validate user and return token
    return { token: 'fake-jwt-token' };
  }

  signup(loginDto: LoginDto) {
    const { login, password } = loginDto;
    // TODO: register user
    return;
  }
}
