import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderControllerService } from 'src/app/core/api/services';
import { OrderStatusClass } from 'src/app/core/models/OrderStatus';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.sass']
})
export class OrderDetailComponent implements OnInit {
  orderStatus: OrderStatusClass = new OrderStatusClass();
  titulo = 'Create Order-Status';
  constructor(
    private service: OrderControllerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarOrderStatus();
  }
  create(): void {
    //  crea el cliente, luego le redirije
    this.service.saveUsingPOST3(this.orderStatus).subscribe((res) => {
      this.router.navigate(['/admin/order-status']);
      swal.fire(
        'Nueva.orderStatus Creada',
        `Order status ${res.orderStatus} ha sido registrada`,
        'success'
      );
    });
  }
  update(): void {
    //  crea el cliente, luego le redirije
    this.service.updateUsingPUT3(this.orderStatus).subscribe((orderStatus) => {
      this.router.navigate(['/admin/vendors']);
      swal.fire(
        'Categoria Actualizada',
        `Categoria ${orderStatus.orderStatus} ha sido actualizado`,
        'success'
      );
    });
  }
  cargarOrderStatus(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id) {
        this.titulo = 'Edit orderStatus';
        this.service.getByIdUsingGET3(id).subscribe((orderStatus) => {
          this.orderStatus = orderStatus;
          console.log(orderStatus);
        });
      }
    });
  }
}
