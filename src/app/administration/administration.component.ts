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
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css',
})
export class AdministrationComponent {
  categories = false;

  onCategories(isCategories: boolean) {
    this.categories = isCategories;
  }
}
