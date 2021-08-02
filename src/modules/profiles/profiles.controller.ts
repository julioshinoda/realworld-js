import { Controller, Param, Headers, Get, Post, Delete } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  @Get(':username')
  async getUser(@Param('username') username: string, @Headers() headers) {
    return await this.profileService.findOneByUsername(
      username,
      headers.authorization?.replace('Bearer ', ''),
    );
  }

  @Post(':username/follow')
  async followUser(@Param('username') username: string, @Headers() headers) {
    return await this.profileService.followUser(
      username,
      headers.authorization?.replace('Bearer ', ''),
    );
  }

  @Delete(':username/follow')
  async unfollowUser(@Param('username') username: string, @Headers() headers) {
    return await this.profileService.unfollowUser(
      username,
      headers.authorization?.replace('Bearer ', ''),
    );
  }
}
