import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './app.dto';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreateEvent } from './order-created';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingProxyClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  createOrder(payload: CreateOrderDto) {
    this.billingProxyClient.emit(
      'order_created',
      new OrderCreateEvent('123', payload.userId, payload.price),
    );
  }
}
