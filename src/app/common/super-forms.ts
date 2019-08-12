import { FormGroup, FormControl } from '@angular/forms';

export class SuperFormGroup extends FormGroup {
    label: string;
    level?: 'module' | 'page' | 'section' | 'subSection';
    controls: { [key: string]: SuperFormControl | SuperFormGroup};
    constructor(label: string, level?: 'module' | 'page' | 'section' | 'subSection') {
        super({})
        this.label = label;
        this.level = level ? level : null;
        this.controls = {};
    }
}

export class SuperFormControl extends FormControl {
    // key: string;
    label: string;
    editable: boolean = true;
    visible: boolean = true;
    required: boolean = false;
    refData: any;

    // eventually I'll wnt to replace this with all th e possible options so I can do a
    // runtime check on the formgroup to validate json file configuration
    type: string;

    constructor(
        // key: string,
        type: string,
        label?: string,
        editable: boolean = true,
        visible: boolean = true,
        required: boolean = false,
        refData?: any) {
            super();
            // this.key = key;
            this.type = type;
            this.label = label;
            this.editable = editable;
            this.visible = visible;
            this.required = required;
            this.refData = refData;
    }
}

export function generateSuperFromJson(config: any): SuperFormGroup | SuperFormControl {
    const nestedSection = config.pages || config.sections || config.subSections || config.controls;
    if (!nestedSection) {
        return new SuperFormControl(config.type, config.label, config.editable, config.visible, config.required, config.refData);
    }
    const group = new SuperFormGroup(config.label,config.level);
    for (let key in nestedSection) {
        group.controls[key] = generateSuperFromJson(nestedSection[key]);
    }
    return group;
}
