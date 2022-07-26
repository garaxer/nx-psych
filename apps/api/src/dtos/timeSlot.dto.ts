import { TimeSlot } from '../timeSlot';

export type CreateTimeSlotDto = Omit<TimeSlot, 'id' | 'start_time'> & {
  start_time: string;
};
