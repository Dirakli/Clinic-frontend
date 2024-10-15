import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-administration-categories',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="main-container">
      <h1 class="heading">კატეგორიები</h1>
      <div class="table-container">
        <table>
          <thead>
            <th class="first">სახელი</th>
            <th>კატეგორია</th>
            <th>ფოტოსურათი</th>
            <th>რეიტინგი</th>
            <th class="last"></th>
          </thead>
          <tbody>
            <tr *ngFor="let user of users">
              <td>{{ user.firstName }}</td>
              <td>{{ user.category }}</td>
              <td>
                <img
                  [src]="user.photoUrl"
                  alt="User Photo"
                  class="user-photo"
                />
              </td>
              <td>
                <span
                  *ngFor="let star of user.rating; let i = index"
                  class="star"
                >
                  &#9733;
                </span>
              </td>
              <td class="buttons">
                <button (click)="editUser(user)" class="edit-btn">
                  <img src="assets/edit-green.svg" alt="edit icon" />
                </button>
                <button (click)="deleteUser(user)" class="delete-btn">
                  <img src="assets/bin.svg" alt="delete icon" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styleUrl: './administration-categories.component.css',
})
export class AdministrationCategoriesComponent {
  users = [
    {
      firstName: 'გიორგი',
      category: 'სიხარულიძე',
      photoUrl: 'assets/profile-picture.svg', // Replace with actual image URLs
      rating: [1, 1, 1, 1, 1],
    },
    {
      firstName: 'ნატალია',
      category: 'გვარჯალაძე',
      photoUrl: 'assets/profile-picture.svg',
      rating: [1, 1, 1, 1, 1],
    },
    {
      firstName: 'ნატალია',
      category: 'გვარჯალაძე',
      photoUrl: 'assets/profile-picture.svg',
      rating: [1, 1, 1, 1, 1],
    },
    {
      firstName: 'ნატალია',
      category: 'გვარჯალაძე',
      photoUrl: 'assets/profile-picture.svg',
      rating: [1, 1, 1, 1, 1],
    },
    {
      firstName: 'ნატალია',
      category: 'გვარჯალაძე',
      photoUrl: 'assets/profile-picture.svg',
      rating: [1, 1, 1, 1, 1],
    },
    {
      firstName: 'ნატალია',
      category: 'გვარჯალაძე',
      photoUrl: 'assets/profile-picture.svg',
      rating: [1, 1, 1, 1],
    },
    {
      firstName: 'ნატალია',
      category: 'გვარჯალაძე',
      photoUrl: 'assets/profile-picture.svg',
      rating: [1, 1, 1, 1, 1],
    },
    {
      firstName: 'ნატალია',
      category: 'გვარჯალაძე',
      photoUrl: 'assets/profile-picture.svg',
      rating: [1, 1, 1, 1, 1],
    },
    {
      firstName: 'ნატალია',
      category: 'გვარჯალაძე',
      photoUrl: 'assets/profile-picture.svg',
      rating: [1, 1, 1, 1, 1],
    },
    {
      firstName: 'ნატალია',
      category: 'გვარჯალაძე',
      photoUrl: 'assets/profile-picture.svg',
      rating: [1, 1, 1, 1, 1],
    },
    {
      firstName: 'ნატალია',
      category: 'გვარჯალაძე',
      photoUrl: 'assets/profile-picture.svg',
      rating: [1, 1, 1, 1, 1],
    },
    {
      firstName: 'ნატალია',
      category: 'გვარჯალაძე',
      photoUrl: 'assets/profile-picture.svg',
      rating: [1, 1, 1, 1, 1],
    },
    {
      firstName: 'ნატალია',
      category: 'გვარჯალაძე',
      photoUrl: 'assets/profile-picture.svg',
      rating: [1, 1, 1, 1, 1],
    },
    {
      firstName: 'ნატალია',
      category: 'გვარჯალაძე',
      photoUrl: 'assets/profile-picture.svg',
      rating: [1, 1, 1, 1, 1],
    },
    {
      firstName: 'ნატალია',
      category: 'გვარჯალაძე',
      photoUrl: 'assets/profile-picture.svg',
      rating: [1, 1, 1, 1, 1],
    },
    {
      firstName: 'ნატალია',
      category: 'გვარჯალაძე',
      photoUrl: 'assets/profile-picture.svg',
      rating: [1, 1, 1, 1, 1],
    },
    // Add more user data here
  ];

  editUser(user: any) {
    console.log('Editing user:', user);
    // Implement edit logic
  }

  deleteUser(user: any) {
    console.log('Deleting user:', user);
    // Implement delete logic
  }
}
