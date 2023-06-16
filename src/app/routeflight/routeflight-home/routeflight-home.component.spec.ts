import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteflightHomeComponent } from './routeflight-home.component';

describe('RouteflightHomeComponent', () => {
  let component: RouteflightHomeComponent;
  let fixture: ComponentFixture<RouteflightHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteflightHomeComponent]
    });
    fixture = TestBed.createComponent(RouteflightHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
