import {Component, Input, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import set = Reflect.set;

@Component({
  selector: 'app-countdown-time',
  templateUrl: './countdown-time.component.html',
  styleUrls: ['./countdown-time.component.css']
})
export class CountdownTimeComponent implements OnInit {
  @Input()
  time: number;
  countTime: number;
  interval;

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  countdown() {
    this.interval = setInterval(() => {
      this.time = this.time - 1;
      if (this.time === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  // tslint:disable-next-line:typedef
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  // tslint:disable-next-line:typedef
  reset() {
    if (this.interval) {
      clearInterval(this.interval);
      this.time = 10;
    }
  }
}
