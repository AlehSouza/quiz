import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'quiz',
    loadComponent: () => import('./pages/quiz/quiz.component').then(m => m.QuizComponent)
  },
];
