import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required]],
      activationCode: ['', Validators.required],
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

    this.http
      .post('http://localhost:5271/api/Auth/sign-up', formData)
      .subscribe({
        next: (response) => console.log('Registration successful', response),
        error: (error) => console.error('Registration failed', error),
      });
  }
}
