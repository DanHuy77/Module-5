import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../service/category.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categoryForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  });

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.categoryForm.value.id = Number(this.categoryForm.value.id);
    this.categoryService.saveCategory(this.categoryForm.value).subscribe(date => {
      this.router.navigateByUrl('/product/category');
    });
  }
}
