import { Component, OnInit ,Input,Output ,EventEmitter} from '@angular/core';
import { Product } from 'src/app/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  today= new Date();
@Input () product !:Product;

@Output () productClicked  :EventEmitter <any> = new EventEmitter (); 

addCart(){
  console.log("agregando al carrtio de compras");
  //emitiendo los valores cuado se hace click
  this.productClicked.emit(this.product);
  console.log('product : '+this.product.id)
}
}
