import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home-mini-card-info',
  templateUrl: './mini-card-info.component.html',
  styleUrls: ['./mini-card-info.component.sass'],
})
export class MiniCardInfoComponent implements OnInit {
  @Input() title = '';
  @Input() content = 'Sin Contenido';
  constructor() {}

  ngOnInit(): void {}
}
