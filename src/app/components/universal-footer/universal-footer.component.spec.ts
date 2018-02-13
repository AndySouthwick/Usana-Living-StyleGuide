import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalFooterComponent } from './universal-footer.component';

describe('UniversalFooterComponent', () => {
  let component: UniversalFooterComponent;
  let fixture: ComponentFixture<UniversalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversalFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
