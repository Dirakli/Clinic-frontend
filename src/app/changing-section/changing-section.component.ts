import { Component, Input } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { NgIf, NgStyle, NgClass, NgFor } from '@angular/common';
import { AuthenticationComponent } from '../authentication/authentication.component';

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
    <div class="list-card-wrapper">
      <div class="list">
        <div class="categories-line-container">
          <h1 class="categories">კატეგორიები</h1>
          <div class="line"></div>
        </div>
        <ul class="unordered-list">
          <li *ngFor="let item of categories" class="list-item">
            <span class="count">({{ item.count }})</span>

            <span class="name">{{ item.name }}</span>
          </li>
        </ul>
        <div class="show-more-container">
          <div class="line-bottom"></div>
          <div class="show-more">
            <span class="show"> მეტის ნახვა </span
            ><img class="arrow" src="/assets/blue-arrow.svg" alt="arrow" />
          </div>
        </div>
      </div>
      <div class="cards">Cards</div>
    </div>
  `,
  styleUrls: ['./changing-section.component.css'],
})
export class ChangingSectionComponent {
  @Input() showRegistration = false;
  @Input() showAuthentication = false;

  categories = [
    { name: 'ანდროლოგი', count: 14 },
    { name: 'ანესთეზიოლოგი', count: 61 },
    { name: 'კარდიოლოგი', count: 467 },
    { name: 'კოსმეტოლოგი', count: 43 },
    { name: 'ლაბორანტი', count: 107 },
    { name: 'ოჯახის ექიმი', count: 238 },
    { name: 'პედიატრი', count: 366 },
    { name: 'ტოქსიკოლოგი', count: 8 },
    { name: 'ტრანსფუზილოგი', count: 15 },
    { name: 'გინეკოლოგი', count: 171 },
    { name: 'დერმატოლოგი', count: 68 },
    { name: 'ენდოკრინოლოგი', count: 32 },
    { name: 'გასტროენტეროლოგი', count: 56 },
    { name: 'თერაპევტი', count: 114 },
  ];
}
