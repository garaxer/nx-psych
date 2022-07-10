import {
  IsNumber,
  IsPositive,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDate,
} from 'class-validator';
import { BookingType } from '../booking';

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsDate()
  @IsNotEmpty()
  date: Date;
  @IsNumber()
  @IsPositive()
  duration: number;
  @IsString()
  @IsNotEmpty()
  description: string;
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
  type: BookingType;
}

export class UpdateBookingDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title: string;
  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  date: Date;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  duration: number;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description: string;
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
  type: BookingType;
}

export class BookingResponseDto {
  id: string;
  title: string;
  date: Date;
  duration: number;
  description: string;
  category: string;
  price: number;
  location: string;
  created_at?: Date;
  updated_at?: Date;
  type: BookingType;

  constructor(partial: Partial<BookingResponseDto>) {
    Object.assign(this, partial);
  }
}
