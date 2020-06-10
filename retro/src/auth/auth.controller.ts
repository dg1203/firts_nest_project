import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.authService.create(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('current')
  async current(@Request() req) {
    if (req.user) {
      return await this.authService.current(req.user.userId);
    }
    return null;
  }
}
