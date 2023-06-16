import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteflightListComponent } from './routeflight-list.component';

describe('RouteflightListComponent', () => {
  let component: RouteflightListComponent;
  let fixture: ComponentFixture<RouteflightListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteflightListComponent]
    });
    fixture = TestBed.createComponent(RouteflightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
