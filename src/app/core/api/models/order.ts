/* tslint:disable */
import { Client } from './client';
import { DocumentType } from './document-type';
import { OrderStatus } from './order-status';
import { PaymentType } from './payment-type';
import { OrderDetails } from './order-details';
import { Voucher } from './voucher';
export interface Order {
  client?: Client;
  comment?: string;
  dateCreated?: string;
  documentType?: DocumentType;
  idClient?: number;
  idDocumentType?: number;
  idOrder?: number;
  idOrderStatus?: number;
  idPaymentStatus?: number;
  idVoucher?: number;
  igv?: number;
  orderStatus?: OrderStatus;
  paymentType?: PaymentType;
  products?: Array<OrderDetails>;
  shippingAddress?: string;
  subtotal?: number;
  total?: number;
  voucher?: Voucher;
  zipCode?: number;
}
