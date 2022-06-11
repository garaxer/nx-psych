import { Module } from '@nestjs/common';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizedModule } from './modules/authorized/authorized.module';
import { CartModule } from './modules/cart/cart.module';
import { ServicesModule } from './modules/services/services.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    //   ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
    AuthorizedModule,
    CartModule,
    ServicesModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
