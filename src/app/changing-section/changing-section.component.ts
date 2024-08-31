import { Component, Input } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-changing-section',
  standalone: true,
  imports: [RegistrationComponent, NgIf],
  template: `
    <div *ngIf="showRegistration; else notClickedTemplate">
      <app-registration></app-registration>
    </div>
    <ng-template #notClickedTemplate>
      <div>not clicked</div>
    </ng-template>
  `,
  styleUrls: ['./changing-section.component.css'],
})
export class ChangingSectionComponent {
  @Input() showRegistration = false;
}
