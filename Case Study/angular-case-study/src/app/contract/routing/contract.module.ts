import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ContractRoutingModule} from './contract-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ContractListComponent} from '../contract-list/contract-list.component';
import {ContractAddComponent} from '../contract-add/contract-add.component';

@NgModule({
  declarations: [
    ContractListComponent,
    ContractAddComponent
  ], imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContractModule {
}

