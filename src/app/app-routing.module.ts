import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HumanResourceComponent} from './modules/human-resource/human-resource.component';
import {AppComponent} from './app.component';
import {RoleGuard} from './share/guards/role.guard';
import {Role} from './common/constant/role.constant';

const routes: Routes = [
  {
    path: 'human-resource',
    component: HumanResourceComponent,
    canActivate: [RoleGuard],
    data: {expectedRole: Role.ADMIN}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
