import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineCreateComponent } from './airline-create.component';

describe('AirlineCreateComponent', () => {
  let component: AirlineCreateComponent;
  let fixture: ComponentFixture<AirlineCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirlineCreateComponent]
    });
    fixture = TestBed.createComponent(AirlineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
