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
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-doctor',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './registration-doctor.component.html',
  styleUrl: './registration-doctor.component.css',
  template: ``,
})
export class RegistrationDoctorComponent {
  registrationForm: FormGroup;
  formSubmitted = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      photo: [null, Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cv: [null, Validators.required],
      private_number: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  onSubmit() {
    this.formSubmitted = true; // Flag to indicate form submission

    // Mark all controls as touched
    this.markAllAsTouched();

    // Prevent submission if the form is invalid
    if (this.registrationForm.invalid) {
      return;
    }

    // Proceed with form submission
    const formData = new FormData();
    formData.append('name', this.registrationForm.get('name')?.value);
    formData.append('surname', this.registrationForm.get('surname')?.value);
    formData.append('email', this.registrationForm.get('email')?.value);
    formData.append(
      'private_number',
      this.registrationForm.get('private_number')?.value
    );
    formData.append('password', this.registrationForm.get('password')?.value);
    formData.append('category', this.registrationForm.get('category')?.value);

    this.http
      .post('http://localhost:5271/api/Auth/sign-up', formData)
      .subscribe({
        next: (response) => console.log('Registration successful', response),
        error: (error) => console.error('Registration failed', error),
      });
  }

  // Mark all form controls as touched
  markAllAsTouched() {
    Object.keys(this.registrationForm.controls).forEach((field) => {
      const control = this.registrationForm.get(field);
      if (control) {
        control.markAsTouched();
      }
    });
  }
}
