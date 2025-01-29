import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, SearchbarComponent],
  template: `
    <div class="wrapper">
      <header>
        <app-header
          (showAuthenticationChange)="showAuthentication = $event"
          [showText]="showText"
          (showTextChange)="onShowText($event)"
        ></app-header>
      </header>
      <app-searchbar></app-searchbar>

      <div class="content">
        <div>
          <router-outlet> </router-outlet>
        </div>
        <app-footer></app-footer>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clinic-frontend';
  showRegistration = false;
  showAuthentication = false;
  showText = false;

  onRegistration(isRegistrationShown: boolean) {
    this.showRegistration = isRegistrationShown;
  }

  onAuthentication(isAuthenticationShown: boolean) {
    this.showAuthentication = isAuthenticationShown;
  }

  onShowText(isTextShown: boolean) {
    this.showText = isTextShown;
  }
}
