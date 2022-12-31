import {Component, OnInit} from '@angular/core';
import {FacilityType} from '../FacilityType';
import {RentalType} from '../RentalType';
import {Facility} from '../Facility';
import {FacilityService} from '../service/facility.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[] = [];
  facilityType: FacilityType[] = [];

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilityService.getAllFacility().subscribe(data => {
      this.facilities = data;
    }, error => {
    }, () => {
    });
  }

}
