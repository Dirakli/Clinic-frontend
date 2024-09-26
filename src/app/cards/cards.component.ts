import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [NgFor],
  template: ` <div class="cards">
    <div class="card-wrapper" *ngFor="let item of cardsArray">
      <div class="card">
        <div class="views-pin-wrapper">
          <div class="views">
            <img src="/assets/view.svg" alt="view icon" />129 371
          </div>
          <img src="/assets/pin.svg" alt="pin icon" />
        </div>
        <img
          class="avatar"
          src="/assets/profile-picture.svg"
          alt="profile picture"
        />
        <h3 class="doctor-name">გიორგი ხორავა</h3>
        <p class="position">კარდიოლოგი / არითმოლოგი</p>
        <div class="stars">
          <img
            *ngFor="let star of starsArray"
            src="/assets/star.svg"
            alt="star icon"
          />
        </div>
        <button class="visits">
          მიღებაზე ჩაწერა
          <img class="right-arrow" src="/assets/right-arrow-dark.svg" alt="" />
        </button>
      </div>
    </div>
  </div>`,
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  starsArray = new Array(5);
  cardsArray = new Array(3);
}
