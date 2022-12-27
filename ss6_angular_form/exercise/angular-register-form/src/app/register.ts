import {Country} from './register/country';

export interface RegisterInfo {
  // id?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
  country?: Country;
  age?: number;
  gender?: boolean;
  phoneNumber?: string;
}
