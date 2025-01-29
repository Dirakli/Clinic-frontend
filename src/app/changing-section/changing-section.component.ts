import { Component, Input } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { NgIf, NgStyle } from '@angular/common';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { CardsComponent } from '../cards/cards.component';
import { listComponent } from '../list/list.component';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { UserBookingsComponent } from '../user-bookings/user-bookings.component';
import { DoctorBookingsComponent } from '../doctor-bookings/doctor-bookings.component';
@Component({
  selector: 'app-changing-section',
  standalone: true,
  imports: [
    RegistrationComponent,
    NgIf,
    AuthenticationComponent,
    NgStyle,
    CardsComponent,
    listComponent,
    UserBookingsComponent,
    DoctorBookingsComponent,
  ],
  templateUrl: './changing-section.component.html',
  styleUrls: ['./changing-section.component.css'],
})
export class ChangingSectionComponent {
  @Input() showRegistration = false;
  @Input() showAuthentication = false;
  @Input() selectedCard = false;
  currentRoute: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });

    // Subscribe to route data (if any)
    this.route.data.subscribe((data) => {
      this.showRegistration = data['showRegistration'] || false;
      this.showAuthentication = data['showAuthentication'] || false;
      this.selectedCard = data['selectedCard'] || false;
    });
  }
}
