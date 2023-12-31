import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportUpdateComponent } from './airport-update.component';

describe('AirportUpdateComponent', () => {
  let component: AirportUpdateComponent;
  let fixture: ComponentFixture<AirportUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirportUpdateComponent]
    });
    fixture = TestBed.createComponent(AirportUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
