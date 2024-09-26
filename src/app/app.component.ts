import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FooterComponent } from './footer/footer.component';
import { ChangingSectionComponent } from './changing-section/changing-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SearchbarComponent,
    FooterComponent,
    ChangingSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'clinic-frontend';
  showRegistration = false;
  showAuthentication = false;

  onRegistration(isRegistrationShown: boolean) {
    this.showRegistration = isRegistrationShown;
  }

  onAuthentication(isAuthenticationShown: boolean) {
    this.showAuthentication = isAuthenticationShown;
  }
}
