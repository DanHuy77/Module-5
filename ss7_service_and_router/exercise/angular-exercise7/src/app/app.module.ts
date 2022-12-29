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

@NgModule({
  declarations: [
    AppComponent,
    DictionaryEngComponent,
    DictionaryVieComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductRemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
