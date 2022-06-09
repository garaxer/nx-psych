import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { FooDto } from '../dtos/Foo.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ type: FooDto })
  getData() {
    return this.appService.getData();
  }

  @Get('2')
  @ApiOkResponse({ type: [FooDto] })
  getDataTwo() {
    return [this.appService.getData(), this.appService.getData()];
  }
}
