import { Vendor } from '../api/models/vendor';

export class VendorClass implements Vendor {
  constructor(
    public idVendor?: number,
    public description?: string,
    public company?: string
  ) {}
}
