import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'talk-board',
    loadComponent: () => import('./pages/talk-board/talk-board.page').then( m => m.TalkBoardPage)
  },
  {
    path: 'braille-tutorial',
    loadComponent: () => import('./pages/braille-tutorial/braille-tutorial.page').then( m => m.BrailleTutorialPage)
  },
  {
    path: 'braille-learning-menu',
    loadComponent: () => import('./pages/braille-learning-menu/braille-learning-menu.page').then( m => m.BrailleLearningMenuPage)
  },
];