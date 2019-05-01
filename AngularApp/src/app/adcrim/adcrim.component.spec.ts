import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcrimComponent } from './adcrim.component';

describe('AdcrimComponent', () => {
  let component: AdcrimComponent;
  let fixture: ComponentFixture<AdcrimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdcrimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
