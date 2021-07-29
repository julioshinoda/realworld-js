export class UserDto {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly bio: string;
  readonly image: string;
}

export class CreateUserDto {
  readonly user: UserDto;
}

export class LoginDto {
  readonly username: string;
  readonly password: string;
}

export class LoginUserDto {
  readonly user: LoginDto;
}
