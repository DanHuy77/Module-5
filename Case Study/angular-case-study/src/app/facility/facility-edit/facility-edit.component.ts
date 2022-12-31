import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FacilityService} from '../service/facility.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Facility} from '../Facility';
import {FacilityType} from '../FacilityType';
import {RentalType} from '../RentalType';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  editFacilityForm = new FormGroup({
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
  facility?: Facility;
  facilityType?: FacilityType[] = [];
  rentalType?: RentalType[] = [];

  constructor(private facilityService: FacilityService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.facilityService.findFacilityById(Number(id)).subscribe(data1 => {
          this.facility = data1;
          this.editFacilityForm.patchValue(this.facility);
        });
      }
    });
    this.facilityService.getAllFacilityType().subscribe(data => {
      this.facilityType = data;
    });
    this.facilityService.getAllRentalType().subscribe(data => {
      this.rentalType = data;
    });
  }

  ngOnInit(): void {
  }

  editFacility(): void {
    this.facilityService.editFacility(this.editFacilityForm.value).subscribe(data => {
      this.router.navigateByUrl('/facility/list');
    });
  }
}
