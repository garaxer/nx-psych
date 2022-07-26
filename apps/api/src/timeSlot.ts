export interface TimeSlot {
  id: string;
  start_time: Date;
  availability_count?: number;
  booking_count?: number;
  is_bookable?: boolean;
  maximum_party_size?: number;
  created_at?: Date;
  updated_at?: Date;
  service_id?: string;
}

export const data: { timeSlots: TimeSlot[] } = {
  timeSlots: [
    {
      id: '1',
      start_time: new Date('08-08-2022 12:00'),
      availability_count: 1,
      booking_count: 1,
      is_bookable: true,
      maximum_party_size: 1,
      created_at: new Date('08-08-2022'),
      updated_at: new Date('08-08-2022'),
      service_id: '1',
    },
  ],
};
