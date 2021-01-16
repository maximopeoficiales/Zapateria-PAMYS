import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-circulo-icon-card',
  templateUrl: './circulo-icon-card.component.html',
  styleUrls: ['./circulo-icon-card.component.sass'],
})
export class CirculoIconCardComponent implements OnInit, AfterViewInit {
  @Input() color = 'black';
  @Input() colorTexto = 'white';
  @ViewChild('circle', { static: false }) circle!: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    this.circle.nativeElement.style.backgroundColor = this.color;
    this.circle.nativeElement.style.color = this.colorTexto;
    console.log();
  }

  ngOnInit(): void {
    // this.circle.nativeElement = this.color;
  }
}
