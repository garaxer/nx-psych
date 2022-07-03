// import { ApiProperty } from '@nestjs/swagger';

// export class ServiceDto {
//   @ApiProperty({ type: Number })
//   id?: number;
//   name?: string;
//   price?: number;
//   description?: string;
//   image?: string;
//   longDescription?: string;
// }

import {
  IsNumber,
  IsPositive,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { ServiceType } from '../data';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  image: string;
  @IsString()
  @IsNotEmpty()
  longDescription: string;
}

export class UpdateServiceDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  image: string;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  longDescription: string;
}

export class ServiceResponseDto {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;

  @Expose({ name: 'createdAt' })
  transformCreatedAt() {
    return this.created_at;
  }
  @Expose({ name: 'updatedAt' })
  transformUpdatedAt() {
    return this.updated_at;
  }

  @Exclude()
  created_at: Date;

  @Exclude()
  updated_at: Date;

  type: ServiceType;

  constructor(partial: Partial<ServiceResponseDto>) {
    Object.assign(this, partial);
  }
}
