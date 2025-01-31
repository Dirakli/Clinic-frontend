import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-administration-categories',
  standalone: true,
  imports: [NgFor],
  templateUrl: './administration-categories.component.html',
  styleUrl: './administration-categories.component.css',
})
export class AdministrationCategoriesComponent {
  @Output() backToAdmin = new EventEmitter<void>();
  goBack() {
    this.backToAdmin.emit();
  }
  users = [
    {
      firstName: 'გიორგი ხორავა',
      category: 'ანდროლოგი',
      photoUrl: 'assets/names/giorgi.svg',
      rating: [5, 4, 4, 5, 5],
    },
    {
      firstName: 'ნატალია გოგოხია',
      category: 'ანესთეზიოლოგი',
      photoUrl: 'assets/names/natalia.svg',
      rating: [4, 5, 5, 4, 4],
    },
    {
      firstName: 'ანა დვალი',
      category: 'კარდიოლოგი',
      photoUrl: 'assets/names/ana.svg',
      rating: [3, 3, 4, 4, 5],
    },
    {
      firstName: 'გიორგი გაბიტაშვილი',
      category: 'კოსმეტოლოგი',
      photoUrl: 'assets/names/giorgi2.svg',
      rating: [5, 5, 5, 5, 5],
    },
    {
      firstName: 'ბარბარე ქორთუა',
      category: 'ლაბორანტი',
      photoUrl: 'assets/names/barbare.svg',
      rating: [4, 4, 4, 3, 4],
    },
    {
      firstName: 'სოფია გოგიაშვილი',
      category: 'ოჯახის ექიმი',
      photoUrl: 'assets/names/sofia.svg',
      rating: [4, 5, 4, 5, 4],
    },
    {
      firstName: 'გიორგი ხორეავა',
      category: 'პედიატრი',
      photoUrl: 'assets/names/giorgi3.svg',
      rating: [3, 4, 4, 3, 3],
    },
    {
      firstName: 'ნატალია გოგოხია',
      category: 'ტოქსიკოლოგი',
      photoUrl: 'assets/names/natalia2.svg',
      rating: [4, 5, 4, 4, 5],
    },
    {
      firstName: 'ანა დვალი',
      category: 'ტრანსფუზილოგი',
      photoUrl: 'assets/names/ana2.svg',
      rating: [5, 5, 5, 4, 5],
    },
    {
      firstName: 'გიორგი ხორავა',
      category: 'ანდროლოგი',
      photoUrl: 'assets/names/giorgi.svg',
      rating: [5, 4, 4, 5, 5],
    },
    {
      firstName: 'ნატალია გოგოხია',
      category: 'ანესთეზიოლოგი',
      photoUrl: 'assets/names/natalia.svg',
      rating: [4, 5, 5, 4, 4],
    },
    {
      firstName: 'ანა დვალი',
      category: 'კარდიოლოგი',
      photoUrl: 'assets/names/ana.svg',
      rating: [3, 3, 4, 4, 5],
    },
    {
      firstName: 'გიორგი გაბიტაშვილი',
      category: 'კოსმეტოლოგი',
      photoUrl: 'assets/names/giorgi2.svg',
      rating: [5, 5, 5, 5, 5],
    },
    {
      firstName: 'ბარბარე ქორთუა',
      category: 'ლაბორანტი',
      photoUrl: 'assets/names/barbare.svg',
      rating: [4, 4, 4, 3, 4],
    },
    {
      firstName: 'სოფია გოგიაშვილი',
      category: 'ოჯახის ექიმი',
      photoUrl: 'assets/names/sofia.svg',
      rating: [4, 5, 4, 5, 4],
    },
    {
      firstName: 'გიორგი ხორეავა',
      category: 'პედიატრი',
      photoUrl: 'assets/names/giorgi3.svg',
      rating: [3, 4, 4, 3, 3],
    },
    {
      firstName: 'ნატალია გოგოხია',
      category: 'ტოქსიკოლოგი',
      photoUrl: 'assets/names/natalia2.svg',
      rating: [4, 5, 4, 4, 5],
    },
    {
      firstName: 'ანა დვალი',
      category: 'ტრანსფუზილოგი',
      photoUrl: 'assets/names/ana2.svg',
      rating: [5, 5, 5, 4, 5],
    },
  ];

  editUser(user: any) {
    console.log('Editing user:', user);
  }

  deleteUser(user: any) {
    console.log('Deleting user:', user);
  }
}
