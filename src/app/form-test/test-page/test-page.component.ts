import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormTestGroupService } from '../form-test-group.service';
import { SuperFormGroup } from '../../common/super-forms';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent {
  form: SuperFormGroup;
  title: string = 'Test-Page'



  constructor(private formTestGroupService: FormTestGroupService) {

  }

  ngOnInit() {
    this.form = this.formTestGroupService.getPageForm(['test-page']);
    this.title = this.form.label;
  }
 
}
