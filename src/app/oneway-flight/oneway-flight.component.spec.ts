import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayFlightComponent } from './oneway-flight.component';

describe('OnewayFlightComponent', () => {
  let component: OnewayFlightComponent;
  let fixture: ComponentFixture<OnewayFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnewayFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnewayFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
