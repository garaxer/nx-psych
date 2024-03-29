import {
  IsNumber,
  IsPositive,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDate,
} from 'class-validator';
import { Reminder, Service, ServiceType } from '../service';
import { TimeSlot } from '../timeSlot';
import { CreateTimeSlotDto } from './timeSlot.dto';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  timeSlots: CreateTimeSlotDto[];
  @IsOptional()
  sections?: string[];
  @IsOptional()
  description?: string;
  @IsOptional()
  image?: string;
  @IsOptional()
  price?: number;
  @IsOptional()
  duration?: number;
  @IsOptional()
  venue?: string;
  @IsOptional()
  creatorEmail?: string;
  @IsOptional()
  reminder?: Reminder;
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

export class ServiceResponseDto implements Service {
  id: string;
  title: string;
  timeSlots?: TimeSlot[];
  sections?: string[];
  description?: string;
  image?: string;
  venue?: string;
  duration?: number;
  price?: number;
  isCancelled?: boolean;
  maxCapacity?: number;
  maxPartySize?: number;
  startDateTime?: string;
  creatorEmail?: string;
  reminder?: Reminder;
  created_at?: Date;
  updated_at?: Date;
  type?: ServiceType;

  constructor(partial: Partial<ServiceResponseDto>) {
    Object.assign(this, partial);
  }
}
