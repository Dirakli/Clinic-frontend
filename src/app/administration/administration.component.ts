import { Component } from '@angular/core';

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [],
  template: `
    <div class="main-wrapper">
      <div class="administrator-section">
        <div class="three-lines">
          <div class="first-line"></div>
          <div class="second-line"></div>
          <div class="third-line"></div>
        </div>
        <p class="registration">რეგისტრაცია</p>
        <p class="categories">კატეგორიები</p>
        <p class="changing-sections">ექიმები</p>
      </div>
    </div>
  `,
  styleUrl: './administration.component.css',
})
export class AdministrationComponent {}
