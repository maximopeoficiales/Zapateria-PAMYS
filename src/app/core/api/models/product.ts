/* tslint:disable */
import { Category } from './category';
import { ProductImages } from './product-images';
import { Vendor } from './vendor';
export interface Product {
  category?: Category;
  dateCreated?: string;
  description?: string;
  idCategory?: number;
  idProduct?: number;
  idVendor?: number;
  name?: string;
  price?: number;
  productsImages?: Array<ProductImages>;
  salePrice?: number;
  stock?: number;
  thumbnailUrl?: string;
  vendor?: Vendor;
}
