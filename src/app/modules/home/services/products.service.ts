import { Product } from '../../../core/models/Product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
 products : Product [] =[
   
    {
      id:'1',
      image:'assets/Image/img1.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    },
{
      id:'2',
      image:'assets/Image/img2.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    },
{
      id:'3',
      image:'assets/Image/img3.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    } 
  ];
  
getAllProducts(){
  return this.products;
}

getProduct(id:string){
  return this.products.find(item => id == item.id);
}
}
