import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [NgIf],
  template: `
    <div *ngIf="isVisible" class="overlay">
      <div class="auth-modal">
        <h1>ავტორიზაცია</h1>
        <form>
          <input type="text" placeholder="ელ. ფოსტა/ ტელეფონის ნომერი" />
          <input type="text" class="second-input" placeholder="პაროლი" />
          <button class="recover-password">პაროლის აღდგენა</button>
          <button class="sign-in">შესვლა</button>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  isVisible = true;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const clickedInside = (event.target as HTMLElement).closest('.auth-modal');
    if (!clickedInside) {
      this.isVisible = false;
    }
  }
}
