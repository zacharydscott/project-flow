import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroupServiceBase } from '../common/formGroupService';
import { FormTestModule } from './form-test.module';
import { generateSuperFromJson, SuperFormGroup } from '../common/super-forms';
import * as formJson from './json/form.json';

@Injectable({
  providedIn: 'root'
})
export class FormGroupService extends FormGroupServiceBase {

  // here we can import objects from json and map them as properties of the form group
  // public formGroup = this.fb.group({
  //   'test-page': this.fb.group({
  //     basic: this.fb.group({
  //       subject: [''],
  //       dateOpened: [null],
  //       leadInvestigator: [null]
  //     }),
  //     additional: this.fb.group({
  //       comment: [''],
  //       closeDate: [null]
  //     })
  //   })
  // });
  public formGroup = generateSuperFromJson(formJson['default']) as SuperFormGroup;

  constructor(protected fb: FormBuilder) {
    super(fb);
    console.log(this.formGroup)
  }

}
