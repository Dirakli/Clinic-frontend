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
          <div class="navigation-many">
            <ul>
              <li>ჩვენ შესახებ</li>
              <li>პარტნიორები</li>
              <li>ექიმებისთვის</li>
              <li>კლინიკებისთვის</li>
              <li>აფთიაქებისთვის</li>
            </ul>
            <ul>
              <li>ექიმები</li>
              <li>კლინიკები</li>
              <li>ანოტაციები</li>
              <li>ბლოგი</li>
              <li>მედია</li>
            </ul>
            <ul>
              <li>
                სამუშაო დღეები : <br />
                ორშ - პარ
              </li>
              <li>
                სამუშაო დრო : <br />
                9:00 - 17:00
              </li>
              <li>იაკობ ნიკოლაძე №10</li>
              <li>032 2 100 100</li>
            </ul>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </div>
      <span class="copyright"> copyright </span>
    </div>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
