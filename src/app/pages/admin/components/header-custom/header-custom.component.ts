import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-custom',
  templateUrl: './header-custom.component.html',
  styleUrls: ['./header-custom.component.sass'],
})
export class HeaderCustomComponent implements OnInit {
  @Input() title: string = 'title';
  @Input() subtitle: string = 'subtitle';
  constructor() {}

  ngOnInit(): void {}
}
