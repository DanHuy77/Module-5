import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [{
  path: 'customer', loadChildren: () => import('./customer/routing/customer.module').then(module => module.CustomerModule)
},
  {
    path: 'facility', loadChildren: () => import('./facility/routing/facility.module').then(module => module.FacilityModule)
  },
  {
    path: 'contract', loadChildren: () => import('./contract/routing/contract.module').then(module => module.ContractModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
