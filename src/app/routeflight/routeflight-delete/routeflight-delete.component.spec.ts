import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteflightDeleteComponent } from './routeflight-delete.component';

describe('RouteflightDeleteComponent', () => {
  let component: RouteflightDeleteComponent;
  let fixture: ComponentFixture<RouteflightDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteflightDeleteComponent]
    });
    fixture = TestBed.createComponent(RouteflightDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
