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

import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CardViewTextItemComponent } from './card-view-textitem.component';
import { CoreStoryModule } from './../../../testing/core.story.module';
import {
    CardViewModule,
    CardViewTextItemModel
} from '../../../../..';

export default {
    component: CardViewTextItemComponent,
    title: 'Core/Card View/Card View Text Item',
    decorators: [
        moduleMetadata({
            imports: [CoreStoryModule, CardViewModule]
        })
    ],
    argTypes: {
        editable: {
            control: 'boolean',
            defaultValue: true
        },
        displayEmpty: {
            control: 'boolean',
            defaultValue: true
        },
        copyToClipboardAction: {
            control: 'boolean',
            defaultValue: true
        },
        useChipsForMultiValueProperty: {
            control: 'boolean',
            defaultValue: true
        },
        multiValueSeparator: {
            control: 'boolean',
            defaultValue: true
        }
    }
} as Meta;

const template: Story<CardViewTextItemComponent> = (
    args: CardViewTextItemComponent
) => ({
    props: args
});

export const TextItemCardView = template.bind({});

TextItemCardView.args = {
    property: new CardViewTextItemModel({
        label: 'This is clickable ',
        value: 'click here',
        key: 'click',
        default: 'click here',
        editable: true,
        clickable: true,
        icon: 'close'
    })
};

// export const defaultStory = template.bind({});
// defaultStory.args = {
//     properties: dataSource
// };

// export const emptyStory = template.bind({})
// emptyStory.args = {
//     properties: valueAndDefaultUndefinedItems,
//     editable: false
// }
