import { ApiProperty } from '@nestjs/swagger';

export type User = {
  userId: number;
  username: string;
  password: string;
};

export class UserDto {
  @ApiProperty({ type: Number })
  userId: number;
  @ApiProperty({ type: String })
  username: string;
  @ApiProperty({ type: String })
  password: string;
}
