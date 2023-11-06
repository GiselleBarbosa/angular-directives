import { Component } from '@angular/core';

@Component({
  selector: 'app-click-outside',
  template: `
    <div class="gray" appClickOutside (appClickOutside)="closeDropdown()">
      <button class="p-2" (click)="toggleDropdown()">Toggle Dropdown</button>

      <div class="primary" *ngIf="dropdownOpen">Dropdown content</div>
    </div>
  `,
  styles: [
    `
      .gray {
        background-color: gray;
        padding: 5px;
      }

      .primary {
        background-color: #c2185b;
        padding: 30px;
      }

      .p-2 {
        padding: 2px;
        border: none;
      }
    `,
  ],
})
export class ClickOutsideComponent {
  public dropdownOpen = false;

  public closeDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  public toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
