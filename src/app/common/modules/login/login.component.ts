import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition, componentTransition } from '../router.animations';
import * as _ from 'lodash';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animations: [routerTransition(), componentTransition()],
})

export class LoginComponent implements OnInit {

  state: any = {
    hasSocialUser: false,
    isLinked: true
  };

  groupLoginId: string | undefined;

  localVM: any = {};

  constructor(
    public router: Router, private zone: NgZone,
    private authService: AuthService,
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // if (this.authService.isConnected) {
    //   this.addListenLogin();
    // }

    this.authService.connectedEvent.subscribe((r: any) => {
      this.addListenLogin();
    });
  }

  // tslint:disable-next-line:typedef
  addListenLogin() {
    // this.authService.listenEvent('SendDirectMessageComming', (token: string) => {
    //   this.processTokenResponse(token);
    // });
  }

  // tslint:disable-next-line:typedef
  onLogged() {
    // localStorage.setItem('isLoggers', 'true');
  }

  // tslint:disable-next-line:typedef
  private processTokenResponse(response: string) {
    localStorage.removeItem('openIdTokenParams');
    localStorage.setItem('accessToken', response);
    this.router.navigateByUrl('');
  }

  // signIn(provider: any){}
  // logout(){}
}
