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
    customerType: new FormControl( '', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}$')]),
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
  addNewCustomer(): void {
    this.addCustomerForm.value.id = Number(this.addCustomerForm.value.id);
    if (this.addCustomerForm.valid) {
      this.customerServiceService.addCustomer(this.addCustomerForm.value).subscribe(data => {
        alert('Đã thêm thông tin khách hàng');
        this.router.navigateByUrl('customer/list');
      });
    }
  }
}
