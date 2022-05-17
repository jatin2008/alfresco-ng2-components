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

import { ClassesApi, ContentApi, CustomModelApi, UploadApi, WebscriptApi } from '@alfresco/js-api';
import { NgModule } from '@angular/core';
import { ApiClientsService } from '../../api-clients.service';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Api {
        interface ApiRegistry {
            ['ContentCustom.webscript']: WebscriptApi;
            ['ContentCustom.upload']: UploadApi;
            ['ContentCustom.classes']: ClassesApi;
            ['ContentCustom.content']: ContentApi;
            ['ContentCustom.custom-model']: CustomModelApi;
        }
    }
}

@NgModule()
export class ContentCustomClientModule {
    constructor(private apiClientsService: ApiClientsService) {
        this.apiClientsService.register('ContentCustom.webscript', WebscriptApi);
        this.apiClientsService.register('ContentCustom.upload', UploadApi);
        this.apiClientsService.register('ContentCustom.classes', ClassesApi);
        this.apiClientsService.register('ContentCustom.content', ContentApi);
        this.apiClientsService.register('ContentCustom.custom-model', CustomModelApi);
    }
}
