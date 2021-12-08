import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyRoutePreloadComponent } from './lazy-route-preload.component';

describe('LazyRoutePreloadComponent', () => {
  let component: LazyRoutePreloadComponent;
  let fixture: ComponentFixture<LazyRoutePreloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyRoutePreloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyRoutePreloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
