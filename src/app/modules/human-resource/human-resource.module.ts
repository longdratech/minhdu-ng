import {NgModule} from '@angular/core';
import {HumanResourceComponent} from './human-resource.component';
import {SideBarComponent} from '../../common/components/sidebar/sidebar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EmployeeComponent} from './employee/employee.component';


@NgModule({
  declarations: [
    HumanResourceComponent,
    SideBarComponent,
    DashboardComponent,
    EmployeeComponent
  ],
})
export class HumanResourceModule {
}
