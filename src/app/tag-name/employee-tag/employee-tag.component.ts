import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-tag',
  templateUrl: './app-employee-tag.component.html',
  styleUrls: ['../tag-name.component.scss']
})
export class EmployeeTagComponent implements OnInit {
  
  @Input() className="app-employee-tag";
  @Input() name="app-employee";
  @Input() code="TP0129829832389";
  @Input() colorName="#fff";
  @Input() colorCode="#15cd96";
  @Input() backgroundColor = "#15cd96";

  constructor() { }

  ngOnInit(): void {

  }


}
