import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColLayoutComponent } from './two-col-layout.component';

describe('TwoColLayoutComponent', () => {
  let component: TwoColLayoutComponent;
  let fixture: ComponentFixture<TwoColLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
