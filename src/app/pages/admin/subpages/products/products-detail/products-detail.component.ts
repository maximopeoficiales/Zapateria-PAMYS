import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  ProductControllerService,
  CategoryControllerService,
  VendorControllerService,
} from 'src/app/core/api/services';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Product } from 'src/app/core/api/models';
import { Vendor } from '../../../../../core/api/models/vendor';
import { Category } from '../../../../../core/api/models/category';
import { environment } from 'src/environments/environment';
import { ProductUploadService } from '../service/product-upload.service';
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.sass'],
})
export class ProductsDetailComponent implements OnInit {
  urlProduct = environment.url_products_images;
  urlProductImage = environment.url_productos_other_images;
  urlProductNotFound = environment.url_product_not_found;
  vendors: Vendor[] = [];
  categorys: Category[] = [];
  titulo = 'Create products';

  photoSelected!: File;
  photoImagesSelected: any = [];
  products: Product = {};

  constructor(
    private service: ProductControllerService,
    private uploadProductService: ProductUploadService,
    private categoryService: CategoryControllerService,
    private vendorService: VendorControllerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarProduct();
    this.cargarCategorysAndVendor();
  }
  create(): void {
    //  crea el cliente, luego le redirije
    this.service.saveUsingPOST7(this.products).subscribe((res) => {
      this.uploadPhoto(res.idProduct || 0, () => {
        this.uploadPhotoImages(res.idProduct || 0);
        this.router.navigate(['/admin/products']);
        swal.fire(
          'Nueva Producto Creado',
          `Product ${res.name} ha sido registrado`,
          'success'
        );
      });
    });
  }
  update(): void {
    //  crea el cliente, luego le redirije
    this.uploadPhoto(this.products.idProduct || 0, () => {
      this.uploadPhotoImages(this.products.idProduct || 0);
      this.service.updateUsingPUT7(this.products).subscribe((products) => {
        this.router.navigate(['/admin/products']);
        swal.fire(
          'Product Actualizada',
          `Product ${products.name} ha sido actualizado`,
          'success'
        );
      });
    });
  }
  cargarProduct(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id) {
        this.titulo = 'Edit products';
        this.service.getByIdUsingGET7(id).subscribe((products) => {
          this.products = products;
          console.log(products);
        });
      }
    });
  }
  cargarCategorysAndVendor(): void {
    this.vendorService
      .getAllUsingGET9()
      .subscribe((vendors) => (this.vendors = vendors));

    this.categoryService
      .getAllUsingGET()
      .subscribe((categorys) => (this.categorys = categorys));
  }
  selectedPhoto(event: any): void {
    if (event.target.files[0].type.search('image') !== -1) {
      this.photoSelected = event.target.files[0];
      console.log(this.photoSelected);
    } else {
      swal.fire('Error en el archivo', `Elije una imagen por favor`, 'error');
    }
  }
  selectedPhotoImages(event: any): void {
    for (let index = 0; index < event.target.files.length; index++) {
      const file = event.target.files[index];
      if (index <= 2) {
        this.photoImagesSelected.push(file);
      }
    }
    console.log(this.photoImagesSelected);
  }
  uploadPhoto(idProduct: number, callback: any = null): void {
    if (this.photoSelected) {
      if (this.photoSelected.type.search('image') !== -1) {
        this.uploadProductService
          .subirFotoProducto(this.photoSelected, idProduct)
          .subscribe((event) => {
            if (event.type === HttpEventType.Response) {
              callback();
            }
          });
      }
    }
  }

  uploadPhotoImages(idProduct: number): void {
    if (this.photoImagesSelected.length !== 0) {
      this.uploadProductService
        .subirFotoProductoImages(this.photoImagesSelected, idProduct)
        .subscribe((event) => {
          if (event.type === HttpEventType.Response) {
          }
        });
    }
  }
}
