import { Product} from 'src/app/core/api/models';
import { ProductControllerService } from 'src/app/core/api/services';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  constructor(private service: ProductControllerService) { }

  listProduct: Product[] = [];
  dataSource: any = null;
  displayedColumns: string[] = ['ID', 'Date', 'Description','IdCategory','IdVendor','Name','Price','Sale_Price','Stock','Url' ,'Actions'];
  ocultado = 'd-none';
  showSpinner = true;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.loadProductList();
  }
  //methods
  loadProductList(): void {
    setTimeout(() => {
      this.service.getAllUsingGET7().subscribe((products) => {
        this.listProduct = products;
        this.chargingTableList();
        this.ocultado = products.length == 0 ? 'd-none' : '';
        this.showSpinner = false;
      });
    }, 300);
  }
  chargingTableList(): void {
    this.dataSource = new MatTableDataSource<Product>(this.listProduct);
    this.dataSource.paginator = this.paginator;
  }

  delete(product: Product): void {
    swal
      .fire({
        title: '¿Esta seguro de borrarlo?',
        text: 'Este borrado es irrevertible!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero borrarlo!',
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.service
            .deleteUsingDELETE6(product.idProduct || 0)
            .subscribe((e) => {
              this.listProduct = this.listProduct.filter(
                (cat) => cat.idProduct !== product.idProduct
              );
              swal.fire(
                'Borrado!',
                `El Product ${product.description} ha sido borrado`,
                'success'
              );
              this.chargingTableList();
            });
        }
      });
  }
}
