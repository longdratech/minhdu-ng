import { Component, OnInit, Input } from '@angular/core';

type optionList = any;
type titleName = 'Chức vụ' | string;
@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {
  @Input() titleName: titleName = 'Chức vụ';
  @Input() selectedValue: any;
  @Input() optionList: optionList = [
    { position: 'Nhân sự'},
    { position: 'Quản lý nhân sự'},
    { position: 'Kế toán'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  log(value: {position: string}):void {
    console.log(value)
  }
}
