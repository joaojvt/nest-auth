import { Exclude } from 'class-transformer';
import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Exclude({ toPlainOnly: true })
  @IsNotEmpty()
  @Length(6)
  password: string;
}
