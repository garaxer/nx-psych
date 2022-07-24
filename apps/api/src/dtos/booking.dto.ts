import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

// TODO figure out why I can't import this
export enum BookingType {
  REMOTE = 'remote',
  INPERSON = 'inperson',
}

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  timeSlotId: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  userId: string;
  @IsBoolean()
  @IsNotEmpty()
  isHost: boolean;
  @IsString()
  @IsNotEmpty()
  paymentDetailsId: string;
}

export class UpdateBookingDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  timeSlotId: string;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  userId: string;
  @IsOptional()
  @IsBoolean()
  @IsNotEmpty()
  isHost: boolean;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  paymentDetailsId: string;
}

export class BookingResponseDto {
  id: string;
  timeSlotId: string;
  userId: string;
  isHost: boolean;
  paymentDetailsId: string;

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

  type: BookingType;

  constructor(partial: Partial<BookingResponseDto>) {
    Object.assign(this, partial);
  }
}
