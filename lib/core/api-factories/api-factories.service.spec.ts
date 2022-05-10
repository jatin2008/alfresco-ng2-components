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

import { NodesApi } from '@alfresco/js-api';
import { TestBed } from '@angular/core/testing';
import { ApiFactoriesService } from './api-factories.service';

fdescribe('ApiFactoriesService', () => {
    let service: ApiFactoriesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ApiFactoriesService);
    });

    it('should add api to registry', () => {
        service.register('nodes', NodesApi);

        expect(service.get('nodes') instanceof NodesApi).toBeTruthy();
    });

    it('should throw error if we try to get unregisterd API', () => {
        expect(() => service.get('nodes')).toThrowError('Api not registred: nodes');

        service.register('nodes', NodesApi);

        expect(() => service.get('nodes')).not.toThrowError('Api not registred');
    });

    it('should work even with Api enum', () => {
      service.register(Api.nodes, NodesApi);

      expect(service.get(Api.nodes) instanceof NodesApi).toBeTruthy();
  });
});
