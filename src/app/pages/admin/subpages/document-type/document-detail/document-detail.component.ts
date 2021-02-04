import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentTypeControllerService } from 'src/app/core/api/services';
import { documentTypeClass } from 'src/app/core/models/documentType';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.sass']
})
export class DocumentDetailComponent implements OnInit {
  documentType: documentTypeClass = new documentTypeClass();
  titulo = 'Create DocumentType';
  constructor(
    private service: DocumentTypeControllerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarducmentType();
  }
  create(): void {
    //  crea el cliente, luego le redirije
    this.service.saveUsingPOST2(this.documentType).subscribe((res) => {
      this.router.navigate(['/admin/document-type']);
      swal.fire(
        'Nueva document-type Creada',
        `Categoria ${res.doctype} ha sido registrada`,
        'success'
      );
    });
  }
  update(): void {
    //  crea el cliente, luego le redirije
    this.service.updateUsingPUT2(this.documentType).subscribe((documentType) => {
      this.router.navigate(['/admin/document-type']);
      swal.fire(
        'Dodctype Actualizada',
        `Dcotype ${documentType.doctype} ha sido actualizado`,
        'success'
      );
    });
  }
  cargarducmentType(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id) {
        this.titulo = 'Edit documentType';
        this.service.getByIdUsingGET2(id).subscribe((documentType) => {
          this.documentType = documentType;
        });
      }
    });
  }
}


