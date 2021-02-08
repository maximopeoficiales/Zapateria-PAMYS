import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home-title',
  templateUrl: './home-title.component.html',
  styleUrls: ['./home-title.component.sass'],
})
export class HomeTitleComponent implements OnInit {
  @Input() title = 'Ingrese un titulo';
  @Input() subtitle = 'Ingrese un Subtitulo';
  constructor() {}

  ngOnInit(): void {}
}
