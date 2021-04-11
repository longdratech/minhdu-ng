import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee-routing.module';

import { EmployeeComponent } from './employee.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
    imports: [
        EmployeeRoutingModule,
        NzBreadCrumbModule
    ],
    declarations: [EmployeeComponent],
    exports: [EmployeeComponent],
})
export class EmployeeModule { }
