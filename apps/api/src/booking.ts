export enum BookingType {
  REMOTE = 'remote',
  INPERSON = 'inperson',
}

export interface Booking {
  id: string;
  timeSlotId: string;
  userId: string;
  isHost: boolean;
  paymentDetailsId: string;
  created_at?: Date;
  updated_at?: Date;
  type: BookingType;
}

export const data: { bookings: Booking[] } = {
  bookings: [
    {
      id: '1',
      timeSlotId: '1',
      userId: '1',
      isHost: true,
      paymentDetailsId: '1',
      created_at: new Date(),
      updated_at: new Date(),
      type: BookingType.INPERSON,
    },
  ],
};
