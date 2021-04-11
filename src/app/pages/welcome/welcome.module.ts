import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { BasePopupComponent } from '../../components/base-popup/base-popup.component';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzModalModule,
    NzButtonModule,
    NzIconModule
  ],
  declarations: [
    WelcomeComponent,
    BasePopupComponent,
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
