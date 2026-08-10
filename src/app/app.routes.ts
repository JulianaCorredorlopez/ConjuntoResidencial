import { Routes } from '@angular/router';
import { App } from './app';
import { PoliticaPrivacidad } from './pages/politica-privacidad/politica-privacidad';

export const routes: Routes = [
  {
    path: '',
    component: App
  },
  {
    path: 'politica-privacidad',
    component: PoliticaPrivacidad
  }
];