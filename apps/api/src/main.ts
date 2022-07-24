/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import path from 'path';
import { writeFileSync } from 'graceful-fs';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

import { AppModule } from './app/app.module';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );

  const apiSwaggerOptions = new DocumentBuilder()
    .setTitle('Nx Psych Api')
    .setDescription('The API for Nx Psych App')
    .setVersion('1.0.0')
    .build();

  const apiSwaggerDocs = SwaggerModule.createDocument(app, apiSwaggerOptions);
  SwaggerModule.setup('/docs', app, apiSwaggerDocs);

  // create openapi.json
  const outputPath = path.resolve(process.cwd(), 'openapi.json');
  writeFileSync(outputPath, JSON.stringify(apiSwaggerDocs, null, 2), {
    encoding: 'utf8',
  });

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
