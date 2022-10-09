import { User } from './dtos/User.dto';

export interface TimeSlot {
  id: string;
  startTime: Date;
  created_at?: Date;
  updated_at?: Date;
  service_id?: string;
  attendees?: User[];
}

export const data: { timeSlots: TimeSlot[] } = {
  timeSlots: [
    {
      id: '1',
      startTime: new Date('08-08-2022 12:00'),
      created_at: new Date('08-08-2022'),
      updated_at: new Date('08-08-2022'),
      service_id: '1',
    },
  ],
};
