import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal(true);

  constructor() {
    document.documentElement.setAttribute('data-relic-theme', 'dark');
  }

  toggle() {
    this.isDark.update(v => !v);
    console.log(this.isDark());
    document.documentElement.setAttribute('data-relic-theme', this.isDark() ? 'dark' : 'light');
  }
}
