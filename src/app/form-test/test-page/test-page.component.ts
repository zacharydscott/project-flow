import { Component } from '@angular/core';
import { FormGroupService } from '../form-group.service';
import { SuperFormGroup } from '../../common/super-forms';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent {
  form: SuperFormGroup;
  title: string = 'Test-Page'



  constructor(private formGroupService: FormGroupService) {

  }

  ngOnInit() {
    this.form = this.formGroupService.getPageForm(['test-page']);
    this.title = this.form.label;
  }
 
}
