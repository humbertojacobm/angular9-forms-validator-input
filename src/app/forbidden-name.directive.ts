import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

export function emailValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? null : {'email': {value: control.value}};
  };
}

@Directive({
  selector: '[appForbiddenName]'
})
export class ForbiddenNameDirective {

  constructor() { }

}
