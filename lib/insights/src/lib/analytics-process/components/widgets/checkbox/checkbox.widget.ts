/*!
 * @license
 * Copyright 2019 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 /* eslint-disable @angular-eslint/component-selector, @angular-eslint/no-input-rename */

 import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
 import { FormGroup } from '@angular/forms';
 import { WidgetComponent } from './../widget.component';

 @Component({
    selector: 'analytics-checkbox-widget',
    templateUrl: './checkbox.widget.html',
    encapsulation: ViewEncapsulation.None
})
export class CheckboxWidgetAnalyticsComponent extends WidgetComponent {

    @Input()
    field: any;

    @Input('group')
    public formGroup: FormGroup;

    @Input('controllerName')
    public controllerName: string;

    constructor(public elementRef: ElementRef) {
        super();
    }
}
