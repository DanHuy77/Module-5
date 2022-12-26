import {FacilityType} from './FacilityType';
import {RentalType} from './RentalType';

export interface Facility {
  id?: number;
  name?: string;
  area?: number;
  cost?: number;
  maxUser?: number;
  roomStandard?: string;
  otherDescription?: string;
  poolArea?: number;
  floorNumber?: number;
  freeService?: string;
  rentalType?: RentalType;
  facilityType?: FacilityType;
}
