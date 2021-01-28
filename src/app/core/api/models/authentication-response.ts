/* tslint:disable */
import { Client } from './client';
export interface AuthenticationResponse {
  jwt?: string;
  user?: Client;
}
