/* tslint:disable */
import { Role } from './role';
export interface Client {
  active?: boolean;
  address?: string;
  email?: string;
  firstName?: string;
  idClient?: number;
  idRol?: number;
  lastName?: string;
  password?: string;
  phone?: string;
  role?: Role;
  username?: string;
  zip_code?: number;
}
