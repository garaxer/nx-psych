import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseEnumPipe,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  CreateServiceDto,
  ServiceResponseDto,
  UpdateServiceDto,
} from '../../../dtos/service.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { ServiceService } from './services.service';
import { data, ServiceType } from '../../../service';
import { Permissions } from '../../../permissions.decorator';
import { PermissionsGuard } from '../../../permissions.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('services/:type')
export class ServicesController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly reportService: ServiceService) {}

  @Get('foo')
  @ApiOkResponse({ type: [ServiceResponseDto] })
  async index(
    @Param('type', new ParseEnumPipe(ServiceType)) _: ServiceType
  ): Promise<ServiceResponseDto[]> {
    return data.services.map((x) => new ServiceResponseDto(x));
  }

  @Get('foo:id')
  @ApiOkResponse({ type: ServiceResponseDto })
  async show(
    @Param('type', new ParseEnumPipe(ServiceType)) _: ServiceType,
    @Param('id') id: string
  ): Promise<ServiceResponseDto> {
    return new ServiceResponseDto(data.services.find((s) => s.id === id));
  }

  @Get()
  @ApiOkResponse({ type: [ServiceResponseDto] })
  getAllReports(
    @Param('type', new ParseEnumPipe(ServiceType)) type: ServiceType
  ): ServiceResponseDto[] {
    return this.reportService.getAllReports(type);
  }

  @Get(':id')
  @ApiOkResponse({ type: ServiceResponseDto })
  getReportById(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('type', new ParseEnumPipe(ServiceType)) type: ServiceType
  ): ServiceResponseDto {
    return this.reportService.getReportById(type, id);
  }

  @Post()
  @ApiOkResponse({ type: ServiceResponseDto })
  createReport(
    @Body() body: CreateServiceDto,
    @Param('type', new ParseEnumPipe(ServiceType)) type: ServiceType
  ): ServiceResponseDto {
    return this.reportService.createReport(type, body);
  }

  @Put(':id')
  @ApiOkResponse({ type: ServiceResponseDto })
  updateReport(
    @Param('type', new ParseEnumPipe(ServiceType)) type: ServiceType,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateServiceDto
  ): ServiceResponseDto {
    return this.reportService.updateReport(type, id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Permissions('delete:items')
  @ApiOkResponse()
  deleteReport(
    @Param('id', ParseUUIDPipe) id: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Param('type') _
  ): void {
    return this.reportService.deleteReport(id);
  }
}
