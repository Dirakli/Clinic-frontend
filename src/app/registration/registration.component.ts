import { Component } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  template: `
    <div class="main-wrapper">
      <h1>რეგისტრაცია</h1>
      <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
        <div class="container">
          <div class="input-wrapper one">
            <label for="name">სახელი</label>
            <input
              id="name"
              type="text"
              formControlName="name"
              placeholder="( მინიმუმ 5 სიმბოლო )"
            />
            <div
              *ngIf="
                registrationForm.get('name')?.invalid &&
                registrationForm.get('name')?.touched
              "
            >
              Name is required.
            </div>

            <label for="last-name" class="second-label">გვარი</label>
            <input id="last-name" type="text" formControlName="surname" />
            <div
              *ngIf="
                registrationForm.get('surname')?.invalid &&
                registrationForm.get('surname')?.touched
              "
            >
              Surname is required.
            </div>
          </div>

          <div class="input-wrapper two">
            <label for="email">Email</label>
            <input id="email" type="email" formControlName="email" />
            <img src="./assets/mail-icon.svg" class="mail" alt="mail logo" />
            <div
              *ngIf="
                registrationForm.get('email')?.invalid &&
                registrationForm.get('email')?.touched
              "
            >
              Email is required.
            </div>

            <div class="activation-code-wrapper second-label">
              <label for="activation-code">აქტივაციის კოდი</label>
              <label for="duration" class="duration">ვადა 30 წთ</label>
            </div>
            <input
              id="activation-code"
              type="text"
              formControlName="activationCode"
            />
          </div>

          <div class="input-wrapper three">
            <label for="personal-id">პირადი ნომერი</label>
            <input
              id="personal-id"
              type="text"
              formControlName="private_number"
              placeholder="00000000000"
            />
            <div
              *ngIf="
                registrationForm.get('private_number')?.invalid &&
                registrationForm.get('private_number')?.touched
              "
            >
              Personal ID is required.
            </div>

            <label for="password" class="second-label">პაროლი</label>
            <input
              id="password"
              type="password"
              formControlName="password"
              placeholder="( მინიმუმ 8 სიმბოლო : @ 7 , )"
            />
            <div
              *ngIf="
                registrationForm.get('password')?.invalid &&
                registrationForm.get('password')?.touched
              "
            >
              Password is required.
            </div>
          </div>
        </div>
        <button type="submit" [disabled]="registrationForm.invalid">
          რეგისტრაცია
        </button>
      </form>
    </div>
  `,
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      activationCode: [''],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['', Validators.required],
      category: ['', Validators.required],
      private_number: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    formData.append('name', this.registrationForm.get('name')?.value);
    formData.append('surname', this.registrationForm.get('surname')?.value);
    formData.append('email', this.registrationForm.get('email')?.value);
    formData.append(
      'activationCode',
      this.registrationForm.get('activationCode')?.value
    );
    formData.append(
      'private_number',
      this.registrationForm.get('private_number')?.value
    );
    formData.append('password', this.registrationForm.get('password')?.value);
    formData.append('role', this.registrationForm.get('role')?.value);
    formData.append('category', this.registrationForm.get('category')?.value);
    formData.append(
      'privateNumber',
      this.registrationForm.get('privateNumber')?.value
    );

    this.http
      .post('http://localhost:5271/api/Auth/sign-up', formData)
      .subscribe({
        next: (response) => console.log('Registration successful', response),
        error: (error) => console.error('Registration failed', error),
      });
  }
}
