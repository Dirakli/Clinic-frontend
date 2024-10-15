import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationDoctorComponent } from './administration-doctor.component';

describe('AdministrationDoctorComponent', () => {
  let component: AdministrationDoctorComponent;
  let fixture: ComponentFixture<AdministrationDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
