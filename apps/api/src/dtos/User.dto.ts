import { ApiProperty } from '@nestjs/swagger';

export type User = {
  userId: string;
  username: string;
  email: string;
  phone: string;
  password: string;
};

export class UserDto {
  @ApiProperty({ type: String })
  userId: string;
  @ApiProperty({ type: String })
  username: string;
  @ApiProperty({ type: String })
  email: string;
  @ApiProperty({ type: String })
  phone: string;
  @ApiProperty({ type: String })
  password: string;
}
