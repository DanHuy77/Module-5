import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../customer/Customer';
import {CustomerType} from '../../customer/CustomerType';
import {Facility} from '../Facility';
import {FacilityType} from '../FacilityType';
import {RentalType} from '../RentalType';


@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  FACILITY_URL = 'http://localhost:3000/facility';
  FACILITY_TYPE_URL = 'http://localhost:3000/facilityType';

  constructor(private httpClient: HttpClient) {
  }

  getAllFacility(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.FACILITY_URL);
  }

  addFacility(facility: Facility): Observable<Facility> {
    return this.httpClient.post(this.FACILITY_URL, facility);
  }

  findFacilityById(id: number): Observable<Facility> {
    return this.httpClient.get<Customer>(this.FACILITY_URL + '/' + id);
  }

  editFacility(facility: Facility): Observable<Facility> {
    return this.httpClient.patch(this.FACILITY_URL + '/' + facility.id, facility);
  }


  removeFacility(id: number): Observable<Facility> {
    return this.httpClient.delete(this.FACILITY_URL + '/' + id);
  }

  getAllFacilityType(): Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>(this.FACILITY_TYPE_URL);
  }

  getAllRentalType(): Observable<RentalType[]> {
    return this.httpClient.get<RentalType[]>('http://localhost:3000/rentalType');
  }
}
