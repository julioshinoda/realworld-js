import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Put,
  Headers,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto, UpdateUserDto } from '../users/dto/user.dto';
import { AuthService } from './auth.service';

@Controller('users')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Post('')
  async signUp(@Body() user: CreateUserDto) {
    return await this.authService.create(user.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('')
  async update(@Body() user: UpdateUserDto, @Headers() headers) {
    return await this.authService.update(
      headers.authorization.replace('Bearer ', ''),
      user.user,
    );
  }
}
