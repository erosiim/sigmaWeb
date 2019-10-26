import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolActComponent } from './protocol-act.component';

describe('ProtocolActComponent', () => {
  let component: ProtocolActComponent;
  let fixture: ComponentFixture<ProtocolActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
