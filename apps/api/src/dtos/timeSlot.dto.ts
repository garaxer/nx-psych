import { TimeSlot } from '../timeSlot';

export type CreateTimeSlotDto = Omit<TimeSlot, 'id'>;
