import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountShowComponent } from './my-account-show.component';

describe('MyAccountShowComponent', () => {
  let component: MyAccountShowComponent;
  let fixture: ComponentFixture<MyAccountShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccountShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
