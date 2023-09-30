import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfStatesVisComponent } from './conf-states-vis.component';

describe('ConfStatesVisComponent', () => {
  let component: ConfStatesVisComponent;
  let fixture: ComponentFixture<ConfStatesVisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfStatesVisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfStatesVisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
