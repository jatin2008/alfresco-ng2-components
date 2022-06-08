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

import { AspectsApi, TypesApi } from '@alfresco/js-api';
import { NgModule } from '@angular/core';
import { ApiClientsService } from '../../api-clients.service';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace AlfrescoCore {
        interface ApiRegistry {
            ['ModelClient.aspects']: AspectsApi;
            ['ModelClient.types']: TypesApi;
        }
    }
}

@NgModule()
export class ModelClientModule {
    constructor(private apiClientsService: ApiClientsService) {
        this.apiClientsService.register('ModelClient.aspects', AspectsApi);
        this.apiClientsService.register('ModelClient.types', TypesApi);
    }
}
