import { NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <div class="wrapper">
      <img class="avatar" [src]="selectedCard?.avatar" alt="profile picture" />
      <button (click)="goBack()">goBack</button>
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
      <div class="divider">
        <div class="calendar-box">
          <div class="header empty">
            <div class="left-click-arrow">
              <img src="/assets/left.svg" alt="left arrow" />
            </div>
            <div class="right-click-arrow">
              <img src="/assets/right.svg" alt="right arrow" />
            </div>
          </div>

          <div class="weekdays">
            <div><span>17</span> ( ორშ )</div>
            <div><span>18</span> ( სამ )</div>
            <div><span>19</span> ( ოთხ )</div>
            <div><span>20</span> ( ხუთ )</div>
            <div><span>21</span> ( პარ )</div>
            <div><span>22</span> ( შაბ )</div>
            <div><span>23</span> ( კვი )</div>
          </div>

          <div class="time-column">
            <div class="time">9:00 - 10:00</div>
            <div class="time">10:00 - 11:00</div>
            <div class="time">11:00 - 12:00</div>
            <div class="time">12:00 - 13:00</div>
            <div class="time">13:00 - 14:00</div>
            <div class="time">14:00 - 15:00</div>
            <div class="time">15:00 - 16:00</div>
            <div class="time">16:00 - 17:00</div>
            <div class="time">17:00 - 18:00</div>
          </div>

          <div class="time-slots">
            <div (click)="onInput(!showInput)" class="cube">
              <span class="plus">+</span> დაჯავშნა
              <div
                (click)="onBook(!showAttention)"
                class="inputDescription"
                *ngIf="showInput"
              >
                <p class="greenText">გსურთ ვიზიტის დაჯავშნა ?</p>
                <p class="text">შეგიძლიათ მიუთუთოთ თქვენი პრობლემა</p>
                <input placeholder="აღწერა..." type="text" class="descInput" />
                <button class="buttonBook">დაჯავშნა</button>
              </div>
              <div class="attention" *ngIf="showAttention">
                <p class="redText">დასაჯავშნად გთხოვთ გაიაროთ</p>
                <p class="TextSecond">ავტორიზაცია ან რეგისტრაცია.</p>
              </div>
            </div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
          </div>

          <div class="time-slots">
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
          </div>

          <div class="time-slots">
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
          </div>

          <div class="time-slots">
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
          </div>

          <div class="time-slots">
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
          </div>

          <div class="time-slots">
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
          </div>

          <div class="time-slots">
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
            <div class="cube"><span class="plus">+</span> დაჯავშნა</div>
          </div>
        </div>
        <div class="buttons-wrapper">
          <button class="edit">
            <img
              class="image-edit"
              src=" ./assets/book-edit.svg "
              alt="booking edit icon"
            />
            რედაქტირება
          </button>
          <button class="dlt">
            <img
              class="image-dlt"
              src="./assets/book-dlt.svg"
              alt="booking delete icon"
            />
            წაშლა
          </button>
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

  showInput = false;
  showAttention = false;

  onInput(isShowInput: boolean) {
    this.showInput = isShowInput;
  }

  onBook(isShowAttention: boolean) {
    this.showAttention = isShowAttention;
  }

  goBack() {
    this.backToCards.emit();
  }
}
