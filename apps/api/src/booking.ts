export enum BookingType {
  REMOTE = 'remote',
  INPERSON = 'inperson',
}

export interface Booking {
  id: string;
  customer_id: string;
  time_slot_id: string;
  service_id: string;
  startDateTime: Date;
  bookingStatus: string;
  is_host?: boolean;
  party_size?: number;
  invoice_id?: string;
  type?: BookingType;
  section?: string;
  managers_notes?: string;
  customers_notes?: string;
  created_at?: Date;
  updated_at?: Date;
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
      startDateTime: new Date(),
      bookingStatus: 'OPEN',
    },
  ],
};
