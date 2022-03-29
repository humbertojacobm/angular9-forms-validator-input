import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCrossFieldComponent } from './hero-cross-field.component';

describe('HeroCrossFieldComponent', () => {
  let component: HeroCrossFieldComponent;
  let fixture: ComponentFixture<HeroCrossFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCrossFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCrossFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
