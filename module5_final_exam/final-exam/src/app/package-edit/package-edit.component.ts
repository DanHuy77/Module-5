import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../service/app.service";
import {Package} from "../model/Package";
import {Product} from "../model/Product";

@Component({
  selector: 'app-package-edit',
  templateUrl: './package-edit.component.html',
  styleUrls: ['./package-edit.component.css']
})
export class PackageEditComponent implements OnInit {
  package?: Package;
  products?: Product[] = [];
  editPackageForm = new FormGroup({
    id: new FormControl(),
    packageCode: new FormControl('', [Validators.required, Validators.pattern("[L][H][-][0-9]{4}")]),
    product: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.min(1)]),
    importDate: new FormControl('', [Validators.required]),
    producedDate: new FormControl('', [Validators.required]),
    expireDate: new FormControl('', [Validators.required])
  });

  constructor(private activatedRoute: ActivatedRoute, private appService: AppService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.appService.findPackageById(Number(id)).subscribe(data1 => {
          this.package = data1;
          this.editPackageForm.patchValue(this.package);
        });
      }
    });
    this.appService.getAllProduct().subscribe(data => {
      this.products = data;
    });
  }

  compareProduct(item1: Product, item2: Product): boolean {
    return item1.id === item2.id;
  }
  ngOnInit(): void {
  }

  editPackageInformation() {
    this.appService.editPackage(this.editPackageForm.value).subscribe(data => {
      this.router.navigateByUrl('/list');
      alert('Đã sửa thông tin lô hàng');
    });
  }
}
