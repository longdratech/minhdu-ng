import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {CredentialsReq, CredentialsRes} from 'src/app/common/interfaces/credentials.interface';
import {IAuthService} from './interfaces/auth.interface';
import {User} from './model/user.model';
import {HttpClient} from '@angular/common/http';
import decode from 'jwt-decode';
import {Role} from '../../common/constant/role.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly jwtHelper: JwtHelperService,
    private readonly router: Router
  ) {
  }


  private setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    return !this.jwtHelper.isTokenExpired(token || undefined);
  }

  // TODO: implement signUp()
  public signIn(credentialsReq: CredentialsReq): void {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRyYW5sb25nLmttYUBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJqd3RUeXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNjE4MjI3NzQ2fQ.InCIWkoyalG9QzEK5lc3V8TnKdP5Jpjz4x5nqfGX41w';
    this.setToken(token);
    const user = this.getInfoUser();
    if (user.role === Role.ADMIN) {
      this.router?.navigate(['/human-resource']);
      console.log('navigate human resource');
    }
  }

  // TODO: implement signUp()
  public signUp(): void {
    throw new Error('Method not yet implemented.');
  }

  // FIXME: check logic logout again
  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAt');
    this.router?.navigate(['login']);
  }

  // FIXME: check logic getInfoUser again
  public getInfoUser(): CredentialsRes {
    const token = localStorage.getItem('token');
    console.log(decode(token ?? ''));
    return decode(token ?? '');
  }

  // TODO: implement userHasRole
  public userHasRole(expectedRole: string): boolean {
    throw new Error('Method not yet implemented.');
  }
}
