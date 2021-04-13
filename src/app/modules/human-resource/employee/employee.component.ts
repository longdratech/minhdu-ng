import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  clickE = (e: any) => {
    console.log(e);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
