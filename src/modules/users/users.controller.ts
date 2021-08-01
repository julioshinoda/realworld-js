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
    const token = headers.authorization.replace('Bearer ', '');
    const response = await this.userService.getUser(token);
    return {
      user: {
        email: response.email,
        token,
        username: response.username,
        bio: response.bio,
        image: response.image,
      },
    };
  }
}
