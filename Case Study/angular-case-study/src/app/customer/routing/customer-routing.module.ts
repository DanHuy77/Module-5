import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from '../customer-list/customer-list.component';
import {CustomerAddComponent} from '../customer-add/customer-add.component';
import {CustomerEditComponent} from '../customer-edit/customer-edit.component';

const routes: Routes = [
  {path: 'list', component: CustomerListComponent},
  {path: 'add', component: CustomerAddComponent},
  {path: 'edit/:id', component: CustomerEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
