import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducstImageListComponent } from './producst-image-list.component';

describe('ProducstImageListComponent', () => {
  let component: ProducstImageListComponent;
  let fixture: ComponentFixture<ProducstImageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducstImageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducstImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
