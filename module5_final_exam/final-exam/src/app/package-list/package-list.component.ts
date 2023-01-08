import {Component, OnInit} from '@angular/core';
import {Package} from "../model/Package";
import {Product} from "../model/Product";
import {AppService} from "../service/app.service";

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  p = 0;
  packs: Package[] = [];
  product: Product[] = [];
  removeId?: string;
  removeName?: string;
  removeImportDate?: string;

  constructor(private appService: AppService) {
    this.getAllPackage();
  }

  ngOnInit(): void {
    this.appService.getAllProduct().subscribe(data => {
      this.product = data;
    });
  }

  getAllPackage(): void {
    this.appService.searchByProductNameAndExpireDateAndImportDate("", "", "", "").subscribe(data => {
      this.packs = data.content;
      console.log(data)
    });
  }

  passRemoveInfo(importDate: string, name: string, id: string): void {
    this.removeImportDate = importDate;
    this.removeId = id;
    this.removeName = name;
  }

  remove() {
    this.appService.removePackage(Number(this.removeId)).subscribe(data => {
      this.getAllPackage();
      alert("Đã xóa lô hàng")
    });
  }

  search(productName: string, importDate: string, producedDate: string, expireDate: string) {
    this.appService.searchByProductNameAndExpireDateAndImportDate(productName, importDate, producedDate, expireDate).subscribe(data => {
      this.packs = data.content;
    });
  }
}
