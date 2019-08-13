import { Component, OnInit, Input } from '@angular/core';
import { SuperFormControl } from '../../../super-forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  @Input() control: SuperFormControl
  constructor() { }

  ngOnInit() {
  }

}
