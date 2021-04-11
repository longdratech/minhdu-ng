import { Component, Input, OnInit } from '@angular/core';


type Submit = 'Thêm vào bảng' | 'Cập nhật' | string;
type Title = 'Thêm lương vào bản' | 'Thêm khoản vay' | 'Thêm tiền khấu trừ' | 'Thêm tiền phụ cấp' | 'Cập nhật tên' | string
type classButtonName = 'plus-employee-salary' | 'btn-edit-employee' | 'btn-delete-employee' | string
type buttonIcon = 'edit' | 'delete' | 'plus' |string
@Component({
  selector: 'app-base-popup',
  templateUrl: './base-popup.component.html',
  styleUrls: ['./base-popup.component.scss']
})
export class BasePopupComponent implements OnInit {
  @Input() title: Title = 'Cậo nhật tên';
  @Input() CustomSubmit: Submit = 'Cập nhật';
  @Input() classBtnName: classButtonName = 'btn-edit-employee'
  @Input() buttonIcon: buttonIcon = 'edit';
  @Input() contentModal = `Nội dung`;
  isVisible: boolean = false;
  isConfirmLoading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }
  handleCancel(): void {
    this.isVisible = false;
  }


}
