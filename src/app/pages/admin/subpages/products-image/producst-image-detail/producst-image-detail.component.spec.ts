import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducstImageDetailComponent } from './producst-image-detail.component';

describe('ProducstImageDetailComponent', () => {
  let component: ProducstImageDetailComponent;
  let fixture: ComponentFixture<ProducstImageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducstImageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducstImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
