/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AsyncApiDocumentBuilder, AsyncApiModule } from 'nestjs-asyncapi';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;

  const config = new DocumentBuilder()
    .setTitle('Sigma API')
    .setDescription('Deployments, Builds & Versions API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const asyncApiOptions = new AsyncApiDocumentBuilder()
  .setTitle('Sigma API')
  .setDescription('Deployments, Builds & Versions API')
  .setVersion('1.0')
  .addServer('ws-server', {
    url: `ws://localhost:${port}`,
    protocol: 'socket.io'
  })
  .build();

const asyncapiDocument = await AsyncApiModule.createDocument(app, asyncApiOptions);
await AsyncApiModule.setup('/async-api', app, asyncapiDocument);

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
