import { ApiProperty } from '@nestjs/swagger';

export class ServiceDto {
  @ApiProperty({ type: Number })
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  image?: string;
  longDescription?: string;
}
