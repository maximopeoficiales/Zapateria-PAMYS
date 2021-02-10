import { ProductImageClass } from '../../../../../core/models/porduct-image';
import { ProductImagesControllerService } from 'src/app/core/api/services';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producst-image-detail',
  templateUrl: './producst-image-detail.component.html',
  styleUrls: ['./producst-image-detail.component.sass']
})
export class ProducstImageDetailComponent implements OnInit {
  productImage: ProductImageClass = new ProductImageClass();
  titulo = 'Create productImage';
  constructor(
    private service: ProductImagesControllerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarProductImage();
  }
  create(): void {
    //  crea el cliente, luego le redirije
    this.service.saveUsingPOST8(this.productImage).subscribe((res) => {
      this.router.navigate(['/admin/products-image']);
      swal.fire(
        'Nuevo ProductImage Creada',
        `ProductImage ${res.idProduct} ha sido registrada`,
        'success'
      );
    });
  }
  update(): void {
    //  crea el cliente, luego le redirije
    this.service.updateUsingPUT8(this.productImage).subscribe((productImage) => {
      this.router.navigate(['/admin/prodcuts-image']);
      swal.fire(
        'ProductImage Actualizada',
        `ProductImage ${productImage.idProduct} ha sido actualizado`,
        'success'
      );
    });
  }
  cargarProductImage(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id) {
        this.titulo = 'Edit productImage';
        this.service.getByIdUsingGET8(id).subscribe((productImage) => {
          this.productImage = productImage;
          console.log(productImage);
        });
      }
    });
  }
}
