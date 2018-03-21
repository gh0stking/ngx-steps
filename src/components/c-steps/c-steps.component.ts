import { Component, Input } from '@angular/core';

@Component({
    selector: 'c-steps',
    templateUrl: './c-steps.component.html',
    styleUrls: ['./c-steps.component.scss']
})
export class StepsComponent {
    @Input() items: StepItem[];
    constructor() { }

    onItemSelect(item: StepItem, index: number) {
        if (item.disabled) {
            return;
        }

        this.items.forEach(element => {
            element.selected = false;
        });

        item.selected = true;

        if (item.command) {
            item.command({
                originalEvent: event,
                item: item,
                index: index
            });
        }
    }
}

export class StepItem {
    label?: string;
    command?: (event?: any) => void;
    disabled?: boolean;
    selected?: boolean;
}
