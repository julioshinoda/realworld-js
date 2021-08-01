import { Controller, Get, UseGuards, Headers } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UpdateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('')
  async getUser(@Headers() headers) {
    return await this.userService.getUser(
      headers.authorization.replace('Bearer ', ''),
    );
  }
}
