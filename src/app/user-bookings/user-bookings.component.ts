import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-user-bookings',
  standalone: true,
  imports: [],
  templateUrl: './user-bookings.component.html',
  styleUrl: './user-bookings.component.css',
})
export class UserBookingsComponent {
  @Input() selectedCard: any;
  @Input() starsArray: any[] = [];

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
