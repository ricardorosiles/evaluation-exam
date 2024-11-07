import { SharedService } from 'evaluation-exam/libs/shared/src';
import { Controller, Inject } from '@nestjs/common';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';

@Controller()
export class CalculationController {
  constructor(
    @Inject('SharedServiceInterface')
    private readonly sharedService: SharedService,
  ) {}

  @MessagePattern({ cmd: 'calculate-numbers' })
  calculate(n: number) {
    return {
      isPair: n % 2 === 0,
      isPrime: this.isPrime(n),
      factorial: this.factorial(n),
      sumN: this.sumN(n),
      factors: this.factors(n),
      fibonacci: this.fibonacci(n),
    };
  }

  isPrime(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  factorial(n: number): number {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  sumN(n: number): number {
    return (n * (n + 1)) / 2;
  }

  factors(n: number): number[] {
    const result = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) result.push(i);
    }
    return result;
  }

  fibonacci(n: number): number {
    if (n <= 1) return n;
    let a = 0,
      b = 1,
      temp;
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
}
