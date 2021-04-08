import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-status-tag',
  templateUrl: '../tag-name.component.html',
  styleUrls: ['../tag-name.component.scss']
})
export class PaymentStatusTagComponent implements OnInit {

  @Input() className = "app-payment-status-tag";
  @Input() name = "Đã thanh toán";
  @Input() color = "#fff"
  @Input() backgroundColor = "#15cd96"

  constructor() { }

  ngOnInit(): void {
  }

}
