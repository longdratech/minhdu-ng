import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee-routing.module';

import { EmployeeComponent } from './employee.component';
import { CustomDropdownComponent } from '../../components/custom-dropdown/custom-dropdown.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
    imports: [
        EmployeeRoutingModule,
        NzDropDownModule,
        NzIconModule
    ],
    declarations: [EmployeeComponent,CustomDropdownComponent],
    exports: [EmployeeComponent],
})
export class EmployeeModule { }
