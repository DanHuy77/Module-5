import {CustomerType} from './CustomerType';

export interface Customer {
  id?: number;
  name?: string;
  birthday?: string;
  gender?: boolean;
  idNumber?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  customerType?: CustomerType;
}
