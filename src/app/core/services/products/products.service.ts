import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Product } from 'src/app/core/models/Product';
import {environment} from 'src/environments/environment';
import { apiEndPoint } from '../http/constants';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
   
    {
      id:1,

      image:'assets/Image/products/img1.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    },
{
      id:2,
      image:'assets/Image/products/img2.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    },
{
      id:3,
      image:'assets/Image/products/img3.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    },
{
      id:4,
      image:'assets/Image/products/img4.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    },{
      id:5,
      image:'assets/Image/products/img5.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    },{
      id:6,
      image:'assets/Image/products/img6.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    },{
      id:7,
      image:'assets/Image/products/img7.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    },{
      id:8,
      image:'assets/Image/products/img8.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    },{
      id:9,
      image:'assets/Image/products/img9.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    }
  ];
  
  constructor(private http: HttpClient) {

  }

  getAllProducts(): Observable<Product[]> {
    return of(this.products);  
    // return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products/');
  
    // return this.http.get<Product[]>(environment.url_api+'/products/')
    // return this.http.get<Product[]>(`${environment.url_api}/products/`);
    // return this.http.get<Product[]>(`${environment.url_api}/products/`);
  }
  
  productList(){
    return  this.products;
  }
  
  getProduct(id: number): Product {
    return this.products.find(item => id == item.id)!;
    // return this.products.find();
    // return this.http.get<Product>(`${environment.url_api}/products/${id}`)
  }
  
  createProduct(product: Product){
    return this.http.post(`${environment.url_api}/products/`,product);
  
  }
  updateProduct(id: number,changes: Partial<Product>){
    return this.http.put(`${environment.url_api}/products/${id}`,changes);  
  }
  
  deleteProduct(id: number){
    return this.http.delete(`${environment.url_api}/products/${id}`);     
  }
  
  delete(id: number){
    this.products.splice(id,5);
  }
}
