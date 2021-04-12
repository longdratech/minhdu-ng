import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee-routing.module';

import { EmployeeComponent } from './employee.component';

@NgModule({
    imports: [EmployeeRoutingModule],
    declarations: [EmployeeComponent],
    exports: [EmployeeComponent],
})
export class EmployeeModule { }
