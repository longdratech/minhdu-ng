import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {
  @Input() titleName: string = 'Chức vụ'
  test: string = '';
  position: any[] = [
    {
      'name': 'UK'
    },
    {
      'name': 'US',
    }
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.position)
  }
  getDataDropdown(): void{
    this.test = 'Nhân sự'
  }
}
