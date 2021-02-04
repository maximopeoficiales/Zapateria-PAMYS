import { OrderStatus } from '../api/models';

export class OrderStatusClass implements OrderStatus {
  constructor(
    public idOrderStatus?: number,
    public status ?: string
    
  ) {}
}