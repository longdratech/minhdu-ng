import {Component, Input, OnInit} from '@angular/core';
import {CredentialsReq} from './common/interfaces/credentials.interface';
import {AuthService} from './modules/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
