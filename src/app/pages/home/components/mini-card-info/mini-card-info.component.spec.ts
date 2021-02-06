import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCardInfoComponent } from './mini-card-info.component';

describe('MiniCardInfoComponent', () => {
  let component: MiniCardInfoComponent;
  let fixture: ComponentFixture<MiniCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCardInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
