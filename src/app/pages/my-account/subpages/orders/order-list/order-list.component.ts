import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Client, Order} from 'src/app/core/api/models';
import {OrderControllerService} from 'src/app/core/api/services';
import {LoginService} from 'src/app/core/services/auth/login/login.service';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.sass']
})
export class OrderListComponent implements OnInit {

  loading: boolean = true;
  orders: Order[] = [];
  user: Client = {};
  imagesUrl: string = environment.url_client_images;

  constructor(
    private orderService: OrderControllerService,
    private clientService: LoginService,
    private router: Router
  ) {
    this.user = clientService.getUser()!;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.orderService.getAllUsingGET3().subscribe(orders => {
        this.orders = orders.filter(o => o.idClient == this.user.idClient);
        this.loading = false;
      });
    }, 300);
  }

  getUserImageURL(): string {
    return this.imagesUrl + this.user.profilePictureUrl;
  }

  uploadVoucher() {
    this.router.navigate(['/my-account/voucher']);
  }
}
