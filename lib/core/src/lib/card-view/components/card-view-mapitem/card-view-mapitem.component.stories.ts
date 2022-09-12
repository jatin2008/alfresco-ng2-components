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
import { CardViewMapItemComponent } from './card-view-mapitem.component';
import { CoreStoryModule } from './../../../testing/core.story.module';
import { CardViewMapItemModel, CardViewModule } from '../../../../..';

export default {
    component: CardViewMapItemComponent,
    title: 'Core/Card View/Card View Map Item',
    decorators: [
        moduleMetadata({
            imports: [CoreStoryModule, CardViewModule]
        })
    ],
    argTypes: {
        displayEmpty: {
            control: 'boolean',
            defaultValue: true
        }
    }
} as Meta;

const template: Story<CardViewMapItemComponent> = (
    args: CardViewMapItemComponent
) => ({
    props: args
});

export const MapItemCardView = template.bind({});

MapItemCardView.args = {
    property: new CardViewMapItemModel({
        label: 'My map',
        value: new Map([['999', 'My Value']]),
        key: 'map',
        default: 'default map value'
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
