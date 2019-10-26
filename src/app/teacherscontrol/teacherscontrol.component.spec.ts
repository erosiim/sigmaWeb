import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherscontrolComponent } from './teacherscontrol.component';

describe('TeacherscontrolComponent', () => {
  let component: TeacherscontrolComponent;
  let fixture: ComponentFixture<TeacherscontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherscontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherscontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
