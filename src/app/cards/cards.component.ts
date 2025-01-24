import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common'; // Angular common directives
import { CardDetailComponent } from '../card-detail/card-detail.component'; // Adjust this path if necessary
import { UserBookingsComponent } from '../user-bookings/user-bookings.component'; // Adjust path
import { DoctorBookingsComponent } from '../doctor-bookings/doctor-bookings.component'; // Adjust path
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    NgIf, // For *ngIf directive
    NgFor, // For *ngFor directive
    CardDetailComponent, // Standalone component
    UserBookingsComponent, // Standalone component
    DoctorBookingsComponent, // Standalone component
  ],
  templateUrl: './cards.component.html', // Corrected template file path
  styleUrls: ['./cards.component.css'], // Corrected styles file path
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

  constructor(private cdr: ChangeDetectorRef) {}

  goBack() {
    console.log('CardsComponent goBack called');
    this.selectedCard = null; // Clear selected card
    this.cdr.detectChanges(); // Trigger change detection manually
  }
}
