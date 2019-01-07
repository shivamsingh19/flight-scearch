import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirSearchPageComponent } from './air-search-page.component';

describe('AirSearchPageComponent', () => {
  let component: AirSearchPageComponent;
  let fixture: ComponentFixture<AirSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
