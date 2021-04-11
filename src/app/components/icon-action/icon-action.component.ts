import { Component, Input, OnInit } from '@angular/core';

type Color = '#F3DE70' | '#29CC97' | '#7749F8' | string
type Icon = 'download' | 'share-alt' | 'close' |string
@Component({
  selector: 'app-icon-action',
  templateUrl: './icon-action.component.html',
  styleUrls: ['./icon-action.component.scss']
})
export class IconActionComponent implements OnInit {
  @Input() backgroundColor: Color = '#F3DE70';
  @Input() iconAction: Icon = 'download';
  constructor() { }

  ngOnInit(): void {
  }
  EventIcon(): void{
    console.log('event')
  }
}
