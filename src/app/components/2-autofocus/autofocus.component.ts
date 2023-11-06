import { Component } from '@angular/core';

@Component({
  selector: 'app-autofocus',
  template: `
    <input type="text" placeholder="Auto-focused input" appAutofocus />
  `,
})
export class AutofocusComponent {}
