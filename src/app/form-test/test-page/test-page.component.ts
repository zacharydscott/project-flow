import { Component, OnInit } from '@angular/core';
import { FormTestGroupService } from '../form-test-group.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent {
  form: FormGroup;
  title: string = 'Test-Page'
  constructor(private formTestGroupService: FormTestGroupService) { 

  }

  ngOnInit() {
    this.form = this.formTestGroupService.getPageForm(['test-page'])
  }

}
