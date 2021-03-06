import { Sequelize } from 'sequelize-typescript';
import { Profile } from 'src/modules/profiles/profile.entity';
import { User } from 'src/modules/users/user.entity';
import { DEVELOPMENT, PRODUCTION, SEQUELIZE } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Profile]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
