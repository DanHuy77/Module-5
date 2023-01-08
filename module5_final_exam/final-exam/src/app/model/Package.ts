import {Product} from "./Product";

export class Package {
  id?: number;
  packageCode?: string
  product?: Product;
  quantity?: number;
  importDate?: string;
  producedDate?: string;
  expireDate?: string;
}
