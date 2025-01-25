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
  templateUrl: './authentication.component.html',
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
