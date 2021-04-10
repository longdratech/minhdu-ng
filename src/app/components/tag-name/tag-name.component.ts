
/* * Use
* <app-tag-name backgroundColor="#15cd96" colorName="#fff"></app-tag-name>
* <app-tag-name className="app-employee-code-tag" name="app-employee-code-tag"  borderColor="red" colorName="#fff"></app-tag-name>
* <app-tag-name className="app-employee-tag" colorCode="#15cd96" backgroundColor="#15cd96" colorName="#fff"></app-tag-name>
* <app-tag-name className="app-payment-status-tag" backgroundColor="#15cd96" colorName="#fff"></app-tag-name>
*/

import { Component, OnInit, Input } from '@angular/core';

type ClassTagName = 'app-position-tag' | 'app-payment-status-tag' | 'app-employee-code-tag' | 'app-employee-tag';
type Color = 'white' | '#15cd96' | '#EB5757' | string ;
type BorderColor = 'none' | Color;

@Component({
  selector: 'app-tag-name',
  templateUrl: './tag-name.component.html',
  styleUrls: ['./tag-name.component.scss']
})

export class TagNameComponent implements OnInit {

  @Input() className: ClassTagName = 'app-position-tag';
  @Input() name = 'tag name';
  @Input() code = 'Code0129829832389';
  @Input() colorName: Color = '#EB5757';
  @Input() colorCode: Color = '#15cd96';
  @Input() backgroundColor: Color = 'white';
  @Input() borderColor: BorderColor = 'none' ;

  constructor() { }

  ngOnInit(): void {

  }

}
