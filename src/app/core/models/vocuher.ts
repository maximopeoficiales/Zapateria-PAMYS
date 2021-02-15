
import { Voucher } from '../api/models/voucher';

export class VoucherClass implements  Voucher{
  constructor(
public amount?: number,
public  idClient?: number,
public  idClientAccount?: number,
public  idOperation?: number,
public  idStoreAccount?: number,
public  idVoucher?: number,
public  imageUrl?: string,
public  paymentDate?: string,

  ) {}
}





  