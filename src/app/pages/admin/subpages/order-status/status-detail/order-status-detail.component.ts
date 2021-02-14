import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderControllerService, OrderStatusControllerService } from 'src/app/core/api/services';
import { OrderStatusClass } from 'src/app/core/models/OrderStatus';
import { OrderStatus } from 'src/app/core/api/models';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-status-detail.component.html',
  styleUrls: ['./order-status-detail.component.sass']
})
export class OrderStatusDetailComponent implements OnInit {
  orderStatus: OrderStatus = {};
  titulo = 'Create Order-Status';
  constructor(
    private service: OrderStatusControllerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarOrderStatus();
  }
  create(): void {
    //  crea el cliente, luego le redirije
    this.service.saveUsingPOST4(this.orderStatus).subscribe((res) => {
      this.router.navigate(['/admin/order-status']);
      swal.fire(
        'Nuevo estado de orden Creado',
        `Estado de orden ${res.status} registrado`,
        'success'
      );
    });
  }
  update(): void {
    //  crea el cliente, luego le redirije
    this.service.updateUsingPUT4(this.orderStatus).subscribe((orderStatus) => {
      this.router.navigate(['/admin/order-status']);
      swal.fire(
        'Estado de pedido Actualizado',
        `Estado ${orderStatus.status} ha sido actualizado`,
        'success'
      );
    });
  }
  cargarOrderStatus(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id) {
        this.titulo = 'Edit orderStatus';
        this.service.getByIdUsingGET4(id).subscribe((orderStatus) => {
          this.orderStatus = orderStatus;
          console.log(orderStatus);
        });
      }
    });
  }
}
