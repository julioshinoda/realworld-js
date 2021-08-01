import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PROFILE_REPOSITORY } from 'src/core/constants';
import { databaseProviders } from 'src/core/database/database.provider';
import { Profile } from './profile.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @Inject(PROFILE_REPOSITORY)
    private readonly profileRepository: typeof Profile,
    private readonly jwtService: JwtService,
  ) {}

  async findOneByUsername(username: string, token?: string): Promise<any> {
    const sequelize = await databaseProviders[0].useFactory();
    try {
      if (token) {
        const payload = await this.jwtService.verifyAsync(token);
        const [results, _] = await sequelize.query(
          `select username, bio, image,
                         (case when exists 
                            (SELECT 1 
                               FROM "Profiles" p 
                              WHERE "userId" = ${payload.id} 
                                    and p."profileId" = u.id )
                          then true 
                          else false 
                          end) as following 
                 from "Users" u 
                where u.username = '${username}';`,
        );
        if (results.length == 0) {
          throw 'profile not found';
        }
        return { profile: results[0] };
      }
      const [results, _] = await sequelize.query(
        `select username, bio, image, false as following  from "Users" where username = '${username}'`,
      );
      if (results.length == 0) {
        throw 'profile not found';
      }
      return { profile: results[0] };
    } catch (error) {
      throw new HttpException(
        {
          errors: {
            body: [error],
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  async followUser(username: string, token?: string): Promise<any> {
    const sequelize = await databaseProviders[0].useFactory();

    try {
      const payload = await this.jwtService.verifyAsync(token);
      const result = await sequelize.query(
        `select id,username, bio, image, false as following from "Users" where username = '${username}'`,
        { plain: true },
      );
      if (result === null) {
        throw 'profile not found';
      }
      await this.profileRepository.create({
        userId: payload.id,
        profileId: result.id,
      });
      result.following = true;
      delete result.id;
      return { profile: result };
    } catch (error) {
      throw new HttpException(
        {
          errors: {
            body: [error],
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }
}
