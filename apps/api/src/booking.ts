export enum BookingType {
  REMOTE = 'remote',
  INPERSON = 'inperson',
}

export interface Booking {
  id: string;
  customer_id: string;
  time_slot_id: string;
  service_id: string;
  booking_status?: string;
  is_host?: boolean;
  party_size?: number;
  invoice_id?: string;
  created_at?: Date;
  updated_at?: Date;
  type?: BookingType;
}

export const data: { bookings: Booking[] } = {
  bookings: [
    {
      id: '1',
      customer_id: '1',
      time_slot_id: '1',
      service_id: '1',
      created_at: new Date(),
      updated_at: new Date(),
      type: BookingType.INPERSON,
    },
  ],
};
