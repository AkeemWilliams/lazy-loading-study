import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadElementsComponent } from './lazy-load-elements.component';

describe('LazyLoadElementsComponent', () => {
  let component: LazyLoadElementsComponent;
  let fixture: ComponentFixture<LazyLoadElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
