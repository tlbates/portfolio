import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import 'relics';

interface PropRow {
  name: string;
  type: string;
  default: string;
  description: string;
}

@Component({
  selector: 'app-relics',
  imports: [],
  templateUrl: './relics.html',
  styleUrl: './relics.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Relics {
  selectedComponent = signal<string>('button');

  selectComponent(name: string) {
    this.selectedComponent.set(name);
  }

  // --- live state for demos ---
  toggleChecked = signal(false);
  inputValue = signal('');
  selectValue = signal('');

  onToggleChange(e: Event) {
    this.toggleChecked.set((e.target as any).checked);
  }

  onInputChange(e: Event) {
    this.inputValue.set((e.target as any).value);
  }

  onSelectChange(e: Event) {
    this.selectValue.set((e.target as any).value);
  }

  // --- props tables ---
  readonly buttonProps: PropRow[] = [
    { name: 'variant', type: "'primary' | null", default: 'null', description: 'Visual style. Omit for secondary (default).' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Button size.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button.' },
    { name: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", description: 'Native button type.' },
    { name: 'aria-label', type: 'string', default: 'null', description: 'Accessible label when no visible text.' },
    { name: 'aria-pressed', type: "'true' | 'false' | 'mixed'", default: 'null', description: 'Toggle button state.' },
    { name: 'aria-expanded', type: "'true' | 'false'", default: 'null', description: 'Disclosure button state.' },
  ];

  readonly inputProps: PropRow[] = [
    { name: 'value', type: 'string', default: "''", description: 'Current input value.' },
    { name: 'type', type: 'string', default: "'text'", description: 'Native input type (text, email, password, number, date…).' },
    { name: 'placeholder', type: 'string', default: 'null', description: 'Placeholder text.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input.' },
    { name: 'readonly', type: 'boolean', default: 'false', description: 'Makes the input read-only.' },
    { name: 'required', type: 'boolean', default: 'false', description: 'Marks the field as required.' },
    { name: 'invalid', type: 'boolean', default: 'false', description: 'Applies error styling.' },
    { name: 'minlength / maxlength', type: 'number', default: 'null', description: 'Character length constraints.' },
    { name: 'min / max / step', type: 'string', default: 'null', description: 'Numeric / date constraints.' },
    { name: 'pattern', type: 'string', default: 'null', description: 'Regex validation pattern.' },
    { name: 'aria-label', type: 'string', default: 'null', description: 'Accessible label.' },
    { name: 'aria-invalid', type: "'true' | 'false'", default: 'null', description: 'Communicates validation state to screen readers.' },
  ];

  readonly toggleProps: PropRow[] = [
    { name: 'checked', type: 'boolean', default: 'false', description: 'Whether the toggle is on.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the toggle.' },
    { name: 'required', type: 'boolean', default: 'false', description: 'Marks as required in a form.' },
    { name: 'name', type: 'string', default: 'null', description: 'Form field name.' },
    { name: 'aria-label', type: 'string', default: 'null', description: 'Accessible label (required if no visible label).' },
  ];

  readonly selectProps: PropRow[] = [
    { name: 'value', type: 'string', default: "''", description: 'Currently selected value.' },
    { name: 'multiple', type: 'boolean', default: 'false', description: 'Enables multi-select.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the select.' },
    { name: 'required', type: 'boolean', default: 'false', description: 'Marks as required.' },
    { name: 'name', type: 'string', default: 'null', description: 'Form field name.' },
    { name: 'aria-label', type: 'string', default: 'null', description: 'Accessible label.' },
    { name: 'aria-invalid', type: "'true' | 'false'", default: 'null', description: 'Communicates validation state.' },
  ];
}
