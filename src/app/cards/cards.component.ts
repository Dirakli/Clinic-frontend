import { Component, Output, output } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { CardDetailComponent } from '../card-detail/card-detail.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [NgIf, NgFor, CardDetailComponent],
  templateUrl: './cards.component.html',
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

  @Output() selectedCard: any = null;
  card: any;

  // Function to handle clicking on a card
  viewCardDetails(card: any) {
    this.selectedCard = card;
  }

  // Function to go back to the card list

  constructor(private cdr: ChangeDetectorRef) {}

  goBack() {
    console.log('CardsComponent goBack called');
    this.selectedCard = null;
    this.cdr.detectChanges();
  }
}
