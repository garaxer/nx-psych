import { ApiProperty } from '@nestjs/swagger';

export class FooDto {
  @ApiProperty({ type: String }) // TODO - shouldn't need to add decorators to fields - it should automatically detect this
  message?: string;
}