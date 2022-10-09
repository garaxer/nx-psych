import { User } from './dtos/User.dto';

export interface TimeSlot {
  id: string;
  start_time: Date;
  created_at?: Date;
  updated_at?: Date;
  service_id?: string;
  attendees?: User[];
}

export const data: { timeSlots: TimeSlot[] } = {
  timeSlots: [
    {
      id: '1',
      start_time: new Date('08-08-2022 12:00'),
      created_at: new Date('08-08-2022'),
      updated_at: new Date('08-08-2022'),
      service_id: '1',
    },
  ],
};
