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
  page = 0;
  size = 5;
  totalPage = 0;
  totalElement = 0;
  productName = '';
  importDate = '';
  startDate = '';
  endDate = '';


  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.search(this.productName, this.importDate, this.startDate, this.endDate);
    this.appService.getAllProduct().subscribe(data => {
      this.product = data;
    });
  }

  // getAllPackage(): void {
  //   this.appService.searchByProductNameAndExpireDateAndImportDate("", "", "", "", this.page, this.size).subscribe(data => {
  //     this.packs = data.content;
  //     this.totalPage = data.totalPages;
  //     this.totalElement = data.totalElements;
  //     console.log(this.totalPage);
  //     console.log(data)
  //   });
  // }

  passRemoveInfo(importDate: string, name: string, id: string): void {
    this.removeImportDate = importDate;
    this.removeId = id;
    this.removeName = name;
  }

  remove() {
    this.appService.removePackage(Number(this.removeId)).subscribe(data => {
      this.ngOnInit();
      alert("Đã xóa lô hàng")
    });
  }

  search(productName: string, importDate: string, producedDate: string, expireDate: string) {
    this.productName = productName;
    this.importDate = importDate;
    this.startDate = producedDate;
    this.endDate = expireDate;
    this.appService.searchByProductNameAndExpireDateAndImportDate(this.productName, this.importDate, this.startDate, this.endDate, this.page, this.size).subscribe(data => {
      this.packs = data.content;
      this.totalElement = data.totalElements;
      this.totalPage = data.totalPages;
      console.log(data);
    });
  }

  previousPage() {
    if (this.page == 0) {

    } else {
      this.page = this.page - 1;
      this.ngOnInit();
    }
  }

  nextPage() {
    if (this.page == this.totalPage - 1) {

    } else {
      this.page = this.page + 1;
      this.ngOnInit();
    }
  }
}
