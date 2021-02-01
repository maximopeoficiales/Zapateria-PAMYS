/* tslint:disable */
import { OrderDetailsPK } from './order-details-pk';
import { Product } from './product';
export interface OrderDetails {
  id?: OrderDetailsPK;
  price?: number;
  product?: Product;
  quantity?: number;
}
