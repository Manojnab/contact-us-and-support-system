import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmmtravelsComponent } from './rmmtravels.component';

describe('RmmtravelsComponent', () => {
  let component: RmmtravelsComponent;
  let fixture: ComponentFixture<RmmtravelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmmtravelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmmtravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
