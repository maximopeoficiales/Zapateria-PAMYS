import {Component, OnInit} from '@angular/core';
import {OrderControllerService} from 'src/app/core/api/services';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {

  constructor(private service: OrderControllerService) {}

  ngOnInit(): void {
    this.service.getAllUsingGET3().subscribe(res => console.log(res.filter(e => e.idClient == 2)));
  }

}
