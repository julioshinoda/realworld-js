import { Profile } from './profile.entity';
import { PROFILE_REPOSITORY } from '../../core/constants';

export const profilesProviders = [
  {
    provide: PROFILE_REPOSITORY,
    useValue: Profile,
  },
];
