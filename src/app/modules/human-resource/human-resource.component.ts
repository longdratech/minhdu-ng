import {Component, Input, OnInit} from '@angular/core';
import {ordersTimelineTransition, routerTransition, touchScreenCheckoutTransition} from '../../share/animations/router.animations';

@Component({
  selector: 'app-layout',
  templateUrl: './human-resource.component.html',
  styleUrls: ['./human-resource.component.scss'],
  animations: [routerTransition(), ordersTimelineTransition(), touchScreenCheckoutTransition()]
})

export class HumanResourceComponent implements OnInit {

  @Input() pageName = 'PT 1';
  @Input() imgLogo = '/assets/images/logo.png';
  @Input() isCollapsed: any = false;

  constructor() {
  }

  ngOnInit(): void {
  }


}
