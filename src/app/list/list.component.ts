import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
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
