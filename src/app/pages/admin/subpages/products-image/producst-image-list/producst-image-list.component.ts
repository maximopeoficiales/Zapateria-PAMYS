import { Component, OnInit ,ViewChild} from '@angular/core';
import { ProductImages } from 'src/app/core/api/models';
import { ProductImagesControllerService } from 'src/app/core/api/services';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import swal from 'sweetalert2';



@Component({
  selector: 'app-producst-image-list',
  templateUrl: './producst-image-list.component.html',
  styleUrls: ['./producst-image-list.component.sass']
})
export class ProducstImageListComponent implements OnInit {
  constructor(private service: ProductImagesControllerService) {}

  listProductImages: ProductImages[] = [];
  dataSource: any = null;
  displayedColumns: string[] = ['IdProduct', 'IdProductImages', 'url', 'Actions'];
  ocultado = 'd-none';
  showSpinner = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.loadProductImagesList();
  }
  //methods
  loadProductImagesList(): void {
    setTimeout(() => {
      this.service.getAllUsingGET8().subscribe((productimage) => {
        this.listProductImages = productimage;
        this.chargingTableList();
        this.ocultado = productimage.length == 0 ? 'd-none' : '';
        this.showSpinner = false;
      });
    }, 300);
  }
  chargingTableList(): void {
    this.dataSource = new MatTableDataSource<ProductImages>(this.listProductImages);
    this.dataSource.paginator = this.paginator;
  }

  delete(productimage: ProductImages): void {
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
            .deleteUsingDELETE7(productimage.idProductImages || 0)
            .subscribe((e) => {
              this.listProductImages = this.listProductImages.filter(
                (cat) => cat.idProductImages !== productimage.idProductImages
              );
              swal.fire(
                'Borrado!',
                `El ProductImages ${productimage.idProductImages} ha sido borrado`,
                'success'
              );
              this.chargingTableList();
            });
        }
      });
  }
}
