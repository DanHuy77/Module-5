import {Component, Input, OnInit} from '@angular/core';
import {IRatingUnit} from '../IRatingUnit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  rating: IRatingUnit[] = [{point: 1, color: '#E6E6FA'},
    {point: 2, color: '#E6E6FA'},
    {point: 3, color: '#E6E6FA'},
    {point: 4, color: '#E6E6FA'},
    {point: 5, color: '#E6E6FA'},
    {point: 6, color: '#E6E6FA'},
    {point: 7, color: '#E6E6FA'},
    {point: 8, color: '#E6E6FA'},
    {point: 9, color: '#E6E6FA'},
    {point: 10, color: '#E6E6FA'}];
  @Input()
  childRating: IRatingUnit = {};

  constructor() {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.rating.length; i++) {
      // @ts-ignore
      if (this.rating[i].point <= this.childRating.point) {
        this.rating[i].color = '#FF69B4';
      }
    }
  }

  // tslint:disable-next-line:typedef
  changeColor(point: number) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.rating.length; i++) {
      // @ts-ignore
      if (this.rating[i].point <= point) {
        this.rating[i].color = '#FF69B4';
        this.childRating.point = point;
      } else { // @ts-ignore
        if (this.rating[i].point > point) {
          this.rating[i].color = '#E6E6FA';
          this.childRating.point = point;
        }
      }
    }
  }

}
