import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CustomerListComponent} from '../customer-list/customer-list.component';
import {CustomerEditComponent} from '../customer-edit/customer-edit.component';
import {CustomerAddComponent} from '../customer-add/customer-add.component';
import {CustomerRoutingModule} from './customer-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerEditComponent,
    CustomerAddComponent,
  ], imports: [
        CommonModule,
        CustomerRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ]
})
export class CustomerModule {
}

