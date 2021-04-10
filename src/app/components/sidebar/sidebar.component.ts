import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  titleHeader: string = "PT1";
  iconHeader: string = "fa fa-th-large";
  subTitle: any = [
    {
      path: '', class: '', title: 'Báo cáo và thống kê', icon: 'down', submenu: []
    },
    {
      path: '/nhanvien', class: '', title: 'Báo cáo và thống kê', icon: 'down', submenu: []
    },
    {
      path: '/nhanvien', class: 'has-sub', title: 'Nhân viên 1', icon: 'down',
      submenu: [
        { path: '/', title: 'Danh sách nhân viên', icon: '' },
        { path: '/salary', title: 'Tính lương', icon: '' },
      ]
    },
    {
      path: '/nhanvien', class: 'has-sub', title: 'Nhân viên 1', icon: 'down',
      submenu: [
        { path: '/danhsach', title: 'Danh sách nhân viên', icon: '' },
        { path: '/salary', title: 'Tính lương', icon: '' },
      ]
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
