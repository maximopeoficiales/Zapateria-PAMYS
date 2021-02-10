import { Component, OnInit } from '@angular/core';
import {Productsnew  } from '../../../../../core/models/Productsnew';
  import { ProductControllerService } from 'src/app/core/api/services';
  import { Router, ActivatedRoute } from '@angular/router';
  import swal from 'sweetalert2';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.sass']
})
export class ProductsDetailComponent implements OnInit {
  products:Productsnew = new Productsnew();
    
    titulo = 'Create products';
    constructor(
      private service: ProductControllerService,
      private router: Router,
      private activatedRoute: ActivatedRoute
    ) {}
  
    ngOnInit(): void {
      this.cargarProducts();
    }
    create(): void {
      //  crea el cliente, luego le redirije
      this.service.saveUsingPOST7(this.products).subscribe((res) => {
        this.router.navigate(['/admin/products-new']);
        swal.fire(
          'Nueva Vendor Creada',
          `Product ${res.description} ha sido registrada`,
          'success'
        );
      });
    }
    update(): void {
      //  crea el cliente, luego le redirije
      this.service.updateUsingPUT7(this.products).subscribe((products) => {
        this.router.navigate(['/admin/productss']);
        swal.fire(
          'Product Actualizada',
          `Product ${products.description} ha sido actualizado`,
          'success'
        );
      });
    }
    cargarProducts(): void {
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
  }
  
