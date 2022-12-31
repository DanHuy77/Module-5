import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../service/customer-service.service';
import {CustomerType} from '../CustomerType';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerType?: CustomerType[] = [];
  addCustomerForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(5), Validators.maxLength(50), Validators.required]),
    customerTypeForm: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[+][8][4][0-9]{9,10}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
  });

  constructor(private customerServiceService: CustomerServiceService, private router: Router) {
    this.customerServiceService.getAllCustomerType().subscribe(data => {
      console.log(data);
      // @ts-ignore
      this.customerType = data;
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
  }

  get name() {
    return this.addCustomerForm.get('name');
  }

  get customerTypeForm() {
    return this.addCustomerForm.get('customerTypeForm');
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

  addNewCustomer(): void {
    this.addCustomerForm.value.id = Number(this.addCustomerForm.value.id);
    this.customerServiceService.addCustomer(this.addCustomerForm.value).subscribe(data => {
      this.router.navigateByUrl('customer/list');
    });
  }
}
