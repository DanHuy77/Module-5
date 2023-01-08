import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../service/contract.service';
import {Router} from '@angular/router';
import {differenceInDays, differenceInYears} from 'date-fns';

@Component({
  selector: 'app-contract-add',
  templateUrl: './contract-add.component.html',
  styleUrls: ['./contract-add.component.css']
})
export class ContractAddComponent implements OnInit {

  addContractForm = new FormGroup({
    startDay: new FormControl(''),
    endDay: new FormControl(''),
    deposit: new FormControl(''),
    customer: new FormControl(''),
    facility: new FormControl('')
  }, [this.validateRegisteredDate]);

  constructor(private contractService: ContractService, private router: Router) {
  }

  ngOnInit(): void {
  }

  validateRegisteredDate(c: AbstractControl): { 'endDayAfterStartDay': boolean } | null {
    const startDay = new Date(c.get('startDay')?.value);
    const endDay = new Date(c.get('endDay')?.value);
    const check = differenceInDays(endDay, startDay);
    return (check < 0) ? {endDayAfterStartDay: true} : null;
  }

  get startDay() {
    return this.addContractForm.get('startDay');
  }

  get endDay() {
    return this.addContractForm.get('endDay');
  }

  get deposit() {
    return this.addContractForm.get('deposit');
  }

  get customer() {
    return this.addContractForm.get('customer');
  }

  get facility() {
    return this.addContractForm.get('facility');
  }

  addNewContract(): void {
    this.contractService.addContract(this.addContractForm.value).subscribe(data => {
      this.router.navigateByUrl('contract/list');
    });
  }
}
