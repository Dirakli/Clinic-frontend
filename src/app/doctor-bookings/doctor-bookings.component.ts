import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-doctor-bookings',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <div class="main-wrapper">
      <div class="user-information">
        <img
          class="profile-picture-two"
          src="/assets/profile-picture-two.svg"
          alt="profile picture"
        />
        <h1 class="doctor">გიორგი ხორავა</h1>
        <p class="proffession">ექიმი</p>
        <span class="position">კარდიოლოგი / არითმოლოგი</span>
        <div class="stars">
          <img
            *ngFor="let star of starsArray"
            src="/assets/star.svg"
            alt="star icon"
          />
        </div>
        <p class="id">პირადი ნომერი :</p>
        <span class="id-number">00000000000</span>
        <p class="email">Email:</p>
        <span class="gmail">costumer&#64;gmail.com</span>
        <p class="password-recover">პაროლის შეცვლა</p>
        <p class="my-bookings">დაჯავშნილია :</p>
        <span class="numbers"> ( 20 )</span>
      </div>
      <div class="calendar-wrapper">
        <div class="calendar">
          <div class="year-button-wrapper">
            <span class="year">2023</span>
            <div class="arrows-button">
              <button (click)="goToPreviousMonth()" class="leftarrow-button">
                <img src="/assets/leftarrow.svg" alt="left arrow" />
              </button>
              <p class="months">{{ months[currentMonthIndex] }}</p>
              <button (click)="goToNextMonth()" class="rightarrow-button">
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
              <div class="container-edit-information">
                <button class="edit">
                  <img
                    class="image-edit"
                    src=" ./assets/book-edit.svg "
                    alt="booking edit icon"
                  />
                  რედაქტირება
                </button>
                <p class="description-edit">*აღწერის ცვლილება</p>
              </div>
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
      </div>
    </div>
  `,
  styleUrl: './doctor-bookings.component.css',
})
export class DoctorBookingsComponent {
  @Input() selectedCard: any;
  // @Input() starsArray: any[] = [];
  starsArray = Array(5);

  showInput = false;
  showAttention = false;

  onInput(isShowInput: boolean) {
    this.showInput = isShowInput;
  }

  onBook(isShowAttention: boolean) {
    this.showAttention = isShowAttention;
  }

  months: string[] = [
    'იანვარი', // January
    'თებერვალი', // February
    'მარტი', // March
    'აპრილი', // April
    'მაისი', // May
    'ივნისი', // June
    'ივლისი', // July
    'აგვისტო', // August
    'სექტემბერი', // September
    'ოქტომბერი', // October
    'ნოემბერი', // November
    'დეკემბერი', // December
  ];
  currentMonthIndex: number = 3;
  goToPreviousMonth(): void {
    this.currentMonthIndex =
      this.currentMonthIndex === 0
        ? this.months.length - 1
        : this.currentMonthIndex - 1;
  }

  goToNextMonth(): void {
    this.currentMonthIndex =
      this.currentMonthIndex === this.months.length - 1
        ? 0
        : this.currentMonthIndex + 1;
  }
}
