import {Component, OnInit} from '@angular/core';
import {RegisterInfo} from '../register';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Country} from './country';

let generateId = 1;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  infoDatabase: RegisterInfo[] = [];
  registerForm = new FormGroup({
    // id: new FormControl(),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(null, [Validators.required]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.min(18)]),
    gender: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[+][8][4][0-9]{9,10}$')])
  }, [this.validateConfirmPass]);

  // @ts-ignore
  countryList: Country[] = [{id: 1, name: 'VietNam'}, {id: 2, name: 'USA'}, {id: 3, name: 'China'}, {id: 4, name: 'Australia'}, {
    id: 5,
    name: 'Canada'
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

  validateConfirmPass(registerForm: any) {
    if (registerForm.controls.password.value != registerForm.controls.confirmPassword.value) {
      return {'mismatchedPassword': true};
    }
    return null;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.infoDatabase.push(this.registerForm.getRawValue());
    }
  }

  get email() {
    return this.registerForm.get('email');
  }

  // @ts-ignore
  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get country() {
    return this.registerForm.get('country');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }

}
