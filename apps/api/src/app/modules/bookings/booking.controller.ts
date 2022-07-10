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
  CreateBookingDto,
  BookingResponseDto,
  UpdateBookingDto,
} from '../../../dtos/booking.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { data, BookingType } from '../../../booking';
import { Permissions } from '../../../permissions.decorator';
import { PermissionsGuard } from '../../../permissions.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('booking/:type')
export class BookingController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly reportService: BookingService) {}

  @Get('foo')
  @ApiOkResponse({ type: [BookingResponseDto] })
  async index(
    @Param('type', new ParseEnumPipe(BookingType)) _: BookingType
  ): Promise<BookingResponseDto[]> {
    return data.bookings.map((x) => new BookingResponseDto(x));
  }

  @Get('foo:id')
  @ApiOkResponse({ type: BookingResponseDto })
  async show(
    @Param('type', new ParseEnumPipe(BookingType)) _: BookingType,
    @Param('id') id: string
  ): Promise<BookingResponseDto> {
    return new BookingResponseDto(data.bookings.find((s) => s.id === id));
  }

  @Get()
  @ApiOkResponse({ type: [BookingResponseDto] })
  getAllReports(
    @Param('type', new ParseEnumPipe(BookingType)) type: BookingType
  ): BookingResponseDto[] {
    return this.reportService.getAllReports(type);
  }

  @Get(':id')
  @ApiOkResponse({ type: BookingResponseDto })
  getReportById(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('type', new ParseEnumPipe(BookingType)) type: BookingType
  ): BookingResponseDto {
    return this.reportService.getReportById(type, id);
  }

  @Post()
  @ApiOkResponse({ type: BookingResponseDto })
  createReport(
    @Body() body: CreateBookingDto,
    @Param('type', new ParseEnumPipe(BookingType)) type: BookingType
  ): BookingResponseDto {
    return this.reportService.createReport(type, body);
  }

  @Put(':id')
  @ApiOkResponse({ type: BookingResponseDto })
  updateReport(
    @Param('type', new ParseEnumPipe(BookingType)) type: BookingType,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateBookingDto
  ): BookingResponseDto {
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
