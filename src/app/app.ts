import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import 'relics';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected readonly title = signal('portfolio');

  constructor(public theme: ThemeService) {}

  onToggle(event: Event) {
    console.log('toggle', event);
    const toggle = event.target as any;
    this.theme.isDark.set(toggle.checked);
    document.documentElement.setAttribute('data-relic-theme', toggle.checked ? 'dark' : 'light');
  }
}
