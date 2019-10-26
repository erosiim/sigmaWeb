import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserscontrolComponent } from './userscontrol.component';

describe('UserscontrolComponent', () => {
  let component: UserscontrolComponent;
  let fixture: ComponentFixture<UserscontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserscontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserscontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
