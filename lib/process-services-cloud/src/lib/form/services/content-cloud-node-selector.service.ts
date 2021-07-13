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

import { Injectable } from '@angular/core';
import { AlfrescoApiService, FormValues, LogService } from '@alfresco/adf-core';
import { MatDialog } from '@angular/material/dialog';
import { ContentNodeSelectorComponent, ContentNodeSelectorComponentData, NodeAction } from '@alfresco/adf-content-services';
import { Node } from '@alfresco/js-api';
import { from, Observable, of, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentCloudNodeSelectorService {

  constructor(
    private apiService: AlfrescoApiService,
    private logService: LogService,
    private dialog: MatDialog) {
  }

  openUploadFileDialog(currentFolderId?: string, selectionMode?: string, isAllFileSources?: boolean, restrictRootToCurrentFolderId?: boolean): Observable<Node[]> {
    const select = new Subject<Node[]>();
    select.subscribe({
      complete: this.close.bind(this)
    });
    const data = <ContentNodeSelectorComponentData> {
      title: 'Select a file',
      actionName: NodeAction.ATTACH,
      currentFolderId,
      restrictRootToCurrentFolderId,
      select,
      selectionMode,
      isSelectionValid: (entry: Node) => entry.isFile,
      showFilesInResult: true,
      showDropdownSiteList: false,
      showLocalUploadButton: isAllFileSources
  };
    this.openContentNodeDialog(data, 'adf-content-node-selector-dialog', '66%');
    return select;
  }

    async fetchNodeIdFromRelativePath(alias: string, opts: { relativePath: string }): Promise<string> {
        const relativePathNodeEntry: any = await this.apiService.getInstance().node
        .getNode(alias, opts)
        .catch((err) => this.handleError(err));
        return relativePathNodeEntry?.entry?.id;
    }

    async fetchAliasNodeId(alias: string): Promise<string> {
        const aliasNodeEntry: any = await this.apiService.getInstance().node
        .getNode(alias)
        .catch((err) => this.handleError(err));
        return aliasNodeEntry?.entry?.id;
    }

  private openContentNodeDialog(data: ContentNodeSelectorComponentData, currentPanelClass: string, chosenWidth: string) {
    this.dialog.open(ContentNodeSelectorComponent, { data, panelClass: currentPanelClass, width: chosenWidth });
  }

  getMetaData(fileId: string): Observable<FormValues> {
    const values: FormValues = {};
    return from(this.apiService.nodesApi.getNode(fileId)).pipe(
        map((acsNode) => {
            const metadata = acsNode?.entry?.properties;
            if (metadata) {
                const keys = Object.keys(metadata);
                keys.forEach(key => {
                    const sanitizedKey = key.replace(':', '_');
                    values[sanitizedKey] = metadata[key];
                });
            }
            return values;
        }),
        catchError((error) => {
            this.logService.error(error);
            return of(values);
        })
    )
  }

  close() {
    this.dialog.closeAll();
  }

  private handleError(error: any): Observable<any> {
    return throwError(error || 'Server error');
  }
}
