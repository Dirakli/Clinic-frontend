import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBookingsComponent } from './doctor-bookings.component';

describe('DoctorBookingsComponent', () => {
  let component: DoctorBookingsComponent;
  let fixture: ComponentFixture<DoctorBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorBookingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
