import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-code-tag',
  templateUrl: '../tag-name.component.html',
  styleUrls: ['../tag-name.component.scss']
})
export class EmployeeCodeTagComponent implements OnInit {

  @Input() className="app-employee-code-tag";
  @Input() name="TP0129829832389";
  @Input() color="#15cd96";
  @Input() backgroundColor = "#fff";
  @Input() borderColor = "#15cd96";
  constructor() { }

  ngOnInit(): void {
  }

}
