import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TextInputComponent } from './dynamic-form-components/text-input/text-input.component';
import { DateComponent } from './dynamic-form-components/date/date.component';
import { DynamicFormElementComponent } from './dynamic-component/dynamic-component.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { controlsPipe } from '../controls-pipe';
import { CommonModule } from '@angular/common';
import { DynamicFormSectionComponent } from './dynamic-form-section/dynamic-form-section.component';

@NgModule({
  declarations: [
    controlsPipe, DynamicFormElementComponent, TextInputComponent, DateComponent, DynamicFormComponent, DynamicFormSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  exports: [DynamicFormElementComponent, DynamicFormComponent],
  entryComponents: [DynamicFormElementComponent,TextInputComponent,DateComponent]
})
export class CommonComponentsModule { }
