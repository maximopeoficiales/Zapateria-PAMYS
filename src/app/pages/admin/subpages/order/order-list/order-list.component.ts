import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client, Order, OrderStatus } from 'src/app/core/api/models';
import { ClientControllerService, OrderControllerService, OrderStatusControllerService } from 'src/app/core/api/services';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.sass']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];
  order: Order = {};
  users: Client[] = [];
  orderStatuses: OrderStatus[] = [];
  showModalDetail: boolean = false;  
  selectSearcher: FormControl = new FormControl();

  constructor(private orderService: OrderControllerService,
              private orderStatusesService: OrderStatusControllerService,
              private usersService: ClientControllerService) { }

  ngOnInit(): void {
    this.orderService.getAllUsingGET3().subscribe(data => {
      this.orders = data;
    });

    this.orderStatusesService.getAllUsingGET4().subscribe(data => {
      this.orderStatuses = data;
    });

    this.usersService.getAllUsingGET1().subscribe(data => {
      this.users = data;
    });
  }
  
  showDetail(order: Order) {
    this.order = order;
    this.showModalDetail = true;
  }

  closeDetail() {
    this.showModalDetail = false;
  }

  getSubTotalRow(price: number, quantity: number) {
    return price*quantity;
  }

  getSubTotal(): number {
    return this.order.products!.reduce((i, j) => i + j.price! * j.quantity!, 0);
  }

  getIgv(): number {
    return this.getSubTotal() * 0.18;
  }

  getTotal() {
    return this.getSubTotal() * 1.18;
  }

}
