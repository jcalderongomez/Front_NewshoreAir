import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteflightUpdateComponent } from './routeflight-update.component';

describe('RouteflightUpdateComponent', () => {
  let component: RouteflightUpdateComponent;
  let fixture: ComponentFixture<RouteflightUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteflightUpdateComponent]
    });
    fixture = TestBed.createComponent(RouteflightUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
