import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-administration-doctor',
  standalone: true,
  imports: [NgFor],
  templateUrl: './administration-doctor.component.html',
  styleUrl: './administration-doctor.component.css',
})
export class AdministrationDoctorComponent {
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
