import {Component, OnInit} from '@angular/core';
import {CredentialsReq} from '../../common/interfaces/credentials.interface';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials!: CredentialsReq;
  title = 'áđá';

  constructor(private readonly authService: AuthService) {
  }

  ngOnInit(): void {
    this.credentials.email = 'tranlong.kma@gmail.com';
    this.credentials.password = '123123';
  }

  public login(): void {
    this.authService.signIn(this.credentials);
  }
}
