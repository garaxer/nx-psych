import { Controller, Get, Param } from '@nestjs/common';
import services, { Service } from 'apps/api/src/services';

@Controller('services')
export class ServicesController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Get()
  async index(): Promise<Service[]> {
    return services;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Service> {
    return services.find((s) => s.id === parseInt(id));
  }
}
