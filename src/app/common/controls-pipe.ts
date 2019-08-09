import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'controls'})
export class controlsPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let controls = [];
    for (let key in value) {
     controls.push(value[key]);
    }
    console.log(controls)
    return controls;
  }
}