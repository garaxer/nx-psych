import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './modules/cart/cart.module';
import { ServicesModule } from './modules/services/services.module';
import { AuthModule } from './auth/auth.module';
import { AuthorizedModule } from './modules/authorized/authorized.module';
import { AuthzModule } from './modules/authz/authz.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ServicesModule,
    AuthzModule,
    // Examples:
    CartModule,
    AuthorizedModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
