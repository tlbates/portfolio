import { Routes } from '@angular/router';
import { Home} from './home/home';
import { SignalForms } from './signal-forms/signal-forms';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Home },
  { path: 'signal-forms-playground', component: SignalForms },
  { path: '**', redirectTo: '' }
];
