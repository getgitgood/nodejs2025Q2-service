import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: "The user's login" })
  @IsString()
  @MinLength(3)
  login: string;

  @ApiProperty({ description: "The user's password" })
  @IsString()
  password: string;
}
