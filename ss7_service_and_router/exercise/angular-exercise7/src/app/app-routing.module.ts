import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryEngComponent} from './dictionary/dictionary-eng/dictionary-eng.component';
import {DictionaryVieComponent} from './dictionary/dictionary-vie/dictionary-vie.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';

const routes: Routes = [
  {path: 'engDic', component: DictionaryEngComponent},
  {path: 'translate/:id/:name', component: DictionaryVieComponent},
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/edit/:id', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
