import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteflightCreateComponent } from './routeflight-create.component';

describe('RouteflightCreateComponent', () => {
  let component: RouteflightCreateComponent;
  let fixture: ComponentFixture<RouteflightCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteflightCreateComponent]
    });
    fixture = TestBed.createComponent(RouteflightCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
