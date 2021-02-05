import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReutilizableFooterComponent } from './info-reutilizable-footer.component';

describe('InfoReutilizableFooterComponent', () => {
  let component: InfoReutilizableFooterComponent;
  let fixture: ComponentFixture<InfoReutilizableFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoReutilizableFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoReutilizableFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
