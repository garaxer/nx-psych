import { Exclude, Expose } from 'class-transformer';
import { Booking } from '../booking';
import { Service } from '../service';
import { User } from './User.dto';

// TODO figure out why I can't import this
export enum BookingType {
  REMOTE = 'remote',
  INPERSON = 'inperson',
}

export class CreateBookingDto {
  customer: User;
  start_time: string;
  time_slot_id: string;
  party_size?: number;
  managers_notes?: number;
  customers_notes?: number;
  is_host?: boolean;
  service: Service;
  type?: BookingType;
}

export class UpdateBookingDto {
  customer: User;
  start_time: string;
  time_slot_id: string;
  party_size?: number;
  managers_notes?: string;
  customers_notes?: string;
  is_host?: boolean;
  service: Service;
}

export class BookingResponseDto implements Booking {
  id: string;
  customer_id: string;
  time_slot_id: string;
  service_id: string;
  booking_status?: string;
  is_host?: boolean;
  party_size?: number;
  invoice_id?: string;

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
  startDateTime: Date;
  bookingStatus: string;
  section?: string;
  managers_notes?: string;
  customers_notes?: string;
}
