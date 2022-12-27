import { Component } from '@angular/core';
import {IRatingUnit} from './IRatingUnit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fatherRating: IRatingUnit = {point: 5, color: '#FF69B4'};
  title = 'angular-rating-bar';
  // tslint:disable-next-line:typedef
}
