import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryEngComponent } from './dictionary/dictionary-eng/dictionary-eng.component';
import { DictionaryVieComponent } from './dictionary/dictionary-vie/dictionary-vie.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductRemoveComponent } from './product/product-remove/product-remove.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './product/category/category-list/category.component';
import { CategoryAddComponent } from './product/category/category-add/category-add.component';
import { CategoryEditComponent } from './product/category/category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryEngComponent,
    DictionaryVieComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductRemoveComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
