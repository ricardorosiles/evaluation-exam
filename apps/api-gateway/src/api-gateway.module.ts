import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { SharedModule } from 'evaluation-exam/libs/shared/src';

@Module({
  imports: [
    SharedModule.registerRmq(
      'CALCULATION_SERVICE',
      process.env.RABBITMQ_CALCULATION_QUEUE,
    ),
  ],
  controllers: [ApiGatewayController],
})
export class ApiGatewayModule {}
