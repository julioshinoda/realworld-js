import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { USER_REPOSITORY } from 'src/core/constants';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }

  async getUser(token: string): Promise<any> {
    const payload = await this.jwtService.verifyAsync(token);
    const response = await this.userRepository.findOne<User>({
      where: { id: payload.id },
      attributes: { exclude: ['id', 'password', 'createdAt', 'updatedAt'] },
    });
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

  async update(data, id) {
    const [numberOfAffectedRows, [updatedUser]] =
      await this.userRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedUser };
  }
}
