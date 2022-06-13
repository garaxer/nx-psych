import { Controller, Get, Param } from '@nestjs/common';
import services, { Service } from '../../../services';
import { ServiceDto } from '../../../dtos/Service.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('services')
export class ServicesController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Get()
  @ApiOkResponse({ type: [ServiceDto] })
  async index(): Promise<Service[]> {
    return services;
  }

  @Get(':id')
  @ApiOkResponse({ type: ServiceDto })
  async show(@Param('id') id: string): Promise<Service> {
    return services.find((s) => s.id === parseInt(id));
  }
}
