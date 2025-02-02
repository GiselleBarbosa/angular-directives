import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordValidatorDirective implements Validator {
  @Input('appPasswordValidator') requiredPattern!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      const pattern = new RegExp(this.requiredPattern);
      const isValid = pattern.test(control.value);

      if (!isValid) {
        return { passwordPattern: true };
      }
    }
    return null;
  }
}
