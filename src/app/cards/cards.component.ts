import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { CardDetailComponent } from '../card-detail/card-detail.component';
import { UserBookingsComponent } from '../user-bookings/user-bookings.component';
import { DoctorBookingsComponent } from '../doctor-bookings/doctor-bookings.component';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    CardDetailComponent,
    UserBookingsComponent,
    DoctorBookingsComponent,
  ],
  template: `
    <div *ngIf="!selectedCard" class="cards">
      <div
        class="card-wrapper"
        *ngFor="let card of cardsArray"
        (click)="viewCardDetails(card)"
      >
        <div class="card">
          <div class="views-pin-wrapper">
            <div class="views">
              <img src="/assets/view.svg" alt="view icon" />{{ card.views }}
            </div>
            <img class="pin" src="/assets/pin.svg" alt="pin icon" />
          </div>
          <img class="avatar" [src]="card.avatar" alt="profile picture" />
          <h3 class="doctor-name">{{ card.name }}</h3>
          <p class="position">{{ card.position }}</p>
          <div class="stars">
            <img
              *ngFor="let star of starsArray"
              src="/assets/star.svg"
              alt="star icon"
            />
          </div>
          <button class="visits">
            მიღებაზე ჩაწერა
            <img
              class="right-arrow"
              src="/assets/right-arrow-dark.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>

    <div class="cards unpin" *ngIf="!selectedCard">
      <div
        class="card-wrapper"
        *ngFor="let card of cardsArray"
        (click)="viewCardDetails(card)"
      >
        <div class="card unpin-card">
          <div class="views-pin-wrapper">
            <div class="views">
              <img src="/assets/view.svg" alt="view icon" />{{ card.views }}
            </div>
            <img class="pin" src="/assets/pin-dark.svg" alt="pin icon" />
          </div>
          <img class="avatar" [src]="card.avatar" alt="profile picture" />
          <h3 class="doctor-name">{{ card.name }}</h3>
          <p class="position">{{ card.position }}</p>
          <div class="stars">
            <img
              *ngFor="let star of starsArray"
              src="/assets/star.svg"
              alt="star icon"
            />
          </div>
          <button class="visits visits-unpin">
            მიღებაზე ჩაწერა
            <img
              class="right-arrow"
              src="/assets/right-arrow-dark.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>

    <div class="details-wrapper" *ngIf="!selectedCard">
      <div class="see-details" (click)="viewCardDetails(card)">
        სრულად ნახვა
      </div>
      <div class="line"></div>
    </div>

    <app-card-detail
      *ngIf="selectedCard"
      [selectedCard]="selectedCard"
      [starsArray]="starsArray"
      (backToCards)="goBack()"
    >
    </app-card-detail>

    <!-- <app-user-bookings *ngIf="selectedCard" (backToCards)="goBack()">
    </app-user-bookings> -->

    <!-- <app-doctor-bookings *ngIf="selectedCard"></app-doctor-bookings> -->
  `,
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  starsArray = Array(5);

  cardsArray = [
    {
      name: 'გიორგი ხორავა',
      position: 'კარდიოლოგი / არითმოლოგი',
      views: '129 371',
      avatar: '/assets/profile-picture.svg',
    },
    {
      name: 'მარიამ თავაძე',
      position: 'ქირურგი',
      views: '98 562',
      avatar: '/assets/profile-picture.svg',
    },
    {
      name: 'ზაზა ჯოხაძე',
      position: 'ორთოპედი',
      views: '76 482',
      avatar: '/assets/profile-picture.svg',
    },
  ];

  selectedCard: any = null; // To store the clicked card details
  card: any;

  // Function to handle clicking on a card
  viewCardDetails(card: any) {
    this.selectedCard = card; // Store clicked card details
  }

  // Function to go back to the card list
  goBack() {
    this.selectedCard = null; // Clear selected card to show list again
  }
}
