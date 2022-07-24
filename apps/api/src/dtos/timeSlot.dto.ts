import {
  IsNumber,
  IsPositive,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDate,
  IsBoolean,
} from 'class-validator';

export class CreateTimeSlotDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsDate()
  @IsNotEmpty()
  dateTime: Date;
  @IsOptional()
  @IsNumber()
  availabilityCount?: number;
  @IsOptional()
  @IsNumber()
  bookingCount?: number;
  @IsOptional()
  @IsBoolean()
  isBookable?: boolean;
  @IsOptional()
  @IsNumber()
  @IsPositive()
  maximumPartySize?: number;
  @IsString()
  @IsOptional()
  serviceId: string;
}

export class UpdateTimeSlotDto {
  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  dateTime: Date;
  @IsOptional()
  @IsNumber()
  availabilityCount?: number;
  @IsOptional()
  @IsNumber()
  bookingCount?: number;
  @IsOptional()
  @IsBoolean()
  isBookable?: boolean;
  @IsOptional()
  @IsNumber()
  maximumPartySize?: number;
  @IsString()
  @IsOptional()
  serviceId: string;
}

export class BookingResponseDto {
  id: string;
  dateTime: Date;
  availabilityCount?: number;
  bookingCount?: number;
  isBookable?: boolean;
  maximumPartySize?: number;
  created_at?: Date;
  updated_at?: Date;
  serviceId: string;

  constructor(partial: Partial<BookingResponseDto>) {
    Object.assign(this, partial);
  }
}
