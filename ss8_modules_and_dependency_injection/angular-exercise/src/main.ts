import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import {ImgSliderModule} from './app/img-slider/img-slider.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ImgSliderModule)
  .catch(err => console.error(err));
