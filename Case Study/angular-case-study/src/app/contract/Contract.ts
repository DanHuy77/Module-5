import {Customer} from '../customer/Customer';
import {Facility} from '../facility/Facility';

export interface Contract {
  id?: number;
  startDay?: string;
  endDay?: string;
  deposit?: number;
  customer?: Customer;
  facility?: Facility;
}
