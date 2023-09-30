import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfStatesURComponent } from './conf-states-u-r.component';

describe('ConfStatesURComponent', () => {
  let component: ConfStatesURComponent;
  let fixture: ComponentFixture<ConfStatesURComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfStatesURComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfStatesURComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
