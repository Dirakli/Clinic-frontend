import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthenticationComponent } from '../authentication/authentication.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf, AuthenticationComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() showRegistrationChange = new EventEmitter<boolean>();
  @Output() showAuthenticationChange = new EventEmitter<boolean>();
  @Output() showTextChange = new EventEmitter<boolean>();
  @Input() showText = false;
  showRegistration() {
    this.showRegistrationChange.emit(true);
  }

  showAuthentication() {
    this.showAuthenticationChange.emit(true);
  }

  showTextfu() {
    this.showText = !this.showText; // Toggle the value
    this.showTextChange.emit(this.showText);
  }

  reloadPage() {
    window.location.href = '/'; // This navigates to the root and reloads the page.
  }
}
