import {CredentialsReq, CredentialsRes} from '../../../common/interfaces/credentials.interface';

export interface IAuthService {
  getToken(): string | null;

  isAuthenticated(): boolean;

  signIn(credentials: CredentialsReq): void;

  signUp(): void;

  logout(): void;

  getInfoUser(): CredentialsRes;

  userHasRole(expectedRole: string): boolean;
}
