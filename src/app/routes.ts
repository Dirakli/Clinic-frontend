import { Routes } from '@angular/router';
import { ChangingSectionComponent } from './changing-section/changing-section.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistrationDoctorComponent } from './registration-doctor/registration-doctor.component';
import { AdministrationComponent } from './administration/administration.component';
export const routes: Routes = [
  { path: '', component: ChangingSectionComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'registration-doctor', component: RegistrationDoctorComponent },
  { path: 'administration-doctor', component: AdministrationComponent },
  // { path: 'login', component: AuthenticationComponent },
];
