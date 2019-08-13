import { Component, OnInit, Input } from '@angular/core';
import { SuperFormGroup } from '../../super-forms';

@Component({
  selector: 'app-dynamic-form-section',
  templateUrl: './dynamic-form-section.component.html',
  styleUrls: ['./dynamic-form-section.component.scss']
})
export class DynamicFormSectionComponent implements OnInit {
  @Input() section: SuperFormGroup;
  constructor() { }

  ngOnInit() {
  }

}
