import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-load',
  template: `
    <img
      src="assets/angular.png"
      data-src="angular.png"
      alt="Lazy-loaded image"
      appLazyLoad
    />
  `,
})
export class LazyLoadComponent {}
