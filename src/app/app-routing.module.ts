import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/share';

const routes: Routes = [
  // { path: '', loadChildren: './common/modules/login/login.module' , canActivate: [AuthGuard]},
  // { path: '', pathMatch: 'full', redirectTo: '/welcome', canActivate: [AuthGuard]},
  // { path: 'login', loadChildren: './common/modules/login/login.module' },
  // tslint:disable-next-line:max-line-length
  // { path: '', loadChildren: './common/modules/layout.module.ts#LayoutModule'},
  {
    path: 'dashboard',
    loadChildren: () => import('./common/modules/human-resource/welcome/welcome-routing.module').then(m => m.WelcomeRoutingModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
