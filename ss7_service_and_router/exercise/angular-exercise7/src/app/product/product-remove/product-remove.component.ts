import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-remove',
  templateUrl: './product-remove.component.html',
  styleUrls: ['./product-remove.component.css']
})
export class ProductRemoveComponent implements OnInit, OnChanges {
  @Input()
  product?: Product = {};

  constructor(private productService: ProductService, private router: Router) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    // @ts-ignore
    // this.product = this.productService.findProductById(this.product.id);
  }
  ngOnInit(): void {
  }

  removeProduct(): void {
    this.productService.removeProductById(Number(this.product?.id));
    document.getElementById('exampleModal')?.click();
  }
}

