import { Component, Input } from '@angular/core';
import { SuperFormGroup } from '../../../common/super-forms';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
  @Input() form: SuperFormGroup;
}
