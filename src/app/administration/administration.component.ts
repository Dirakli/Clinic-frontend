import { Component } from '@angular/core';
import { AdministrationDoctorComponent } from '../administration-doctor/administration-doctor.component';
import { AdministrationCategoriesComponent } from '../administration-categories/administration-categories.component';

import { NgIf } from '@angular/common';
@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [
    AdministrationDoctorComponent,
    AdministrationCategoriesComponent,
    NgIf,
  ],
  template: `
    <div class="main-wrapper">
      <div class="header-wrapper" *ngIf="!categories">
        <div class="administrator-section">
          <div class="three-lines">
            <div class="first-line"></div>
            <div class="second-line"></div>
            <div class="third-line"></div>
          </div>
          <p class="registration">რეგისტრაცია</p>
          <p class="categories" (click)="onCategories(!categories)">
            კატეგორიები
          </p>
          <p class="changing-sections">ექიმები</p>
        </div>
        <div class="additional-section">
          <div class="doctors">ექიმი</div>
          <div class="costumers">მომხმარებელი</div>
          <div class="administrators">ადმინისტრატორი</div>
        </div>
      </div>

      <app-administration-doctor
        *ngIf="!categories"
      ></app-administration-doctor>
      <app-administration-categories
        *ngIf="categories"
      ></app-administration-categories>
    </div>
  `,
  styleUrl: './administration.component.css',
})
export class AdministrationComponent {
  categories = false;

  onCategories(isCategories: boolean) {
    this.categories = isCategories;
  }
}
