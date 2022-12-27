import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  // @ts-ignore
  num1: number;
  // @ts-ignore
  num2: number;
  // @ts-ignore
  operator: string;
  // @ts-ignore
  operator2: string;
  // @ts-ignore
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  changeNum1(num1: string) {
    // tslint:disable-next-line:radix
    this.num1 = parseInt(num1);
  }

  // tslint:disable-next-line:typedef
  changeNum2(num2: string) {
    // tslint:disable-next-line:radix
    this.num2 = parseInt(num2);
  }

  // tslint:disable-next-line:typedef
  changeOperator(operator: string) {
    this.operator = operator;
  }

  // tslint:disable-next-line:typedef
  calculate(operator2: string) {
    this.operator2 = operator2;
// tslint:disable-next-line:no-unused-expression
    switch (this.operator) {
      case '+':
        // @ts-ignore
        // tslint:disable-next-line:radix
        this.result = this.num1 + this.num2;
        break;
      case '-':
        // @ts-ignore
        this.result = this.num1 - this.num2;
        break;
      case 'x':
        // @ts-ignore
        this.result = this.num1 * this.num2;
        break;
      case '/':
        // @ts-ignore
        this.result = this.num1 / this.num2;
        break;
    }
  }
}
