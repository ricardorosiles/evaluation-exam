import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('calculate')
export class ApiGatewayController {
  constructor(
    @Inject('CALCULATION_SERVICE')
    private readonly calculationService: ClientProxy,
  ) {}

  @Get()
  async calculate(@Query('number') num: number) {
    return this.calculationService.send({ cmd: 'calculate-numbers' }, num);
  }
}
