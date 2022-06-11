import { ApiProperty } from '@nestjs/swagger';

export class ServiceDto {
  @ApiProperty({ type: Number })
  id?: number;
  @ApiProperty({ type: String })
  name?: string;
  @ApiProperty({ type: Number })
  price?: number;
  @ApiProperty({ type: String })
  description?: string;
  @ApiProperty({ type: String })
  image?: string;
  @ApiProperty({ type: String })
  longDescription?: string;
}
