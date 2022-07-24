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
  IsDate,
  IsBoolean,
} from 'class-validator';
import { ServiceType } from '../service';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsDate()
  @IsOptional()
  dateTime: Date;
  @IsNumber()
  @IsPositive()
  duration: number;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsOptional()
  image: string;
  @IsString()
  @IsNotEmpty()
  category: string;
  @IsNumber()
  @IsPositive()
  price: number;
  @IsString()
  @IsNotEmpty()
  location: string;
  @IsString()
  @IsNotEmpty()
  type: ServiceType;
  @IsBoolean()
  @IsOptional()
  isCancelled: boolean;
  @IsOptional()
  @IsString()
  city?: string;
  @IsOptional()
  @IsString()
  venue?: string;
}

export class UpdateServiceDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title: string;
  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  dateTime: Date;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  duration: number;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description: string;
  @IsString()
  @IsOptional()
  image: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  category: string;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price: number;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  location: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  type: ServiceType;
}

export class ServiceResponseDto {
  id: string;
  title: string;
  description: string;
  category: string;
  dateTime?: Date;
  image?: string;
  city?: string;
  venue?: string;
  duration?: number;
  price?: number;
  location?: string;
  isCancelled?: boolean;
  type: ServiceType;
  created_at?: Date;
  updated_at?: Date;

  constructor(partial: Partial<ServiceResponseDto>) {
    Object.assign(this, partial);
  }
}
