import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  temp?: Product = {};
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      console.log(data);
      // @ts-ignore
      this.products = data;
    }, error => {
    }, () => {
    });
  }


  // showEditForm(): void {
  //   this.router.navigateByUrl('product/edit/:id');
  // }

  passRemoveInfo(id: number | undefined, name: string): void {
    // @ts-ignore
    this.temp.id = id;
    // @ts-ignore
    this.temp.name = name;
  }

  removeProduct(value: string): void {
    this.productService.removeProduct(Number(value)).subscribe(data => {
      this.ngOnInit();
    });
  }

}
