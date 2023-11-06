import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-validator',
  template: ` <input
      type="password"
      name="password"
      [(ngModel)]="user.password"
      #password="ngModel"
      appPasswordValidator="[A-Za-z]+[0-9]+"
      required
    />

    <div *ngIf="password.invalid && (password.dirty || password.touched)">
      <div *ngIf="password.hasError('required')">Password is required.</div>
      <div *ngIf="password.hasError('passwordPattern')">
        Password must contain letters and numbers.
      </div>
    </div>`,
  styles: [``],
})
export class CustomValidatorComponent {
  public user = {
    password: '',
  };
}
