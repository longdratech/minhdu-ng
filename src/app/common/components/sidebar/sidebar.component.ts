import { Component, Input, OnInit } from '@angular/core';

const listFetchMenu  = [
  {
    path: '/dashboard', title: 'dashboard', icon: 'dashboard', subMenu: []
  },
  {
    path: '/employee', title: 'Nhân viên', icon: 'user',
    subMenu: [
      { path: '/employee', title: 'Danh sách nhân viên', icon: '' },
    ]
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SideBarComponent implements OnInit {

  @Input() isCollapsed!: boolean | string;
  @Input() listMenu = listFetchMenu;
  @Input() indexActive: string | number = 0;
  @Input() classActive: string | number = listFetchMenu[0].path;

  constructor() { }

  ngOnInit(): void {
  }

}
