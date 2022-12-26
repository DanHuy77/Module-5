import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../CustomerType';
import {Customer} from '../Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerTypes: CustomerType[] = [
    {id: 1, name: 'Diamond'},
    {id: 2, name: 'Platinum'},
    {id: 3, name: 'Gold'},
    {id: 4, name: 'Silver'},
    {id: 5, name: 'Member'}];
  customers: Customer[] = [
    {
      id: 1,
      name: 'Nguyễn Thị Hào',
      birthday: '1970-11-07',
      gender: false,
      idNumber: '643431213',
      phoneNumber: '0945423362',
      email: 'thihao07@gmail.com',
      address: '23 Nguyễn Hoàng, Đà Nẵng',
      customerType: this.customerTypes[4]
    },
    {
      id: 2,
      name: 'Phạm Xuân Diệu',
      birthday: '1992-08-08',
      gender: true,
      idNumber: '865342123',
      phoneNumber: '0954333333',
      email: 'xuandieu92@gmail.com',
      address: 'K77/22 Thái Phiên, Quảng Trị',
      customerType: this.customerTypes[2]
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
