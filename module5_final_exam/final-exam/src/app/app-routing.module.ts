import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PackageListComponent} from "./package-list/package-list.component";
import {PackageAddComponent} from "./package-add/package-add.component";
import {PackageEditComponent} from "./package-edit/package-edit.component";

const routes: Routes = [{
  path: 'list', component: PackageListComponent
},
  {path: 'add', component: PackageAddComponent},
  {path: 'edit/:id', component: PackageEditComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
