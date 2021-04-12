import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SideBarComponent } from '../components/sidebar/sidebar.component';


@NgModule({
    imports: [
        LayoutRoutingModule,
        StoreModule.forRoot({}),
        BrowserModule,
        BrowserAnimationsModule,
        NgZorroAntdModule,
        FormsModule,
        HttpClientModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule
    ],
    exports: [],
    providers: [],
    declarations: [
        LayoutComponent,
        SideBarComponent
    ],

    entryComponents: []
})
export class LayoutModule { }
