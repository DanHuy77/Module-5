import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../model/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category?: Category;
  categoryForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  });

  constructor(private categoryService: CategoryService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.categoryService.findCategoryById(Number(id)).subscribe(data1 => {
          this.category = data1;
          this.categoryForm.patchValue(this.category);
        });
      }
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.categoryService.editCategory(this.categoryForm.value).subscribe(data => {
      this.router.navigateByUrl('/product/category');
    });
  }
}
