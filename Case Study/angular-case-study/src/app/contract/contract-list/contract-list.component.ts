import {Component, OnInit} from '@angular/core';
import {Contract} from '../Contract';
import {CustomerListComponent} from '../../customer/customer-list/customer-list.component';
import {FacilityListComponent} from '../../facility/facility-list/facility-list.component';
import {Customer} from '../../customer/Customer';
import {Facility} from '../../facility/Facility';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  customers: Customer[] = [
    {
      name: 'Nguyễn Thị Hào',
    },
    {
      name: 'Phạm Xuân Diệu',
    },
    {
      name: 'Trương Đình Nghệ'
    }
  ];
  facilities: Facility[] = [
    {name: 'Villa Beach Front'},
    {name: 'House Princess 01'},
    {name: 'Room Twin 01'},
    {name: 'Villa No Beach Front'}
  ];
  contracts: Contract[] = [
    {
      id: 1,
      startDay: '2020-12-08',
      endDay: '2020-12-08',
      deposit: 0,
      customer: this.customers[0],
      facility: this.facilities[2]
    },
    {
      id: 2,
      startDay: '2020-07-14',
      endDay: '2020-07-21',
      deposit: 200000,
      customer: this.customers[2],
      facility: this.facilities[0]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
