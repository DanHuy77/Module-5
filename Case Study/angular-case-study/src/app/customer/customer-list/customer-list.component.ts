import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../CustomerType';
import {Customer} from '../Customer';
import {CustomerServiceService} from '../service/customer-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  removeId?: number;
  removeName?: string;
  customerTypes: CustomerType[] = [];
  customers: Customer[] = [];

  constructor(private customerServiceService: CustomerServiceService) {
  }

  ngOnInit(): void {
    this.customerServiceService.getAllCustomer().subscribe(data => {
      console.log(data);
      // @ts-ignore
      this.customers = data;
    }, error => {
    }, () => {
    });
  }

  passRemoveInfo(id: number, name: string): void {
    this.removeId = id;
    this.removeName = name;
  }

  remove(id: string): void {
    this.customerServiceService.removeCustomer(Number(id)).subscribe(data => {
      this.ngOnInit();
    });
  }
}
