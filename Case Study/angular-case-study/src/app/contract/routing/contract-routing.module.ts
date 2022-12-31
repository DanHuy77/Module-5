import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContractListComponent} from '../contract-list/contract-list.component';
import {ContractAddComponent} from '../contract-add/contract-add.component';



const routes: Routes = [
  {path: 'list', component: ContractListComponent},
  {path: 'add', component: ContractAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule {
}
