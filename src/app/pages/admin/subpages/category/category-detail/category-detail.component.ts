import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/core/models/Category';
import { CategoryService } from '../../../../../core/services/categorys/category.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.sass'],
})
export class CategoryDetailComponent implements OnInit {
  category: Category = new Category();
  titulo = 'Create Category';
  constructor(
    private service: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarCategory();
  }
  create(): void {
    //  crea el cliente, luego le redirije
    this.service.save(this.category).subscribe((category) => {
      this.router.navigate(['/admin/categorys']);
      swal.fire(
        'Nueva Categoria Creada',
        `Categoria ${category.name} ha sido registrada`,
        'success'
      );
    });
  }
  update(): void {
    //  crea el cliente, luego le redirije
    this.service.update(this.category).subscribe((category) => {
      this.router.navigate(['/admin/categorys']);
      swal.fire(
        'Categoria Actualizada',
        `Categoria ${category.name} ha sido actualizado`,
        'success'
      );
    });
  }
  cargarCategory(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params.id;
      if (id) {
        this.titulo = 'Edit Category';
        this.service.findById(id).subscribe((category) => {
          this.category = category;
        });
      }
    });
  }
}
