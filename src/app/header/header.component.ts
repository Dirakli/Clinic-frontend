import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
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

  reloadPage() {
    window.location.href = '/'; // This navigates to the root and reloads the page.
  }
}
