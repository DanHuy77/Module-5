import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  addCustomerForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(5), Validators.maxLength(50), Validators.required]),
    customerType: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[+][8][4][0-9]{9,10}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  get name() {
    return this.addCustomerForm.get('name');
  }

  get customerType() {
    return this.addCustomerForm.get('customerType');
  }

  get birthday() {
    return this.addCustomerForm.get('birthday');
  }

  get gender() {
    return this.addCustomerForm.get('gender');
  }

  get idNumber() {
    return this.addCustomerForm.get('idNumber');
  }

  get phoneNumber() {
    return this.addCustomerForm.get('phoneNumber');
  }

  get email() {
    return this.addCustomerForm.get('email');
  }

  get address() {
    return this.addCustomerForm.get('address');
  }
}
