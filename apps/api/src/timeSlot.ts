export interface TimeSlot {
  id: string;
  dateTime: Date;
  availabilityCount?: number;
  bookingCount?: number;
  isBookable?: boolean;
  maximumPartySize?: number;
  created_at?: Date;
  updated_at?: Date;
  serviceId?: string;
}

export const data: { timeSlots: TimeSlot[] } = {
  timeSlots: [
    {
      id: '1',
      dateTime: new Date('08-08-2022 12:00'),
      availabilityCount: 1,
      bookingCount: 1,
      isBookable: true,
      maximumPartySize: 1,
      created_at: new Date('08-08-2022'),
      updated_at: new Date('08-08-2022'),
      serviceId: '1',
    },
  ],
};
