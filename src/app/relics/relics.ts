import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import 'relics';

@Component({
  selector: 'app-relics',
  imports: [],
  templateUrl: './relics.html',
  styleUrl: './relics.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Relics {
  selectedComponent = signal<string>('button');

  selectComponent(component: string) {
    this.selectedComponent.set(component);
  }

  protected buttonClicked() {
    console.log('Button clicked!');
  }
}
