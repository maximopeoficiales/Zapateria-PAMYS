import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { CategoryControllerService } from 'src/app/core/api/services';
import { CategoryClass } from '../../../../../core/models/Category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.sass'],
})
export class CategoryDetailComponent implements OnInit {
  category: CategoryClass = new CategoryClass();
  titulo = 'Create Category';
  constructor(
    private service: CategoryControllerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarCategory();
  }
  create(): void {
    //  crea el cliente, luego le redirije
    this.service.saveUsingPOST(this.category).subscribe((res) => {
      this.router.navigate(['/admin/categorys']);
      swal.fire(
        'Nueva Categoria Creada',
        `Categoria ${res.name} ha sido registrada`,
        'success'
      );
    });
  }
  update(): void {
    //  crea el cliente, luego le redirije
    this.service.updateUsingPUT(this.category).subscribe((category) => {
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
      const id = params.id;
      if (id) {
        this.titulo = 'Edit Category';
        this.service.getByIdUsingGET(id).subscribe((category) => {
          this.category = category;
          console.log(category);
        });
      }
    });
  }
}
