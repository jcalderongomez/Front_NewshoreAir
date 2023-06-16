import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineUpdateComponent } from './airline-update.component';

describe('AirlineUpdateComponent', () => {
  let component: AirlineUpdateComponent;
  let fixture: ComponentFixture<AirlineUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirlineUpdateComponent]
    });
    fixture = TestBed.createComponent(AirlineUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
