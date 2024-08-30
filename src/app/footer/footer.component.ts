import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <div
        class="blue-container
      "
      >
        <div class="footer-title-wrapper">
          <img src="./assets/logo-white.svg" alt="logo" />
          <h1 class="title">კლინიკა</h1>
        </div>
        <div class="navigation-list-wrapper">
          <ul class="title-list">
            <li>ინფორმაცია</li>
            <li>პაციენტებისთვის</li>
            <li>კონტაქტი</li>
            <li>გამოგვყევით</li>
          </ul>
          <div class="line"></div>
        </div>
      </div>
      <span class="copyright"> copyright </span>
    </div>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
