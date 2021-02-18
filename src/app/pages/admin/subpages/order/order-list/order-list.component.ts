import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client, Order, OrderStatus, Product } from 'src/app/core/api/models';
import {
  ClientControllerService,
  OrderControllerService,
  OrderStatusControllerService,
} from 'src/app/core/api/services';
// import * as html2pdf from 'html2pdf.js/types/index';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { environment } from 'src/environments/environment';
import { LoginService } from 'src/app/core/services/auth/login/login.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.sass'],
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  order: Order = {};
  users: Client[] = [];
  orderStatuses: OrderStatus[] = [];
  showModalDetail: boolean = false;
  selectSearcher: FormControl = new FormControl();
  selectedStatus: string = '';
  dateCreated: string = '';
  editDate: boolean = false;
  editStatus: boolean = false;
  isPrinting: boolean = false;
  loading: boolean = true;
  productImagesUrl: string = environment.url_products_images;

  filterFunction: any;
  user: Client = {};
  statusSelected: string = '';

  value = '';
  constructor(
    private orderService: OrderControllerService,
    private orderStatusesService: OrderStatusControllerService,
    private usersService: ClientControllerService,
    private clientService: LoginService
  ) {
    this.user = clientService.getUser()!;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.orderService.getAllUsingGET3().subscribe((data) => {
        this.orders = data;
        this.orderStatusesService.getAllUsingGET4().subscribe((data) => {
          this.orderStatuses = data;
          this.usersService.getAllUsingGET1().subscribe((data) => {
            this.users = data;
            this.loading = false;
          });
        });
      });
    }, 300);

    if (this.orders.length == 0) {
      setTimeout(() => {
        this.orderService.getAllUsingGET3().subscribe((orders) => {
          this.orders = orders.filter((o) => o.idClient == this.user.idClient);
          this.loading = false;
        });
      }, 300);
    }
  }

  getImageUrl(product: Product): string {
    return this.productImagesUrl + product.thumbnailUrl;
  }

  toggleEditDate() {
    this.editDate = !this.editDate;
  }

  toggleEditStatus() {
    this.editStatus = !this.editStatus;
    let newStatusID = this.orderStatuses.find(
      (e) => e.status == this.selectedStatus
    )?.idOrderStatus;
    this.order.idOrderStatus = newStatusID;
  }

  togglePrintState() {
    this.editStatus = false;
    this.editDate = false;
    this.isPrinting = !this.isPrinting;
  }

  getUserImageURL(order: Order): string {
    return environment.url_client_images + order.client!.profilePictureUrl;
  }

  showDetail(order: Order) {
    this.order = order;
    this.selectedStatus = order.orderStatus?.status!;
    this.dateCreated = order.dateCreated!;
    this.editDate = false;
    this.editStatus = false;
    this.showModalDetail = true;
  }

  closeDetail() {
    this.showModalDetail = false;
  }

  getSubTotalRow(price: number, quantity: number) {
    return price * quantity;
  }

  getSubTotal(): number {
    return this.order.products!.reduce(
      (i, j) => i + j.product!.price! * j.quantity!,
      0
    );
  }

  getIgv(): number {
    return this.getSubTotal() * 0.18;
  }

  getTotal() {
    return this.getSubTotal() * 1.18;
  }

  formatDate() {
    let res = this.dateCreated.replace('/', '-') + 'T00:00:00Z';
    // console.log(res);
    return res;
  }

  updateOrder() {
    let newStatusID = this.orderStatuses.find(
      (e) => e.status == this.selectedStatus
    )?.idOrderStatus;
    this.order.idOrderStatus = newStatusID;
    this.order.total = this.getTotal();
    this.order.dateCreated = this.formatDate();
    this.orderService.updateUsingPUT3(this.order).subscribe(() => {
      this.closeDetail();
      this.ngOnInit();
    });
  }

  printOrder() {
    this.togglePrintState();
    let data = document.getElementById('orderDetail');
    html2canvas(data!)
      .then((canvas) => {
        var imgWidth = 210;
        var pageHeight = 295;
        var imgHeight = (canvas.height * imgWidth) / canvas.width;
        var heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png');
        let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save(`Pedido-${this.order.idOrder}.pdf`); // Generated PDF
      })
      .then(() => {
        this.togglePrintState();
      });
  }
  filterByStatus() {
    clearTimeout(this.filterFunction);
    this.loading = true;
    this.filterFunction = setTimeout(() => {
      this.orderService.getAllUsingGET3().subscribe((orders) => {
        this.ngOnInit();
        this.orders = orders.filter(
          (o) =>
            o.idClient == this.user.idClient &&
            o.orderStatus?.status! == this.statusSelected
        );
        this.loading = false;
      });
    }, 300);
  }
}
