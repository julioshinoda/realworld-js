import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { JwtModule } from '@nestjs/jwt';
import { profilesProviders } from './profiles.provider';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
    DatabaseModule,
  ],
  providers: [ProfilesService, ...profilesProviders],
  controllers: [ProfilesController],
})
export class ProfilesModule {}
