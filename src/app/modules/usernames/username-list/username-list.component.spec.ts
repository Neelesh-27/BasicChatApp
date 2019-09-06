import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameListComponent } from './username-list.component';

describe('UsernameListComponent', () => {
  let component: UsernameListComponent;
  let fixture: ComponentFixture<UsernameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
