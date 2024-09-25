import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [],
  template: `
    <div class="main-wrapper">
      <h1>რეგისტრაცია</h1>
      <form>
        <div class="container">
          <div class="input-wrapper one">
            <label for="first-name">სახელი</label>
            <input
              id="first-name"
              type="text"
              placeholder="( მინიმუმ 5 სიმბოლო )"
            />

            <label for="last-name" class="second-label">გვარი</label>
            <input id="last-name " type="text" />
          </div>

          <div class="input-wrapper two">
            <label for="last-name">Email</label>
            <input id="last-name" type="text" />
            <img src="./assets/mail-icon.svg" class="mail" alt="mail logo" />

            <div class="activation-code-wrapper second-label">
              <label for="last-name">აქტივაციის კოდი</label>
              <label for="last-name" class="duration">ვადა 30 წთ</label>
            </div>

            <input id="last-name" type="text" />
          </div>
          <div class="input-wrapper three">
            <label for="last-name ">პირადი ნომერი</label>
            <input id="last-name" type="text" placeholder="00000000000" />

            <label for="last-name" class="second-label">პაროლი</label>
            <input
              id="last-name"
              type="text"
              placeholder="( მინიმუმ 8 სიმბოლო : @ 7 , )"
            />
          </div>
        </div>
        <button type="submit">რეგისტრაცია</button>
      </form>
    </div>
  `,
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {}
