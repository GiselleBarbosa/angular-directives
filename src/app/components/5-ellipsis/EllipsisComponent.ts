import { Component } from '@angular/core';

@Component({
  selector: 'app-ellipsis',
  template: `
    <div appEllipsis>
      This is a long text that will be truncated with an ellipsis if it
      overflows its container.
    </div>

  `,
})
export class EllipsisComponent {}
