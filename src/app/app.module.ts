import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeCodeTagComponent } from './tag-name/employee-code-tag/employee-code-tag.component';
import { EmployeeTagComponent } from './tag-name/employee-tag/employee-tag.component';
import {PaymentStatusTagComponent} from './tag-name/payment-status-tag/payment-status-tag.component';
import {PositionTagComponent} from './tag-name/possition-tag/possition-tag.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeCodeTagComponent,
    EmployeeTagComponent,
    PaymentStatusTagComponent,
    PositionTagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
