import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <div class="phone-wrapper">
        <div class="box">
          <img src="/assets/phone.svg" alt="phone icon" />
        </div>
        <a class="phone-number" href="tel:032 2 100 100">032 2 100 100</a>
      </div>

      <div class="location-wrapper">
        <div class="box box-location">
          <img src="/assets/location.svg" alt="location icon" />
        </div>
        <a
          class="location"
          href="https://www.google.com/maps/place/10+Iakob+Nikoladze+St,+T'bilisi/@41.7095039,44.7796769,17z/data=!3m1!4b1!4m6!3m5!1s0x40440cd3e5f99891:0x7b588ec507aa6ab4!8m2!3d41.7094999!4d44.7822518!16s%2Fg%2F11bw4r6y08?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          >იაკობ ნიკოლაძე №10</a
        >
      </div>

      <form class="search-form" action="#" method="GET">
        <input
          class="input-byname"
          type="text"
          name="input1"
          placeholder="მოძებნე ექიმი სახელით"
          required
        />
        <input
          class="input-byposition"
          type="text"
          name="input2"
          placeholder="მოძებნე სპეციალობით"
          required
        />

        <button class="button" type="submit">
          <img src="/assets/search.svg" alt="search icon" />
        </button>
      </form>
    </div>
  `,
  styleUrl: './searchbar.component.css',
})
export class SearchbarComponent {}
