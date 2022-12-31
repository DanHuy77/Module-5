import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FacilityRoutingModule} from './facility-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FacilityListComponent} from '../facility-list/facility-list.component';
import {FacilityAddComponent} from '../facility-add/facility-add.component';
import {FacilityEditComponent} from '../facility-edit/facility-edit.component';

@NgModule({
  declarations: [
    FacilityListComponent,
    FacilityAddComponent,
    FacilityEditComponent
  ], imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule {
}

