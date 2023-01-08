import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../service/app.service";
import {Product} from "../model/Product";
import {Router} from "@angular/router";
import {PackageListComponent} from "../package-list/package-list.component";
import {Package} from "../model/Package";

@Component({
  selector: 'app-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.css']
})
export class PackageAddComponent implements OnInit {
  products?: Product[] = [];
  addPackageForm = new FormGroup({
    packageCode: new FormControl('', [Validators.required, Validators.pattern("[L][H][-][0-9]{4}")]),
    product: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.min(1)]),
    importDate: new FormControl('', [Validators.required]),
    producedDate: new FormControl('', [Validators.required]),
    expireDate: new FormControl('', [Validators.required])
  });
  packs: Package[] = [];
  p = 0;

  constructor(private appService: AppService, private router: Router) {
    this.appService.getAllProduct().subscribe(data => {
      this.products = data;
      console.log(data)
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {

  }


  validate(c: AbstractControl): { 'invalidProducedDate': boolean } | { 'invalidImportDate': boolean } | null {
    let importDate = new Date(c.value.get('importDate'));
    let expireDate = new Date(c.value.get('expireDate'));
    let producedDate = new Date(c.value.get('producedDate'));
    if (producedDate > expireDate || producedDate > importDate) {
      return {'invalidProducedDate': true}
    } else if (importDate < expireDate) {
      return {'invalidImportDate': true}
    }
    return null;
  }

  addNewPackage() {
    this.addPackageForm.value.id = Number(this.addPackageForm.value.id);
    if (this.addPackageForm.valid) {
      this.appService.addPackage(this.addPackageForm.value).subscribe(data => {
        this.router.navigateByUrl("/list");
      });
    }
  }
}
