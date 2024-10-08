import { NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="wrapper">
      <img class="avatar" [src]="selectedCard?.avatar" alt="profile picture" />
      <div class="info-wrapper">
        <h3 class="doctor-name">{{ selectedCard?.name }}</h3>
        <p class="position">{{ selectedCard?.position }}</p>
        <div class="stars">
          <img
            *ngFor="let star of starsArray"
            src="/assets/star.svg"
            alt="star icon"
          />
        </div>
      </div>
      <div class="vertical-line"></div>
      <div class="descriptions">
        <p class="position-one">
          <span>2017 - დღემდე</span>, ჩვენი კლინიკის გენერალური დირექტორი
        </p>
        <p class="position-two">
          <span>2002 - დღემდე</span>, ჩვენი კომპიუტერული ტომოგრაფიის
          განყოფილების ხელმძღვანელი
        </p>
        <p class="position-three">
          <span>1995 - დღემდე</span>, კარდიოლოგი / არითმოლოგი
        </p>
      </div>
    </div>

    <div class="calendar">
      <div class="year-button-wrapper">
        <span class="year">2023</span>
        <div class="arrows-button">
          <button class="leftarrow-button">
            <img src="/assets/leftarrow.svg" alt="left arrow" />
          </button>
          <p class="months">აპრილი</p>
          <button class="rightarrow-button">
            <img src="/assets/rightarrow.svg" alt="right arrow" />
          </button>
        </div>
      </div>
      <div class="calendar">
        <div class="header empty"></div>

        <div class="header">Monday</div>
        <div class="header">Tuesday</div>
        <div class="header">Wednesday</div>
        <div class="header">Thursday</div>
        <div class="header">Friday</div>
        <div class="header">Saturday</div>
        <div class="header">Sunday</div>

        <div class="time-column">
          <div class="time">8:00 AM</div>
          <div class="time">9:00 AM</div>
          <div class="time">10:00 AM</div>
          <div class="time">11:00 AM</div>
          <div class="time">12:00 PM</div>
          <div class="time">1:00 PM</div>
          <div class="time">2:00 PM</div>
          <div class="time">3:00 PM</div>
          <div class="time">4:00 PM</div>
        </div>

        <div class="time-slots">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>

        <div class="time-slots">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>

        <div class="time-slots">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>

        <div class="time-slots">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>

        <div class="time-slots">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>

        <div class="time-slots">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>

        <div class="time-slots">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent {
  @Input() selectedCard: any;
  @Input() starsArray: any[] = [];
  @Output() backToCards: EventEmitter<void> = new EventEmitter<void>();

  goBack() {
    this.backToCards.emit();
  }
}
