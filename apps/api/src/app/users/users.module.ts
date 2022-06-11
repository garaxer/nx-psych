import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { AuthorizedModule } from '../modules/authorized/authorized.module';
import { UsersController } from './users.controller';

import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
  imports: [AuthModule],
})
export class UsersModule {}
