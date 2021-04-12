import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    // tslint:disable-next-line:typedef
    canActivate() {
        if (!localStorage.getItem('openIdTokenParams') ){
            console.log('AuthGuard login');
            return false;
        }
        if (localStorage.getItem('openIdTokenParams')
            || localStorage.getItem('accessToken') ) {
            return true;
        }
        console.log('AuthGuard login');
        this.router.navigate(['/login']);
        return false;
    }
}
