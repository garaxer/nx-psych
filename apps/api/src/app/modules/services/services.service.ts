import { Injectable } from '@nestjs/common';
import {
  CreateServiceDto,
  ServiceResponseDto,
} from '../../../dtos/service.dto';
import { data, Service, ServiceType } from '../../../service';
import { v4 as uuid } from 'uuid';

interface Report {
  title: string;
  dateTime: Date;
  description: string;
  category: string;
  image?: string;
  city?: string;
  venue?: string;
  duration?: number;
  price?: number;
  location?: string;
  isCancelled?: boolean;
}

interface UpdateReport {
  title?: string;
  dateTime?: Date;
  description?: string;
  category?: string;
  image?: string;
  city?: string;
  venue?: string;
  duration?: number;
  price?: number;
  location?: string;
  isCancelled?: boolean;
}

@Injectable()
export class ServiceService {
  getAllReports(type: ServiceType): ServiceResponseDto[] {
    return data.services
      .filter((report) => report.type === type)
      .map((report) => new ServiceResponseDto(report));
  }

  getReportById(type: ServiceType, id: string): ServiceResponseDto {
    const report = data.services
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!report) return;

    return new ServiceResponseDto(report);
  }

  createReport(type: ServiceType, body: CreateServiceDto): ServiceResponseDto {
    const newReport: Service = {
      id: uuid(),
      ...body,
      // TODO time_slot class to handle date
      timeSlots: body.timeSlots.map((ts) => ({
        ...ts,
        id: uuid(),
        start_time: new Date(ts.start_time),
      })),
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.services.push(newReport);
    return new ServiceResponseDto(newReport);
  }

  updateReport(
    type: ServiceType,
    id: string,
    body: UpdateReport
  ): ServiceResponseDto {
    const reportToUpdate = data.services
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!reportToUpdate) return;

    const reportIndex = data.services.findIndex(
      (report) => report.id === reportToUpdate.id
    );

    data.services[reportIndex] = {
      ...data.services[reportIndex],
      ...body,
      updated_at: new Date(),
    };

    return new ServiceResponseDto(data.services[reportIndex]);
  }

  deleteReport(id: string) {
    const reportIndex = data.services.findIndex((report) => report.id === id);

    if (reportIndex === -1) return;

    data.services.splice(reportIndex, 1);

    return;
  }
}
