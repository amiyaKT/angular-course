import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const ans = form.value[target];
      const firstNumber = form.value[sourceOne];
      const secondNumber = form.value[sourceTwo];
      if (firstNumber + secondNumber === ans) {
        return null;
      }
      return {
        addition: true,
      };
    };
  }
}
