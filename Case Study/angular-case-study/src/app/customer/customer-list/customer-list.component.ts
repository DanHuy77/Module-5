import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../CustomerType';
import {Customer} from '../Customer';
import {CustomerServiceService} from '../service/customer-service.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  p = 1;
  removeId?: number;
  removeName?: string;
  customerTypes: CustomerType[] = [];
  customers: Customer[] = [];

  constructor(private customerServiceService: CustomerServiceService) {
  }

  ngOnInit(): void {
    this.customerServiceService.getAllCustomer().subscribe(data => {
      console.log(data);
      this.customers = data.content;
      console.log(this.customers);
    }, error => {
    }, () => {
    });
    this.customerServiceService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
    });
  }

  passRemoveInfo(id: string, name: string): void {
    this.removeId = Number(id);
    this.removeName = name;
  }

  remove(): void {
    this.customerServiceService.removeCustomer(Number(this.removeId)).subscribe(data => {
      alert('Đã xóa khách hàng');
      this.ngOnInit();
    });
  }

  search(name: string, email: string, customerType: string): void {
    this.customerServiceService.searchByNameAndEmail(name, email, customerType).subscribe(data => {
      this.customers = data;
    });
  }
}
