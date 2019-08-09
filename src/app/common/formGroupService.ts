import { FormGroup, FormBuilder } from '@angular/forms';

export class FormGroupService {
    public formGroup: FormGroup;
    public depth: number = 2;

    constructor(protected fb: FormBuilder) {}

    public getPageForm(pageName: string | Array<string>) {
        if (typeof pageName === 'string') {
            return this.formGroup.controls[pageName];
        } else {
           return this.recursiveSearch(pageName, this.formGroup, 0);
        }
    }

    private recursiveSearch(arr: Array<string>, form: FormGroup, i: number) {
        if (arr[i] && form.controls[arr[i]]) {
            return this.recursiveSearch(arr,form.controls[arr[i]] as FormGroup,i+ 1)
        } else {
            return form;
        }
    }
}