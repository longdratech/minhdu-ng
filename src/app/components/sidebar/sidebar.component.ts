import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isShow: boolean = false;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  showSubMenu(){
    this.isShow = !this.isShow
  }
}
