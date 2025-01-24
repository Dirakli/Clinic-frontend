import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  template: `
    <div *ngIf="isVisible" class="overlay">
      <div class="auth-modal">
        <h1>ავტორიზაცია</h1>
        <form [formGroup]="authForm" (ngSubmit)="onSignIn()">
          <input
            type="text"
            formControlName="email"
            placeholder="ელ. ფოსტა/ ტელეფონის ნომერი"
          />
          <div
            class="warning"
            *ngIf="
              authForm.get('email')?.invalid && authForm.get('email')?.touched
            "
          >
            *გთხოვთ, მიუთითოთ მეილი ან ტელეფონის ნომერი
          </div>

          <input
            type="password"
            class="second-input"
            formControlName="password"
            placeholder="პაროლი"
          />
          <div
            class="warning"
            *ngIf="
              authForm.get('password')?.invalid &&
              authForm.get('password')?.touched
            "
          >
            *გთხოვთ, მიუთითოთ პაროლი
          </div>

          <button type="button" class="recover-password">
            პაროლის აღდგენა
          </button>
          <button type="submit" class="sign-in" [disabled]="authForm.invalid">
            შესვლა
          </button>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  isVisible = true;
  authForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const clickedInside = (event.target as HTMLElement).closest('.auth-modal');
    if (!clickedInside) {
      this.isVisible = false;
    }
  }
  onSignIn() {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }

    const signInData = {
      email: this.authForm.get('email')?.value,
      password: this.authForm.get('password')?.value,
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .post('http://localhost:5271/api/Auth/sign-in', signInData, { headers })
      .subscribe({
        next: (response) => {
          console.log('Sign-in successful', response);
        },
        error: (error) => {
          console.error('Sign-in failed', error);
        },
      });
  }
}
