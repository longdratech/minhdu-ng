import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {AuthService} from '../../modules/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const info = this.auth.getInfoUser();
    console.log('expectedRole');
    console.log(expectedRole);
    if (!this.auth.isAuthenticated() || info.role !== expectedRole) {
      console.log(this.auth.isAuthenticated());
      this.router?.navigate(['']);
      return false;
    }
    return true;
  }
}
