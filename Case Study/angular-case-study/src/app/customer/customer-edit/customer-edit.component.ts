import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../service/customer-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../Customer';
import {CustomerType} from '../CustomerType';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer?: Customer;
  customerType?: CustomerType[] = [];
  editCustomerForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.minLength(5), Validators.maxLength(50), Validators.required]),
    customerType: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[+][8][4][0-9]{3}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required, Validators.maxLength(100)])
  });

  constructor(private customerServiceService: CustomerServiceService, private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.customerServiceService.findCustomerById(Number(id)).subscribe(data1 => {
          this.customer = data1;
          this.editCustomerForm.patchValue(this.customer);
        });
      }
    });
    this.customerServiceService.getAllCustomerType().subscribe(data => {
      this.customerType = data;
    });
  }

  ngOnInit(): void {
  }

  compareType(item1: CustomerType, item2: CustomerType): boolean {
    return item1.id === item2.id;
  }

  editCustomer(): void {
    this.customerServiceService.editCustomer(this.editCustomerForm.value).subscribe(data => {
      this.router.navigateByUrl('/customer/list');
      alert('Đã sửa thông tin khách hàng');
      console.log(this.editCustomerForm.value);
    });
  }
}
