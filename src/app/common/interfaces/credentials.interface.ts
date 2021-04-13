import {Role} from '../constant/role.constant';
import {TokenType} from '@angular/compiler';

export interface CredentialsReq {
  email: string;
  password: string;
}

export class CredentialsRes {
  email!: string;
  role!: Role;
  jwtType!: TokenType;
}
