import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <div class="p-3">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class ContentComponent {}
