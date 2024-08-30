import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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
        <button>ავოტრიზაცია</button>
        <span> / </span>
        <button>რეგისტრაცია</button>
      </div>
      <button class="language">
        <span>ENG</span>
      </button>
    </div>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
