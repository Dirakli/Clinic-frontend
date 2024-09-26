import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <div class="header">
      <div class="title-wrapper">
        <img src="./assets/logo.svg" alt="logo" />
        <h1 class="title">კლინიკა</h1>
      </div>
      <nav>
        <ul>
          <li class="nav-list">
            <a href="">ექიმები</a>
            <a href="">კლინიკები</a>
            <a href="">ანოტაციები</a>
            <a href="">აქციები</a>
            <a href="">სერვისები</a>
            <a href="">მედიკამენტები</a>
            <a href="">კონტაქტი</a>
          </li>
        </ul>
      </nav>
      <div class="autorization">
        <button (click)="showAuthentication()">ავოტრიზაცია</button>
        <span> / </span>
        <button (click)="showRegistration()">რეგისტრაცია</button>
      </div>
      <button class="language">
        <span>ENG</span>
      </button>
    </div>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() showRegistrationChange = new EventEmitter<boolean>();
  @Output() showAuthenticationChange = new EventEmitter<boolean>();
  showRegistration() {
    this.showRegistrationChange.emit(true);
  }

  showAuthentication() {
    this.showAuthenticationChange.emit(true);
  }
}
