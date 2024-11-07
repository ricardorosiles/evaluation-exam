import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { SharedService } from 'evaluation-exam/libs/shared/src';

import { CalculationServiceModule } from './calculation-service.module';

async function bootstrap() {
  const app = await NestFactory.create(CalculationServiceModule);

  const configService = app.get(ConfigService);
  const sharedService = app.get(SharedService);

  const queue = configService.get('RABBITMQ_CALCULATION_QUEUE');

  app.connectMicroservice(sharedService.getRmqOptions(queue));
  app.startAllMicroservices();
}
bootstrap();
