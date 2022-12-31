import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe, formatDate} from '@angular/common';
import {Local} from 'protractor/built/driverProviders';
import {ContractService} from '../service/contract.service';
import {Router} from '@angular/router';

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
  }, [Validators.required, this.endDayValidate]);

  constructor(private contractService: ContractService, private router: Router) {
  }

  ngOnInit(): void {
  }

  endDayValidate(addContractForm: any): { invalidEndDay: boolean } | null {
    const datePipe: DatePipe = new DatePipe('en-US');
    const dateOfStart = datePipe.transform(addContractForm.controls.startDay.value, 'yyyy/MM/dd');
    const dateOfEnd = datePipe.transform(addContractForm.controls.endDay.value, 'yyyy/MM/dd');
    console.log(dateOfStart);
    // if (dateOfStart < dateOfEnd) {
    //   return {invalidEndDay: true};
    // }
    return null;
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
