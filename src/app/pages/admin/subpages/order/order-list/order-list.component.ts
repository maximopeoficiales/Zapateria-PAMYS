import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/api/models';
import { OrderControllerService } from 'src/app/core/api/services';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.sass']
})
export class OrderListComponent implements OnInit {

  orders: Observable<Order[]>;

  constructor(private orderService: OrderControllerService) { 
    this.orders = new Observable<Order[]>();
  }

  ngOnInit(): void {
    this.orders = this.orderService.getAllUsingGET3();
  }

}
