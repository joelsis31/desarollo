import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfRolesComponent } from './conf-roles.component';

describe('ConfRolesComponent', () => {
  let component: ConfRolesComponent;
  let fixture: ComponentFixture<ConfRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
