import { Directive } from '@angular/core';
import { ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';

export const identityReveleadValidator: ValidatorFn = (control: FormControl): ValidationErrors | null => {
  const name = control.get('name');
  const alterEgo = control.get('alterEgo');
  return name && alterEgo && name.value === alterEgo.value ? {'identityRevealed' : true} : null;
};

@Directive({
  selector: '[appIdentityRevealed]'
})
export class IdentityRevealedDirective {

  constructor() { }

}
