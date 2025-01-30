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
      category: 'pinned',
      data: [
        {
          name: 'გიორგი ხორავა',
          position: 'კარდიოლოგი / არითმოლოგი',
          views: '129 371',
          avatar: '/assets/profile-picture.svg',
        },
        {
          name: 'ნატალია გოგოხია',
          position: 'ბავშვთა და მოზრდილთა კარდიოლოგი',
          views: '129 371',
          avatar: '/assets/natalia.svg',
        },
        {
          name: 'ანა დვალი',
          position: 'კარდიოქირურგი',
          views: '129 371',
          avatar: '/assets/ana.svg',
        },
      ],
    },
    {
      category: 'unpinned',
      data: [
        {
          name: 'გიორგი გაბიტაშვილი',
          position: 'კარდიოლოგი / არითმოლოგი',
          views: '129 371',
          avatar: '/assets/giorgi.svg',
        },
        {
          name: 'ბარბარე ქორთუა',
          position: 'კარდიოქირურგი',
          views: '129 371',
          avatar: '/assets/barbare.svg',
        },
        {
          name: 'სოფია გოგიაშვილი',
          position: 'ბავშვთა და მოზრდილთა კარდიოლოგი',
          views: '129 371',
          avatar: '/assets/sofia.svg',
        },
      ],
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
