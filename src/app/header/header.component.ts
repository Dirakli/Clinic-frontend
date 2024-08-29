import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header>
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
        <span>ავოტრიზაცია/</span>
        <span>რეგისტრაცია</span>
      </div>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
