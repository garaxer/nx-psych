export enum BookingType {
  REMOTE = 'remote',
  INPERSON = 'inperson',
}

export interface Booking {
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
}

export const data: { bookings: Booking[] } = {
  bookings: [
    {
      id: '1',
      title: '1 hr appointment with Craig',
      date: new Date('08-08-2022'),
      duration: 1,
      description: 'Appointment',
      category: 'Service type goes here',
      price: 5.99,
      location: 'remote',
      type: BookingType.INPERSON,
    },
    {
      id: '2',
      title: '2 hr appointment with Craig',
      date: new Date('08-09-2022'),
      duration: 1,
      description: 'Appointment',
      category: 'Service type goes here',
      price: 5.99,
      location: 'remote',
      type: BookingType.INPERSON,
    },
  ],
};
