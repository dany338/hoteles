import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHotelComponentComponent } from './crear-hotel-component.component';

describe('CrearHotelComponentComponent', () => {
  let component: CrearHotelComponentComponent;
  let fixture: ComponentFixture<CrearHotelComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearHotelComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHotelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
