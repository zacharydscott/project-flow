import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPageComponent } from './test-page/test-page.component';
import { RoutingModule } from './routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { controlsPipe } from '../common/controls-pipe';
import { CommonComponentsModule } from '../common/components/common-components.module';

@NgModule({
  declarations: [TestPageComponent,controlsPipe],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RoutingModule,
    CommonComponentsModule
  ]
})
export class FormTestModule { }
