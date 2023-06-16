import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineHomeComponent } from './airline-home.component';

describe('AirlineHomeComponent', () => {
  let component: AirlineHomeComponent;
  let fixture: ComponentFixture<AirlineHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirlineHomeComponent]
    });
    fixture = TestBed.createComponent(AirlineHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
