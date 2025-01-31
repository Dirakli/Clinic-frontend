import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
@Component({
  selector: 'app-user-bookings',
  standalone: true,
  imports: [NgIf, NgClass, NgFor],
  templateUrl: './user-bookings.component.html',
  styleUrl: './user-bookings.component.css',
})
export class UserBookingsComponent {
  // @Input() selectedCard: any;
  // @Input() starsArray: any[] = [];

  // showInput = false;
  // showAttention = false;

  // onInput(isShowInput: boolean) {
  //   this.showInput = isShowInput;
  // }

  // onBook(isShowAttention: boolean) {
  //   this.showAttention = isShowAttention;
  // }

  // months: string[] = [
  //   'იანვარი', // January
  //   'თებერვალი', // February
  //   'მარტი', // March
  //   'აპრილი', // April
  //   'მაისი', // May
  //   'ივნისი', // June
  //   'ივლისი', // July
  //   'აგვისტო', // August
  //   'სექტემბერი', // September
  //   'ოქტომბერი', // October
  //   'ნოემბერი', // November
  //   'დეკემბერი', // December
  // ];
  // currentMonthIndex: number = 3;
  // goToPreviousMonth(): void {
  //   this.currentMonthIndex =
  //     this.currentMonthIndex === 0
  //       ? this.months.length - 1
  //       : this.currentMonthIndex - 1;
  // }

  // goToNextMonth(): void {
  //   this.currentMonthIndex =
  //     this.currentMonthIndex === this.months.length - 1
  //       ? 0
  //       : this.currentMonthIndex + 1;
  // }

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

  months = [
    'იანვარი',
    'თებერვალი',
    'მარტი',
    'აპრილი',
    'მაისი',
    'ივნისი',
    'ივლისი',
    'აგვისტო',
    'სექტემბერი',
    'ოქტომბერი',
    'ნოემბერი',
    'დეკემბერი',
  ];
  weekdays = ['ორშ ', 'სამ ', 'ოთხ ', 'ხუთ ', 'პარ', 'შაბ', 'კვი'];

  currentYear: number = new Date().getFullYear();
  currentMonthIndex: number = new Date().getMonth();
  currentDayOffset: number = 0;
  days: number[] = [];

  // Function to go to the previous month
  goToPreviousMonth() {
    if (this.currentMonthIndex === 0) {
      this.currentMonthIndex = 11;
      this.currentYear--;
    } else {
      this.currentMonthIndex--;
    }

    // Reset the days to 1-7 of the new month
    this.currentDayOffset = 0;
    this.updateDays();
  }

  goToNextMonth() {
    if (this.currentMonthIndex === 11) {
      this.currentMonthIndex = 0;
      this.currentYear++;
    } else {
      this.currentMonthIndex++;
    }

    this.currentDayOffset = 0;
    this.updateDays();
  }

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

    // Add null placeholders if fewer than 7 days are available
    while (days.length < 7) {
      days.push(null);
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
      this.updateDays();
    }
  }

  // Function to go to the previous set of 7 days
  navigateLeft() {
    if (this.currentDayOffset - 7 >= 0) {
      this.currentDayOffset -= 7;
      this.updateDays();
    }
  }
  isBooked = false;
  bookingText = 'ჩემი ჯავშანი';

  // Toggles the booking state
  toggleBooking() {
    this.isBooked = !this.isBooked;
  }

  // Cancels the booking (Resets to default state)
  cancelBooking(event: Event) {
    event.stopPropagation();
    this.isBooked = true;
  }
}
