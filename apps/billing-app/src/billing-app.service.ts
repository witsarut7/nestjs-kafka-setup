import { Injectable } from '@nestjs/common';
import { OrderCreateEvent } from 'apps/api-gateway/src/order-created';

@Injectable()
export class BillingAppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(data: OrderCreateEvent) {
    console.log({ data });
  }
}
