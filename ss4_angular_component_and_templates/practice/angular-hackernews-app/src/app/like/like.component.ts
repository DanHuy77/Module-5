import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  like = 0;
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  likeThis() {
    this.like++;
  }
}
