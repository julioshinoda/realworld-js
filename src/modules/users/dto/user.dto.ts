import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  readonly username: string;
  @IsEmail()
  readonly email: string;
  readonly password: string;
  readonly bio: string;
  readonly image: string;
}

export class CreateUserDto {
  readonly user: UserDto;
}

export class UpdateDto {
  readonly email: string;
  readonly bio: string;
  readonly image: string;
  readonly username: string;
  readonly password: string;
}

export class UpdateUserDto {
  readonly user: UpdateDto;
}
