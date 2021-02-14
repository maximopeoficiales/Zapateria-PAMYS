import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Params} from '@angular/router';
import {Product} from 'src/app/core/api/models';
import {
  ProductControllerService,
  PublicControllerService,
} from 'src/app/core/api/services';
import {CartService} from 'src/app/core/services/cart/cart.service';
import {ProductsService} from 'src/app/core/services/products/products.service';
import {MesageComponent} from '../../core/modules/shared/components/mesage/mesage.component';
import {SwalAlerts} from 'src/app/core/modules/shared/swalAlerts/SwalAlerts'
import {TypeMessageSwal} from 'src/app/core/modules/shared/swalAlerts/TypeMessageSwal';
import {environment} from 'src/environments/environment';

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
  swal: SwalAlerts = new SwalAlerts();
  availableStock: number = 0;

  constructor(
    private route: ActivatedRoute,
    private service: PublicControllerService, // private productservice: ProductsService, // private _snackBar: MatSnackBar
    private cartService: CartService
  ) {}

  // TODO:MANERA ADECUADA DE RICIBIR DATOS
  ngOnInit(): void {
    this.cargarProduct();
    this.cargarProducts();
  }

  aumentar(): void {
    this.quantityProduct++;
  }

  decrementar(): void {
    if (this.quantityProduct > 1) {
      this.quantityProduct--;
      this.verifyQuantity();
    }
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
      this.quantityProduct = 1;
      document.querySelector("#productImage")?.scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
      this.service.getProductBySlugUsingGET(slug).subscribe((product) => {
        product.thumbnailUrl =
          product.thumbnailUrl !== ''
            ? `${environment.url_products_images}${product.thumbnailUrl}`
            : 'https://commercial.bunn.com/img/image-not-available.png';
        this.product = product;
        this.availableStock = this.product.stock!;
        this.product.productsImages?.forEach((e) => {
          e.url = `${environment.url_productos_other_images}${e.url}`;
          this.imgProductStatic = product.thumbnailUrl || '';
          console.log(product);
        });
      });
    });
  }

  cargarProducts(): void {
    this.service.getAllProductsUsingGET().subscribe((products) => {
      // console.log(products);
      this.productsRelacionados = products;
    });
  }

  addItem(product: Product) {
    if (this.quantityProduct > this.availableStock) {
      this.swal.showMessage("Error:",
        "La cantidad excede el stock disponible.",
        TypeMessageSwal.ERROR,
        1000,
        false);
    } else {
      this.cartService.addItem(product, this.quantityProduct);
      this.availableStock -= this.quantityProduct;
    }
  }

}

