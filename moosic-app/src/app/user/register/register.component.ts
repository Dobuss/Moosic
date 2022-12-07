import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { samenessValidator } from '../samenessValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    pass: this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    repass: []
  }, 
  {validators: [samenessValidator('password', 'repass')]
  })
});

  constructor(private fb: FormBuilder) {}

  registerHandler() {}
}
