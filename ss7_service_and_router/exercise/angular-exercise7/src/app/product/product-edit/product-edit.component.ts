import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product?: Product | null;
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.product = productService.findProductById(Number(id));
        // @ts-ignore
        this.productForm.patchValue(this.product);
      }
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.productService.editProduct(this.productForm.value);
    console.log(this.productForm.controls.id);
    console.log(this.productForm.value);
    this.router.navigateByUrl('product/list');
  }
}
