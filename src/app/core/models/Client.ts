import { Client } from '../api/models';
import { Role } from '../api/models/role';

export class CLientClass implements Client {
  constructor(
    public active?: boolean,
    public address?: string,
    public email?: string,
    public firstName?: string,
    public idClient?: number,
    public idRol?: number,
    public lastName?: string,
    public password?: string,
    public phone?: string,
    public role?: Role,
    public username?: string,
    public zip_code?: number
  ) {}
}
