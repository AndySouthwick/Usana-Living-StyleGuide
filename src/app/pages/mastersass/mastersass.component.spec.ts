import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersassComponent } from './mastersass.component';

describe('MastersassComponent', () => {
  let component: MastersassComponent;
  let fixture: ComponentFixture<MastersassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
