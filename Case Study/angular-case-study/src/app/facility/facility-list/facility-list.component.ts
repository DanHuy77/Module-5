import {Component, OnInit} from '@angular/core';
import {FacilityType} from '../FacilityType';
import {RentalType} from '../RentalType';
import {Facility} from '../Facility';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityTypes: FacilityType[] = [{id: 1, name: 'Villa'}, {id: 2, name: 'House'}, {id: 3, name: 'Room'}];
  rentalTypes: RentalType[] = [{id: 1, name: 'Year'}, {id: 2, name: 'Month'}, {id: 3, name: 'Day'}, {id: 4, name: 'Hour'}];
 public facilities: Facility[] = [{
    id: 1,
    name: 'Villa Beach Front',
    area: 25000,
    cost: 1000000,
    maxUser: 10,
    roomStandard: 'Vip',
    otherDescription: 'Có hồ bơi',
    poolArea: 500,
    floorNumber: 4,
    rentalType: this.rentalTypes[2],
    facilityType: this.facilityTypes[0]
  },
    {
      id: 2,
      name: 'House Princess 01',
      area: 14000,
      cost: 5000000,
      maxUser: 7,
      roomStandard: 'Vip',
      otherDescription: 'Có thêm bếp nướng',
      floorNumber: 3,
      rentalType: this.rentalTypes[1],
      facilityType: this.facilityTypes[1]
    },
    {
      id: 3,
      name: 'Room Twin 01',
      area: 5000,
      cost: 1000000,
      maxUser: 2,
      roomStandard: 'Normal',
      otherDescription: 'Có tivi',
      freeService: '1 xe máy, 1 xe đạp',
      rentalType: this.rentalTypes[3],
      facilityType: this.facilityTypes[2]
    },
    {
      id: 4,
      name: 'Villa No Beach Front',
      area: 22000,
      cost: 9000000,
      maxUser: 8,
      roomStandard: 'Normal',
      otherDescription: 'Có hồ bơi',
      poolArea: 300,
      floorNumber: 3,
      rentalType: this.rentalTypes[2],
      facilityType: this.facilityTypes[0]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
