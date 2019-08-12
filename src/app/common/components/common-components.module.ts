import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextInputComponent } from './text-input/text-input.component';
import { DateComponent } from './date/date.component';
import { DynamicFormElementComponent } from './dynamic-component/dynamic-component.component';

@NgModule({
  declarations: [
    DynamicFormElementComponent, TextInputComponent, DateComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  exports: [DynamicFormElementComponent],
  entryComponents: [DynamicFormElementComponent,TextInputComponent,DateComponent]
})
export class CommonComponentsModule { }
