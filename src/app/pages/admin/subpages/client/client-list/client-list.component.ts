import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from 'src/app/core/api/models';
import { ClientControllerService } from 'src/app/core/api/services';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import swal from 'sweetalert2';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.sass'],
})
export class ClientListComponent implements OnInit {
  constructor(private service: ClientControllerService) {}
  // Placeholder data, para mostrar el boton de agregar categorias
  clientList: Client[] = [];
  dataSource: any = null;
  displayedColumns: string[] = [
    'ID',
    'FirstName',
    'LastName',
    'Actions',
  ];
  ocultado = 'd-none';
  showSpinner = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.loadClientList();
  }
  //methods
  loadClientList(): void {
    setTimeout(() => {
      this.service.getAllUsingGET1().subscribe((clients) => {
        this.clientList = clients;
        console.log(clients);

        this.chargingTableList();
        this.ocultado = clients.length == 0 ? 'd-none' : '';
        this.showSpinner = false;
      });
    }, 300);
  }
  chargingTableList(): void {
    this.dataSource = new MatTableDataSource<Client>(this.clientList);
    this.dataSource.paginator = this.paginator;
  }

  delete(client: Client): void {
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
            .deleteUsingDELETE1(client.idClient || 0)
            .subscribe((e) => {
              this.clientList = this.clientList.filter(
                (cat) => cat.idClient !== client.idClient
              );
              swal.fire(
                'Borrado!',
                `El cliente ${client.firstName} ha sido borrado`,
                'success'
              );
              this.chargingTableList();
            });
        }
      });
  }
}
