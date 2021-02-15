import {Component, OnInit} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {Order, PaymentType, DocumentType, Client, OrderDetails, OrderDetailsCustom} from 'src/app/core/api/models';
import {Product} from 'src/app/core/api/models/product';
import {DocumentTypeControllerService, OrderControllerService, OrdersDetailsControllerService, PaymentTypeControllerService} from 'src/app/core/api/services';
import {LoginService} from 'src/app/core/services/auth/login/login.service';
import {CartService} from 'src/app/core/services/cart/cart.service';
import {SwalAlerts} from '../../swalAlerts/SwalAlerts';
import {TypeMessageSwal} from '../../swalAlerts/TypeMessageSwal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService,
    private paymentTypeService: PaymentTypeControllerService,
    private documentTypeService: DocumentTypeControllerService,
    private userService: LoginService,
    private orderService: OrderControllerService,
    private orderDetailService: OrdersDetailsControllerService,
    private router: Router) {}


  products!: Array<{product: Product; amount: number}>;
  total!: number;
  dataSource!: MatTableDataSource<{product: Product; amount: number}>;
  swal: SwalAlerts = new SwalAlerts();
  order: Order = {};
  orderDetails: OrderDetailsCustom[] = [];
  paymentTypes: PaymentType[] = [];
  documentTypes: DocumentType[] = [];
  user: Client = {};

  ngOnInit(): void {
    this.fetchProducts();
    this.total = this.cartService.getTotal();
    this.dataSource = new MatTableDataSource<{
      product: Product;
      amount: number;
    }>(this.products);
    if (this.userService.isLogged()) {
      this.user = this.userService.getUser()!;
      this.paymentTypeService.getAllUsingGET6().subscribe(res => {
        this.paymentTypes = res;
      });
      this.documentTypeService.getAllUsingGET2().subscribe(res => {
        this.documentTypes = res;
      });
    }
  }

  getTotal() {
    this.total = this.cartService.getTotal();
  }

  fetchProducts() {
    this.products = this.cartService.getCart();
  }

  updateTable() {
    this.dataSource = new MatTableDataSource<{
      product: Product;
      amount: number;
    }>(this.products);
    this.getTotal();
  }

  delete(product: Product) {
    this.cartService.removeProduct(product);
    this.updateTable();
  }

  increase(product: Product) {

    let thisProduct = this.products.find(p => p.product.idProduct == product.idProduct);
    if (thisProduct?.amount! >= product.stock!) {
      this.swal.showMessage("Error.",
        "La cantidad excede el stock",
        TypeMessageSwal.ERROR,
        1000, false);
    } else {
      this.cartService.increaseItem(product);
      this.updateTable();
    }
  }

  getDate(): string {
    let date = new Date();
    let year = date.getFullYear();
    let month: any = date.getMonth() + 1;
    let day: any = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}T00:00:00Z`;
  }

  decrease(product: Product) {
    this.cartService.decreaseItem(product);
    this.updateTable();
  }

  displayedColumns: string[] = [
    'Title',
    'Price',
    'Amount',
    'Actions'
  ];

  checkout() {

    if (!this.userService.isLogged()) {
      this.swal.showMessage("Error",
        "Primero debe loguearse.",
        TypeMessageSwal.ERROR,
        0, undefined);
      this.router.navigate(['/login']);
      return;
    }

    let selectedDoctype = <string>document.getElementById("docType")?.textContent;
    let docType = this.documentTypes.find(e => e.doctype == selectedDoctype);
    let selectedPaymentType = <string>document.getElementById("paymentType")?.textContent;
    let paymentType = this.paymentTypes.find(e => e.type == selectedPaymentType);
    if (this.cartService.getCartItemsCount().value < 1) {
      this.swal.showMessage("Advertencia",
        "No ha agregado ningún producto",
        TypeMessageSwal.WARNING,
        1200, false);
      return;
    }

    if (docType === undefined || paymentType === undefined) {
      this.swal.showMessage("No se puede generar el pedido",
        "Debe seleccionar un documento de venta y un tipo de pago",
        TypeMessageSwal.WARNING,
        1200, false);
      return;
    }
    this.order = {
      idClient: this.user.idClient,
      dateCreated: this.getDate(),
      shippingAddress: this.order.shippingAddress! == undefined ? this.user.address! : this.order.shippingAddress!,
      idDocumentType: docType?.idDocumentType,
      idPaymentStatus: paymentType?.idPaymentType,
      idOrderStatus: 1,
      total: this.cartService.getTotal(),
      zipCode: this.order.zipCode! == undefined ? this.user.zip_code! : this.order.zipCode!,
      comment: this.order.comment! == undefined ? "Sin comentarios" : this.order.comment
    };
    console.log(this.order);
    this.cartService.getCart().forEach(e => {
      this.orderDetails.push({
        idProduct: e.product.idProduct,
        price: e.product.price,
        quantity: e.amount
      });
    });


    this.orderService.saveUsingPOST3(this.order).subscribe((savedOrder) => {
      this.orderDetails.forEach((e) => {
        e.idOrder = savedOrder.idOrder;
        this.orderDetailService.saveUsingPOST5(e).subscribe();
        console.log(e);
      });
      this.swal.showMessage("Gracias por su compra",
        "Pedido registrado",
        TypeMessageSwal.SUCCESS,
        1200, false);
      this.cartService.initialiseCart();
      this.router.navigate(['/home']);
      return;
    });
  }

}
