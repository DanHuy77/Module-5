import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../category/service/category.service';
import {Category} from '../category/model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router,
              private activatedRoute: ActivatedRoute, private categoryService: CategoryService) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.productService.findProductById(Number(id)).subscribe(data1 => {
          this.product = data1;
          this.productForm.patchValue(this.product);
        });
      }
    });
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  categories: Category[] = [];
  product?: Product | null;

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  ngOnInit(): void {
  }

  submit(): void {
    this.productService.editProduct(this.productForm.value).subscribe(data => {
      this.router.navigateByUrl('product/list');
    });
    console.log(this.productForm.controls.id);
    console.log(this.productForm.value);
  }


  compareCate(item1: Category, item2: Category): boolean {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
}
