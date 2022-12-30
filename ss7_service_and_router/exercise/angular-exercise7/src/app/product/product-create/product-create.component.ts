import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CategoryService} from '../category/service/category.service';
import {Category} from '../category/model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[] = [];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  constructor(private productService: ProductService, private router: Router, private categoryService: CategoryService) {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.productForm.value.id = Number(this.productForm.value.id);
    this.productService.saveProduct(this.productForm.value).subscribe(data => {
      this.router.navigateByUrl('product/list');
    });

  }
}
