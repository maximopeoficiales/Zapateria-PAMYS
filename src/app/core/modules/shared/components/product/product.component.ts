import { Component, OnInit ,Input,Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/Product';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  today= new Date();
  @Input () product: Product = new Product();
  @Output () productClicked  :EventEmitter <any> = new EventEmitter (); 

  constructor(private router: Router,
              private cartService: CartService) { }

  ngOnInit(): void {
  } 

  addToCart(product: Product){
    // console.log("agregando al carrtio de compras");
    //emitiendo los valores cuado se hace click
    // this.productClicked.emit(this.product);
    // console.log('product : '+this.product.id)
    // Agregando el producto al carrito, usando el cartService
    this.cartService.addItem(product);
  }

  loadDetails(id: number) {
    this.router.navigate([`/product/${id}`]);
  }

}
