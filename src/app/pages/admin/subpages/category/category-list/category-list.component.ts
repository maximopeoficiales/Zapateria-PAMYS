import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../../../../../core/services/categorys/category.service';
import { Category } from '../../../../../core/models/Category';
import swal from 'sweetalert2';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass'],
})
export class CategoryListComponent implements OnInit, AfterViewInit {
  constructor(private service: CategoryService) {}
  listCategorys: Category[] = [];
  dataSource: any = null;
  displayedColumns: string[] = ['ID', 'Name', 'Description', 'Actions'];
  ocultado = 'd-none';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.loadCategoryList();
  }
  //methods
  loadCategoryList(): void {
    setTimeout(() => {
      this.service.findALl().subscribe((categorys: Category[]) => {
        this.listCategorys = categorys;
        this.chargingTableList();
        this.ocultado = categorys.length == 0 ? 'd-none' : '';
      });
    }, 2000);
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
          this.service.deleteByID(category.idCategory).subscribe((e) => {
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
