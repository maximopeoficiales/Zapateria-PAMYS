import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import swal from 'sweetalert2';
import { CategoryControllerService } from 'src/app/core/api/services';
import { Category } from 'src/app/core/api/models';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass'],
})
export class CategoryListComponent implements OnInit, AfterViewInit {
  constructor(private service: CategoryControllerService) {}
  // Placeholder data, para mostrar el boton de agregar categorias
  listCategorys: Category[] = [];
  dataSource: any = null;
  displayedColumns: string[] = ['ID', 'Name', 'Description', 'Actions'];
  ocultado = 'd-none';
  showSpinner = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.loadCategoryList();
  }
  //methods
  loadCategoryList(): void {
    setTimeout(() => {
      this.service.getAllUsingGET().subscribe((categorys) => {
        this.listCategorys = categorys;
        this.chargingTableList();
        // con esto muestro la tabla
        this.ocultado = categorys.length == 0 ? 'd-none' : '';
        // oculto el spinner
        this.showSpinner = false;
      });
    }, 300);
  }
  chargingTableList(): void {
    this.dataSource = new MatTableDataSource<Category>(this.listCategorys);
    this.dataSource.paginator = this.paginator;
  }

  delete(category: Category): void {
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
            .deleteUsingDELETE(category.idCategory || 0)
            .subscribe((e) => {
              this.listCategorys = this.listCategorys.filter(
                (cat) => cat.idCategory !== category.idCategory
              );
              swal.fire(
                'Borrado!',
                `La categoria ${category.name} ha sido borrado`,
                'success'
              );
              this.chargingTableList();
            });
        }
      });
  }
}
