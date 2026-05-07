import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Header {
  constructor(public theme: ThemeService) {}

  onToggle(event: Event) {
    const toggle = event.target as any;
    this.theme.isDark.set(toggle.checked);
    document.documentElement.setAttribute('data-relic-theme', toggle.checked ? 'dark' : 'light');
  }
}
