import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() pageName = 'PT 1';
  @Input() imgLogo = '/assets/images/logo.png';
  @Input() isCollapsed: any = false;
}
