import { Component, OnInit, Input } from '@angular/core';
import { SuperFormControl } from '../../super-forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() control: SuperFormControl
  constructor() { }

  ngOnInit() {
  }

}
