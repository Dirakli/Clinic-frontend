import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-administration-categories',
  standalone: true,
  imports: [NgFor],
  templateUrl: './administration-categories.component.html',
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
