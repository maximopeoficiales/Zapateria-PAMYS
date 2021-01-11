import { Component, OnInit ,Input,Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  today= new Date();
  @Input () product: Product = new Product();
  @Output () productClicked  :EventEmitter <any> = new EventEmitter (); 

  constructor(private router: Router) { }

  ngOnInit(): void {
  } 

  addCart(){
    console.log("agregando al carrtio de compras");
    //emitiendo los valores cuado se hace click
    this.productClicked.emit(this.product);
    console.log('product : '+this.product.id)
  }

  loadDetails(id: number) {
    this.router.navigate([`/product/${id}`]);
  }

}
