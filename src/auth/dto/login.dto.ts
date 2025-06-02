import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: 'Username' })
  @IsString()
  @MinLength(3)
  login: string;

  @ApiProperty({ description: 'Password' })
  @IsString()
  password: string;
}
