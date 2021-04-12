import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            // { path: '', redirectTo: 'welcome' },
            // { path: 'welcome',  loadChildren: () => import('./human-resource/welcome/welcome.module').then( m => m.WelcomeModule)},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
