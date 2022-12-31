import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacilityListComponent} from '../facility-list/facility-list.component';
import {FacilityAddComponent} from '../facility-add/facility-add.component';
import {FacilityEditComponent} from '../facility-edit/facility-edit.component';


const routes: Routes = [
  {path: 'list', component: FacilityListComponent},
  {path: 'add', component: FacilityAddComponent},
  {path: 'edit/:id', component: FacilityEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule {
}
