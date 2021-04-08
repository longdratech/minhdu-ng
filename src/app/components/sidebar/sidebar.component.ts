import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  expanded: boolean = false;
  iconHeader: string = "fa fa-th-large"
  titleHeader: string = "PT1"
  subTitle: any = [];
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.listSubMenu();
  }
  showSubMenu(e: any){
    if(e.submenu && e.submenu.length){
      this.expanded = !this.expanded;
    } 
  }
  listSubMenu(){
    this.subTitle = [
      {
        path: '/report', title:'Báo cáo và thống kê', icon:'fa fa-th-large', submenu: []
      },
      {
        path: '', title:'Nhân viên', icon:'fa fa-th-large', 
        submenu: [
         {path: '/danhsach', title:'Danh sách nhân viên', icon:''},
         {path: '/salary', title:'Tính lương', icon:''},
        ]
      },     
    ]
  }
}
