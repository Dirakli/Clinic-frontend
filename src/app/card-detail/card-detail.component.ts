import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  template: `
    <button class="goback" (click)="goBack()">უკან დაბრუნება</button>

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
            <div class="left-click-arrow" (click)="navigateLeft()">
              <img src="/assets/left.svg" alt="left arrow" />
            </div>
            <div class="right-click-arrow" (click)="navigateRight()">
              <img src="/assets/right.svg" alt="right arrow" />
            </div>
          </div>

          <div class="weekdays">
            <div *ngFor="let day of getCurrentDays(); let i = index">
              <span>{{ day }}</span> ({{ weekdays[i % 7] }})
            </div>
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
            <div class="cube" [ngClass]="{ booked: isBooked }">
              <span *ngIf="!isBooked" class="plus" (click)="toggleBooking()"
                >+ <span class="book-text">დაჯავშნა</span>
              </span>
              <span *ngIf="isBooked" class="booking-text">{{
                bookingText
              }}</span>
              <button
                *ngIf="isBooked"
                class="close-btn"
                (click)="cancelBooking($event)"
              >
                X
              </button>
            </div>

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

  /* new codesss */

  months = [
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
  weekdays = ['კვირა', 'ორშ ', 'სამ ', 'ოთხ ', 'ხუთ ', 'პარ', 'შაბ'];

  currentYear: number = new Date().getFullYear();
  currentMonthIndex: number = new Date().getMonth();
  currentDayOffset: number = 0; // Offset for navigating between 7-day sets
  days: number[] = [];

  // Function to go to the previous month
  goToPreviousMonth() {
    if (this.currentMonthIndex === 0) {
      this.currentMonthIndex = 11; // Wrap to December
      this.currentYear--;
    } else {
      this.currentMonthIndex--;
    }

    // Reset the days to 1-7 of the new month
    this.currentDayOffset = 0; // Reset the offset to start from the first day
    this.updateDays(); // Ensure days are recalculated when month changes
  }

  // Function to go to the next month
  goToNextMonth() {
    if (this.currentMonthIndex === 11) {
      this.currentMonthIndex = 0; // Wrap to January
      this.currentYear++;
    } else {
      this.currentMonthIndex++;
    }

    // Reset the days to 1-7 of the new month
    this.currentDayOffset = 0; // Reset the offset to start from the first day
    this.updateDays(); // Ensure days are recalculated when month changes
  }

  // Helper to get the current month days (e.g., January, February)

  // Function to calculate and update days when month changes
  updateDays() {
    const daysInMonth = new Date(
      this.currentYear,
      this.currentMonthIndex + 1,
      0
    ).getDate();

    // Display days from the currentDayOffset, ensuring we don't exceed the number of days in the month
    this.days = [];
    for (
      let i = this.currentDayOffset + 1;
      i <= Math.min(this.currentDayOffset + 7, daysInMonth);
      i++
    ) {
      this.days.push(i);
    }
  }

  ngOnInit() {
    // Initialize the days when the component loads
    this.updateDays;
  }

  getCurrentDays() {
    const daysInMonth = new Date(
      this.currentYear,
      this.currentMonthIndex + 1,
      0
    ).getDate();
    const days = [];

    // Calculate the starting point based on the current offset
    let startDay = this.currentDayOffset + 1;

    // Only take the next 7 days, considering the total number of days in the month
    for (let i = startDay; i < startDay + 7 && i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  }

  // Function to go to the next set of 7 days
  navigateRight() {
    const daysInMonth = new Date(
      this.currentYear,
      this.currentMonthIndex + 1,
      0
    ).getDate();

    // Move to the next set of 7 days, but ensure we don't exceed the number of days in the month
    if (this.currentDayOffset + 7 < daysInMonth) {
      this.currentDayOffset += 7;
      this.updateDays(); // Update the displayed days
    }
  }

  // Function to go to the previous set of 7 days
  navigateLeft() {
    // Move to the previous set of 7 days, but ensure we don't go below 0
    if (this.currentDayOffset - 7 >= 0) {
      this.currentDayOffset -= 7;
      this.updateDays(); // Update the displayed days
    }
  }
  isBooked = false; // Track if booking is made
  bookingText = 'ჩემი ჯავშანი'; // Default booking text

  // Toggles the booking state
  toggleBooking() {
    this.isBooked = !this.isBooked;
  }

  // Cancels the booking (Resets to default state)
  cancelBooking(event: Event) {
    event.stopPropagation(); // Prevent triggering the parent div's click event
    this.isBooked = false; // Reset to default state
  }
}
