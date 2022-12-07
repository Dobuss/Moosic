import { FormGroup, ValidatorFn } from "@angular/forms";

export function samenessValidator(control1: string, control2: string): ValidatorFn {
    return (control) => {
      const group = control as FormGroup;
      const pass1 = group.get(control1);
      const pass2 = group.get(control2)
      return pass1?.value === pass2?.value ? null : { samenessValidator: true };
    };
  }