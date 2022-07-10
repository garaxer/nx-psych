import { Injectable } from '@nestjs/common';
import { BookingResponseDto } from '../../../dtos/booking.dto';
import { data, BookingType } from '../../../booking';
import { v4 as uuid } from 'uuid';
import { Booking } from '../../../booking';

type CreateBooking = Omit<Booking, 'id' | 'created_at' | 'updated_at'>;
type UpdateBooking = Partial<CreateBooking>;

@Injectable()
export class BookingService {
  getAllReports(type: BookingType): BookingResponseDto[] {
    return data.bookings
      .filter((report) => report.type === type)
      .map((report) => new BookingResponseDto(report));
  }

  getReportById(type: BookingType, id: string): BookingResponseDto {
    const report = data.bookings
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!report) return;

    return new BookingResponseDto(report);
  }

  createReport(type: BookingType, body: CreateBooking): BookingResponseDto {
    const newReport = {
      id: uuid(),
      ...body,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.bookings.push(newReport);
    return new BookingResponseDto(newReport);
  }

  updateReport(
    type: BookingType,
    id: string,
    body: UpdateBooking
  ): BookingResponseDto {
    const reportToUpdate = data.bookings
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!reportToUpdate) return;

    const reportIndex = data.bookings.findIndex(
      (report) => report.id === reportToUpdate.id
    );

    data.bookings[reportIndex] = {
      ...data.bookings[reportIndex],
      ...body,
      updated_at: new Date(),
    };

    return new BookingResponseDto(data.bookings[reportIndex]);
  }

  deleteReport(id: string) {
    const reportIndex = data.bookings.findIndex((report) => report.id === id);

    if (reportIndex === -1) return;

    data.bookings.splice(reportIndex, 1);

    return;
  }
}
