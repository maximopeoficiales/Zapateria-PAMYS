import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculoIconCardComponent } from './circulo-icon-card.component';

describe('CirculoIconCardComponent', () => {
  let component: CirculoIconCardComponent;
  let fixture: ComponentFixture<CirculoIconCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirculoIconCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CirculoIconCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
