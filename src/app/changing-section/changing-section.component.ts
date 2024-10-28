import { Component, Input } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { NgIf, NgStyle, NgClass, NgFor } from '@angular/common';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { CardsComponent } from '../cards/cards.component';
import { listComponent } from '../list/list.component';
import { AdministrationComponent } from '../administration/administration.component';
@Component({
  selector: 'app-changing-section',
  standalone: true,
  imports: [
    RegistrationComponent,
    NgIf,
    AuthenticationComponent,
    NgStyle,
    NgClass,
    NgFor,
    CardsComponent,
    listComponent,
    AdministrationComponent,
  ],
  template: `
    <div *ngIf="showRegistration">
      <app-registration></app-registration>
    </div>
    <div *ngIf="showAuthentication">
      <app-authentication></app-authentication>
    </div>
    <div
      *ngIf="!showRegistration"
      class="wrapper"
      [ngStyle]="{ 'background-image': 'url(/assets/background.svg)' }"
    >
      <div class="choose-clinics">
        <p>აირჩიე კლინიკა რომელსაც შეგიძლია ენდო</p>
        <div class="location-wrapper">
          <img src="/assets/location.svg" alt="location icon" />

          <a
            class="location"
            href="https://www.google.com/maps/place/10+Iakob+Nikoladze+St,+T'bilisi/@41.7095039,44.7796769,17z/data=!3m1!4b1!4m6!3m5!1s0x40440cd3e5f99891:0x7b588ec507aa6ab4!8m2!3d41.7094999!4d44.7822518!16s%2Fg%2F11bw4r6y08?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            >იაკობ ნიკოლაძე №10</a
          >
        </div>
      </div>
    </div>
    <div *ngIf="!showRegistration" class="list-card-wrapper">
      <app-list></app-list>
      <app-cards></app-cards>
    </div>
    <!-- <app-administration *ngIf="!showRegistration"></app-administration> -->
  `,
  styleUrls: ['./changing-section.component.css'],
})
export class ChangingSectionComponent {
  @Input() showRegistration = false;
  @Input() showAuthentication = false;
}
