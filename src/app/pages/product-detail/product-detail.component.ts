import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/core/api/models';
import {
  ProductControllerService,
  PublicControllerService,
} from 'src/app/core/api/services';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MesageComponent } from '../../core/modules/shared/components/mesage/mesage.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
})
export class ProductDetailComponent implements OnInit {
  imagenesSecundarias!: ElementRef;
  durationInSeconds = 5;

  product: Product = {};
  quantityProduct = 1;
  imgProductStatic = '';
  productsRelacionados: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private service: PublicControllerService // private productservice: ProductsService, // private _snackBar: MatSnackBar
  ) {}

  // TODO:MANERA ADECUADA DE RICIBIR DATOS
  ngOnInit(): void {
    this.cargarProduct();
    this.cargarProducts();
  }

  decrementar(): void {
    this.quantityProduct--;
    this.verifyQuantity();
  }
  aumentar(): void {
    this.quantityProduct++;
    this.verifyQuantity();
  }
  verifyQuantity(): void {
    if (this.quantityProduct <= 0) {
      this.quantityProduct = 1;
    }
  }
  cambiarImagen(imagenUrl: string | undefined): void {
    if (imagenUrl !== this.product.thumbnailUrl) {
      this.product.thumbnailUrl = imagenUrl;
    }
  }
  cargarProduct(): void {
    this.route.params.subscribe((params: Params) => {
      const slug = params.slug;
      // this.fetchProduct(id);
      this.service.getProductBySlugUsingGET(slug).subscribe((product) => {
        product.thumbnailUrl =
          product.thumbnailUrl !== ''
            ? product.thumbnailUrl
            : 'https://commercial.bunn.com/img/image-not-available.png';
        this.product = product;
        this.imgProductStatic = product.thumbnailUrl || '';
        console.log(product);
      });
    });
  }

  cargarProducts(): void {
    this.service.getAllProductsUsingGET().subscribe((products) => {
      // console.log(products);
      this.productsRelacionados = products;
    });
  }
  // }
  // openSnackBar() {
  //   this._snackBar.openFromComponent(MesageComponent, {
  //     duration: this.durationInSeconds * 1000,
  //   });
  // }

  // fetchProduct(id: number) {
  //   // this.productservice.getProduct(id)
  //   //   .subscribe(product => {
  //   //     console.log(product)
  //   //     this.product = product;
  //   //   })
  //   // this.product = this.productservice.getProduct(id);
  // }

  // createProduct() {
  //   // const newProduct: Product = {
  //   //   id: '22',
  //   //   title: 'nuevo producto',
  //   //   image: 'assets/Image/img1.jpg',
  //   //   price: 3000,
  //   //   description: 'bla blaaaaaaaaaaaaaaa'
  //   // }
  //   // this.productservice.createProduct(newProduct)
  //   //   .subscribe(product => {
  //   //     console.log(product)
  //   //     this.product = product;
  //   //   })
  // }

  // updateProduct() {
  //   const updateProduc: Partial<Product> = {
  //     id: 30,
  //     title: 'Editado producto',
  //     image: 'assets/Image/img1.jpeg',
  //     price: 5000,
  //     description: 'Producto esditado',
  //   };

  //   this.productservice.updateProduct(1, updateProduc).subscribe((product) => {
  //     console.log(product);
  //   });
  // }

  // deleteProduct() {
  //   this.productservice.deleteProduct(333).subscribe((rta) => {
  //     console.log(rta);
  //   });
  // }
}
