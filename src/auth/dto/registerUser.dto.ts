import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  readonly fname: string;
  @IsString()
  readonly lname: string;
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  readonly password: string;
}
