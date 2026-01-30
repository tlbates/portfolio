import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SignalForms } from './signal-forms/signal-forms';
import { Relics } from './relics/relics';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Home },
  { path: 'signal-forms-playground', component: SignalForms },
  { path: 'relics', component: Relics },
  { path: '**', redirectTo: '' }
];
