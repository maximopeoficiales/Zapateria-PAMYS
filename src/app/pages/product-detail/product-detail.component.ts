import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/models/Product';
import { MesageComponent } from '../../core/modules/shared/components/mesage/mesage.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product();

  constructor(private route: ActivatedRoute, 
              private productservice: ProductsService, 
              private _snackBar: MatSnackBar) { }

  durationInSeconds = 5;
  //TODO:MANERA ADECUADA DE RICIBIR DATOS 
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      // this.fetchProduct(id);
      this.product = this.productservice.getProduct(id);
    })
  }
  openSnackBar() {
    this._snackBar.openFromComponent(MesageComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  fetchProduct(id: number) {
    // this.productservice.getProduct(id)
    //   .subscribe(product => {
    //     console.log(product)
    //     this.product = product;
    //   })
    // this.product = this.productservice.getProduct(id);
  }

  createProduct() {
    // const newProduct: Product = {
    //   id: '22',
    //   title: 'nuevo producto',
    //   image: 'assets/Image/img1.jpg',
    //   price: 3000,
    //   description: 'bla blaaaaaaaaaaaaaaa'
    // }
    // this.productservice.createProduct(newProduct)
    //   .subscribe(product => {
    //     console.log(product)
    //     this.product = product;
    //   })


  }

  updateProduct() {
    const updateProduc: Partial<Product> = {
      id: 30,
      title: 'Editado producto',
      image: 'assets/Image/img1.jpeg',
      price: 5000,
      description: 'Producto esditado'
    };

    this.productservice.updateProduct(1, updateProduc)
      .subscribe(product => {
        console.log(product)
      })
  }

  deleteProduct() {
    this.productservice.deleteProduct(333)
      .subscribe(rta => {
        console.log(rta)
      })
  }

}
