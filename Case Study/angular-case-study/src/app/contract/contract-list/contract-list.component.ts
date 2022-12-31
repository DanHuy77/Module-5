import {Component, OnInit} from '@angular/core';
import {Contract} from '../Contract';
import {CustomerListComponent} from '../../customer/customer-list/customer-list.component';
import {FacilityListComponent} from '../../facility/facility-list/facility-list.component';
import {Customer} from '../../customer/Customer';
import {Facility} from '../../facility/Facility';
import {ContractService} from '../service/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract[] = [];

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.contractService.getAllContract().subscribe(data => {
      console.log(data);
      this.contracts = data;
    }, error => {
    }, () => {
    });
  }
}
