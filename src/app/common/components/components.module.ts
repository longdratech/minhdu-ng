import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './sidebar/sidebar.component';
import { TagNameComponent } from './tag-name/tag-name.component';

@NgModule({
 imports:      [ CommonModule ],
 declarations: [ SideBarComponent, TagNameComponent ],
 exports:      [ SideBarComponent, TagNameComponent,
                 CommonModule, FormsModule ]
})

export class SharedModule { }
