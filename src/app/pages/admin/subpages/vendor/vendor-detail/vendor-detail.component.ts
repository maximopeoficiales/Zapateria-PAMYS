import { Component, OnInit } from '@angular/core';
import { VendorClass } from '../../../../../core/models/Vendor';
import { VendorControllerService } from 'src/app/core/api/services';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.sass'],
})
export class VendorDetailComponent implements OnInit {
  vendor: VendorClass = new VendorClass();
  titulo = 'Create vendor';
  constructor(
    private service: VendorControllerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarVendor();
  }
  create(): void {
    //  crea el cliente, luego le redirije
    this.service.saveUsingPOST10(this.vendor).subscribe((res) => {
      this.router.navigate(['/admin/vendors']);
      swal.fire(
        'Nueva Vendor Creada',
        `Categoria ${res.company} ha sido registrada`,
        'success'
      );
    });
  }
  update(): void {
    //  crea el cliente, luego le redirije
    this.service.updateUsingPUT9(this.vendor).subscribe((vendor) => {
      this.router.navigate(['/admin/vendors']);
      swal.fire(
        'Categoria Actualizada',
        `Categoria ${vendor.company} ha sido actualizado`,
        'success'
      );
    });
  }
  cargarVendor(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id) {
        this.titulo = 'Edit vendor';
        this.service.getByIdUsingGET9(id).subscribe((vendor) => {
          this.vendor = vendor;
          console.log(vendor);
        });
      }
    });
  }
}
