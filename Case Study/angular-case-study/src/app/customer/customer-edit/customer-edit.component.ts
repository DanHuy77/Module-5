import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  editCustomerForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(5), Validators.maxLength(50), Validators.required]),
    customerType: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[+][8][4][0-9]{9,10}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required, Validators.maxLength(100)])
  });

  constructor() {
  }

  ngOnInit(): void {
  }
  get name() {
    return this.editCustomerForm.get('name');
  }

  get customerType() {
    return this.editCustomerForm.get('customerType');
  }

  get birthday() {
    return this.editCustomerForm.get('birthday');
  }

  get gender() {
    return this.editCustomerForm.get('gender');
  }

  get idNumber() {
    return this.editCustomerForm.get('idNumber');
  }

  get phoneNumber() {
    return this.editCustomerForm.get('phoneNumber');
  }

  get email() {
    return this.editCustomerForm.get('email');
  }

  get address() {
    return this.editCustomerForm.get('address');
  }
}
