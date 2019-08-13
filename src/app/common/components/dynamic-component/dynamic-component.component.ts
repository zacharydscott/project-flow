import { Component, ViewChild, ViewContainerRef, Input, ComponentFactoryResolver, AfterViewInit, Renderer, ChangeDetectorRef } from '@angular/core';
import { SuperFormControl } from '../../super-forms';
import { TextInputComponent } from '../dynamic-form-components/text-input/text-input.component';
import { DateComponent } from '../dynamic-form-components/date/date.component';

@Component({
  selector: 'app-dynamic-form-element-component',
  template: '<div class="field" #container></div>',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicFormElementComponent implements AfterViewInit {
  @Input() type: string;
  @Input() control: SuperFormControl;
  @ViewChild('container',{read:ViewContainerRef,static: false}) container: ViewContainerRef;

  private elementMap = {
    'text': TextInputComponent,
    'date': DateComponent
  }
  constructor(private componentFactoryResolver: ComponentFactoryResolver,private detector: ChangeDetectorRef) { }

  ngAfterViewInit() {
    let factory = this.componentFactoryResolver.resolveComponentFactory(this.elementMap[this.type || this.control.type]);
    const comp = this.container.createComponent(factory).instance as any;
    comp.control = this.control;
    this.detector.detectChanges();
  }

}
