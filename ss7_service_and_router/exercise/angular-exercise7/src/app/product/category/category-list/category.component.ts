import {Component, OnInit} from '@angular/core';
import {Category} from '../model/category';
import {CategoryService} from '../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    }, );
  }

  ngOnInit(): void {
  }

}
