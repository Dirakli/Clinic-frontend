import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDoctorComponent } from './registration-doctor.component';

describe('RegistrationDoctorComponent', () => {
  let component: RegistrationDoctorComponent;
  let fixture: ComponentFixture<RegistrationDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
