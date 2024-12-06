import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="list">
      <div class="categories-line-container">
        <h1 class="categories">კატეგორიები</h1>
        <div class="line"></div>
      </div>
      <ul class="unordered-list">
        <li *ngFor="let item of categories" class="list-item">
          <span class="count">( {{ item.count }} )</span>

          <span class="name">{{ item.name }}</span>
          <img
            src="/assets/right-arrow-blue.svg"
            alt="right arrow blue colored"
            class="arrow"
          />
        </li>
      </ul>
      <div class="show-more-container">
        <div class="line-bottom"></div>
        <div class="show-more">
          <span class="show"> სრულად ნახვა </span
          ><img class="arrow" src="/assets/blue-arrow.svg" alt="arrow" />
        </div>
      </div>
    </div>
  `,
  styleUrl: './list.component.css',
})
export class listComponent {
  categories = [
    { name: 'ანდროლოგი', count: 14 },
    { name: 'ანესთეზიოლოგი', count: 61 },
    { name: 'კარდიოლოგი', count: 467 },
    { name: 'კოსმეტოლოგი', count: 43 },
    { name: 'ლაბორანტი', count: 107 },
    { name: 'ოჯახის ექიმი', count: 238 },
    { name: 'პედიატრი', count: 366 },
    { name: 'ტოქსიკოლოგი', count: 8 },
    { name: 'ტრანსფუზილოგი', count: 15 },
    { name: 'გინეკოლოგი', count: 171 },
    { name: 'დერმატოლოგი', count: 68 },
    { name: 'ენდოკრინოლოგი', count: 32 },
    { name: 'გასტროენტეროლოგი', count: 56 },
    { name: 'თერაპევტი', count: 114 },
  ];
}
