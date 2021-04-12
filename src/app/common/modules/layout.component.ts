import { Component, OnInit, ChangeDetectorRef, HostListener, EventEmitter, ViewContainerRef, NgZone, Input } from '@angular/core';
// import { ApiService } from '../services/api.service';
import { routerTransition, ordersTimelineTransition, touchScreenCheckoutTransition } from '../../router.animations';
import * as _ from 'lodash';
// import * as moment from 'moment';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    animations: [routerTransition(), ordersTimelineTransition(), touchScreenCheckoutTransition()]
})

export class LayoutComponent implements OnInit {

    @Input() pageName = 'PT 1';
    @Input() imgLogo = '/assets/images/logo.png';
    @Input() isCollapsed: any = false;

    constructor(
        private ngZone: NgZone,
        // private apiService: ApiService
        ) {}

    ngOnInit() { }


}
