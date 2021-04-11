import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  template: `
    <nz-pagination (nzPageIndexChange)="this.handleChange($event)"
    class="app-paginator"
    [nzPageSize]="this.limitShow"
    [nzPageIndex]="this.indexDefault"
    [nzTotal]="this.totalDefault"></nz-pagination>
  `,
  styleUrls: ['./paginator.component.scss']
})

export class PaginatorComponent implements OnInit {

  @Input() totalDefault = 10;
  @Input() indexDefault = 1;
  @Input() limitShow = 5;
  @Input() handleChange = (event: any) => {
    console.log('change', event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
