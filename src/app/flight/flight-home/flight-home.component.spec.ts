import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightHomeComponent } from './flight-home.component';

describe('FlightHomeComponent', () => {
  let component: FlightHomeComponent;
  let fixture: ComponentFixture<FlightHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightHomeComponent]
    });
    fixture = TestBed.createComponent(FlightHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
