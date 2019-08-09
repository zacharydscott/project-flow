import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroupService } from '../common/formGroupService';
import { FormTestModule } from './form-test.module';

@Injectable({
  providedIn: 'root'
})
export class FormTestGroupService extends FormGroupService {

  public formGroup = this.fb.group({
    'test-page': this.fb.group({
      basic: this.fb.group({
        subject: [''],
        dateOpened: [null],
        leadInvestigator: [null]
      }),
      additional: this.fb.group({
        comment: [''],
        closeDate: [null]
      })
    })
  });

  constructor(protected fb: FormBuilder) {
    super(fb);
    console.log(this.formGroup)
  }

}
