import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryEngComponent} from './dictionary/dictionary-eng/dictionary-eng.component';
import {DictionaryVieComponent} from './dictionary/dictionary-vie/dictionary-vie.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {CategoryComponent} from './product/category/category-list/category.component';
import {CategoryAddComponent} from './product/category/category-add/category-add.component';
import {CategoryEditComponent} from './product/category/category-edit/category-edit.component';

const routes: Routes = [
  {path: 'engDic', component: DictionaryEngComponent},
  {path: 'translate/:id/:name', component: DictionaryVieComponent},
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},
  {path: 'product/category', component: CategoryComponent},
  {path: 'product/category-add', component: CategoryAddComponent},
  {path: 'product/category-edit/:id', component: CategoryEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
