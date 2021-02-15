
import { Client, OrderDetails, OrderStatus, PaymentType, Voucher } from '../api/models';
import { Order } from '../api/models/order';

import {DocumentType } from '../api/models/document-type';
export class OrderClass implements Order {
  constructor(
public  client?: Client,
public  comment?: string,
public  dateCreated?: string,
public  documentType?: DocumentType,
public  idClient?: number,
public  idDocumentType?: number,
public  idOrder?: number,
public  idOrderStatus?: number,
public  idPaymentStatus?: number,
public  idVoucher?: number,
public  igv?: number,
public  orderStatus?: OrderStatus,
public  paymentType?: PaymentType,
public  products?: Array<OrderDetails>,
public  shippingAddress?: string,
public  subtotal?: number,
public  total?: number,
public  voucher?: Voucher,
public  zipCode?: number,

  ) {}
}




