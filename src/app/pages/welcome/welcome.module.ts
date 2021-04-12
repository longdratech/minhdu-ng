import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
// import { NgZorroAntdModule } from '../../ng-zorro-antd.module';

@NgModule({
  imports: [WelcomeRoutingModule, NzPaginationModule],
  declarations: [WelcomeComponent, PaginatorComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
