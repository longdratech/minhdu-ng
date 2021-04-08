import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-position-tag',
  templateUrl: '../tag-name.component.html',
  styleUrls: ['../tag-name.component.scss']
})
export class PositionTagComponent implements OnInit {

  constructor() { 
    
  }
  ngOnInit(): void {
  }
  @Input() className="app-position-tag";
  @Input() name="Quản lý trại";
  @Input() color="#fff"
  @Input() backgroundColor = "#EB5757"
}
