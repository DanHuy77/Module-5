import {Component, OnInit} from '@angular/core';
import {FacilityType} from '../FacilityType';
import {FormControl, FormGroup} from '@angular/forms';
import {FacilityService} from '../service/facility.service';
import {Router} from '@angular/router';
import {RentalType} from '../RentalType';

@Component({
  selector: 'app-facility-add',
  templateUrl: './facility-add.component.html',
  styleUrls: ['./facility-add.component.css']
})
export class FacilityAddComponent implements OnInit {
  facilityType: FacilityType[] = [];
  rentalType: RentalType[] = [];
  addFacilityForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    area: new FormControl(),
    cost: new FormControl(),
    maxUser: new FormControl(),
    roomStandard: new FormControl(),
    otherDescription: new FormControl(),
    poolArea: new FormControl(),
    floorNumber: new FormControl(),
    freeService: new FormControl(),
    rentalType: new FormControl(),
    facilityType: new FormControl()
  });

  constructor(private facilityService: FacilityService, private router: Router) {
    this.facilityService.getAllFacilityType().subscribe(data => {
      this.facilityType = data;
    });
    this.facilityService.getAllRentalType().subscribe(data => {
      this.rentalType = data;
    });
  }

  ngOnInit(): void {
  }

  addNewFacility(): void {
    this.addFacilityForm.value.id = Number(this.addFacilityForm.value.id);
    this.facilityService.addFacility(this.addFacilityForm.value).subscribe(data => {
      this.router.navigateByUrl('facility/list');
    });
  }
}
