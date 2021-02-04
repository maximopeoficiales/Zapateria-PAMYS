import { Component, OnInit } from '@angular/core';
import { PaymentType } from '../../../../../core/api/models/payment-type';
import { PaymentTypeControllerService } from 'src/app/core/api/services';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.sass'],
})
export class PaymentDetailComponent implements OnInit {
  paymentType: PaymentType = { idPaymentType: undefined, type: undefined };
  titulo = 'Create paymentType';
  constructor(
    private service: PaymentTypeControllerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarPaymentType();
  }
  create(): void {
    //  crea el cliente, luego le redirije
    this.service.saveUsingPOST6(this.paymentType).subscribe((res) => {
      this.router.navigate(['/admin/payment-types']);
      swal.fire(
        'Nueva Payment Type Creada',
        ` Payment Type ${res.type} ha sido registrada`,
        'success'
      );
    });
  }
  update(): void {
    //  crea el cliente, luego le redirije
    this.service.updateUsingPUT6(this.paymentType).subscribe((paymentType) => {
      this.router.navigate(['/admin/payment-types']);
      swal.fire(
        'Payment Type Actualizada',
        `Payment Type ${paymentType.type} ha sido actualizado`,
        'success'
      );
    });
  }
  cargarPaymentType(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id) {
        this.titulo = 'Edit paymentType';
        this.service.getByIdUsingGET6(id).subscribe((paymentType) => {
          this.paymentType = paymentType;
          console.log(paymentType);
        });
      }
    });
  }
}
