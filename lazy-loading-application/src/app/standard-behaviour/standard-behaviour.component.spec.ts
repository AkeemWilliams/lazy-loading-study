import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardBehaviourComponent } from './standard-behaviour.component';

describe('StandardBehaviourComponent', () => {
  let component: StandardBehaviourComponent;
  let fixture: ComponentFixture<StandardBehaviourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardBehaviourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardBehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
