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

  orders: Order[] = [];

  constructor(private orderService: OrderControllerService) { }

  ngOnInit(): void {
    this.orderService.getAllUsingGET3().subscribe(data => {
      this.orders = data;
    });
  }

}
