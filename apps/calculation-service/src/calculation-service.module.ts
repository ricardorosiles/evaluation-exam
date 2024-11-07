import { Module } from '@nestjs/common';
import { CalculationController } from './calculation-service.controller';
import { SharedModule, SharedService } from 'evaluation-exam/libs/shared/src';

@Module({
  imports: [SharedModule],
  controllers: [CalculationController],
  providers: [
    {
      provide: 'SharedServiceInterface',
      useClass: SharedService,
    },
  ],
})
export class CalculationServiceModule {}
