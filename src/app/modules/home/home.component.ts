import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/Client';
import { HttpService } from 'src/app/core/services/http/http.service';
import { Selector } from 'src/app/core/services/http/Selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  clients : Client[];

  constructor(private service : HttpService) { 
    this.clients = new Array<Client>();
  }

  ngOnInit(): void {
    this.service.get(Selector.allClients)
        .subscribe(data => this.clients = data);
  }

}
