import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSliderComponent } from './img-slider.component';
import { ImgSlideComponent } from './img-slide/img-slide.component';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [ImgSliderComponent, ImgSlideComponent],
  imports: [
    BrowserModule,
  ],
  bootstrap: [ImgSliderComponent]
})
export class ImgSliderModule { }
