import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/auth/dto/login.dto';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Login',
    description: 'Logins a user and returns a JWT-token',
  })
  @ApiResponse({ status: 200, description: 'Successful login.' })
  @ApiResponse({ status: 403, description: 'Incorrect login or password' })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('signup')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Signup', description: 'Signup a user' })
  @ApiResponse({ status: 204, description: 'Successful signup' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 409, description: 'Conflict. Login already exists' })
  signup(@Body() loginDto: LoginDto) {
    return this.authService.signup(loginDto);
  }
}
