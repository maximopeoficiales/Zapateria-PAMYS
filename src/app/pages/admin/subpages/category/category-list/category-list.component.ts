import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../../../../../core/services/categorys/category.service';
import { Category } from '../../../../../core/models/Category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass'],
})
export class CategoryListComponent implements OnInit, AfterViewInit {
  constructor(private service: CategoryService) {}
  listCategorys: Category[] = [];
  dataSource: any = null;
  displayedColumns: string[] = ['ID', 'Name', 'Description', 'Active'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.loadCategoryList();
  }
  loadCategoryList(): void {
    this.service.findALl().subscribe((catogorys) => {
      this.listCategorys = catogorys;
      console.log(this.listCategorys);
      this.dataSource = new MatTableDataSource<Category>(this.listCategorys);
      this.dataSource.paginator = this.paginator;
    });
  }
  ngAfterViewInit(): void {}
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
