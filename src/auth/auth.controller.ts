import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/loginUser.dto';
import { RegisterDto } from './dto/registerUser.dto';

@Controller('auth') // /auth/register
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async registerUser(@Body() registerUserDto: RegisterDto) {
    const token = await this.authService.registerUser(registerUserDto);
    return token;
  }

  @Post('login')
  async loginUser(@Body() loginDto: LoginDto) {
    const { access_token } = await this.authService.loginUser(loginDto);
    return { access_token };
  }
}
