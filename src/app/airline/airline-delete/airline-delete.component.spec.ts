import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineDeleteComponent } from './airline-delete.component';

describe('AirlineDeleteComponent', () => {
  let component: AirlineDeleteComponent;
  let fixture: ComponentFixture<AirlineDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirlineDeleteComponent]
    });
    fixture = TestBed.createComponent(AirlineDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
