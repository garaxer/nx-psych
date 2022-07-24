import { Module } from '@nestjs/common';

import { ServicesController } from './services.controller';
import { ServiceService } from './services.service';
@Module({
  controllers: [ServicesController],
  providers: [ServiceService],
  exports: [ServiceService],
})
export class ServicesModule {}
