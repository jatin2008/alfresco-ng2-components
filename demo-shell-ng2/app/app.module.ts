/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
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

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader } from 'ng2-translate/ng2-translate';
import { CoreModule } from 'ng2-alfresco-core';
import { SearchModule } from 'ng2-alfresco-search';
import { LoginModule } from 'ng2-alfresco-login';
import { DataTableModule } from 'ng2-alfresco-datatable';
import { DocumentListModule } from 'ng2-alfresco-documentlist';
import { UploadModule } from 'ng2-alfresco-upload';
import { TagModule } from 'ng2-alfresco-tag';
import { WebScriptModule } from 'ng2-alfresco-webscript';
import { ViewerModule } from 'ng2-alfresco-viewer';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

import { ALFRESCO_TASKLIST_DIRECTIVES } from 'ng2-activiti-tasklist';
import { ACTIVITI_PROCESSLIST_DIRECTIVES } from 'ng2-activiti-processlist';
import { ActivitiForm, ATIVITI_FORM_PROVIDERS } from 'ng2-activiti-form';

import { AlfrescoTranslationLoader } from 'ng2-alfresco-core';
import { Http } from '@angular/http';

import {
    DataTableDemoComponent,
    SearchComponent,
    SearchBarComponent,
    LoginDemoComponent,
    ActivitiDemoComponent,
    FormViewer,
    WebscriptComponent,
    TagComponent,
    AboutComponent,
    FilesComponent,
    FormNodeViewer
} from './components/index';

import {
    TabsWidget, ContainerWidget,
    TextWidget,
    NumberWidget,
    CheckboxWidget,
    MultilineTextWidget,
    DropdownWidget,
    HyperlinkWidget,
    RadioButtonsWidget,
    DisplayValueWidget,
    DisplayTextWidget,
    UploadWidget,
    AttachWidget,
    TypeaheadWidget,
    FunctionalGroupWidget,
    PeopleWidget
} from 'ng2-activiti-form';

// todo: temp
const ACTIVITI_FORM_DIRECTIVES: any[] = [
    ActivitiForm,

    TabsWidget,
    ContainerWidget,
    TextWidget,
    NumberWidget,
    CheckboxWidget,
    MultilineTextWidget,
    DropdownWidget,
    HyperlinkWidget,
    RadioButtonsWidget,
    DisplayValueWidget,
    DisplayTextWidget,
    UploadWidget,
    AttachWidget,
    TypeaheadWidget,
    FunctionalGroupWidget,
    PeopleWidget
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http) => new AlfrescoTranslationLoader(http),
            deps: [Http]
        }),
        routing,
        CoreModule.forRoot(),
        LoginModule,
        SearchModule.forRoot(),
        DataTableModule,
        DocumentListModule.forRoot(),
        UploadModule.forRoot(),
        TagModule.forRoot(),
        WebScriptModule,
        ViewerModule.forRoot()
    ],
    declarations: [
        AppComponent,
        SearchBarComponent,
        ...ALFRESCO_TASKLIST_DIRECTIVES,
        ...ACTIVITI_PROCESSLIST_DIRECTIVES,
        ...ACTIVITI_FORM_DIRECTIVES,

        DataTableDemoComponent,
        SearchComponent,
        SearchBarComponent,
        LoginDemoComponent,
        ActivitiDemoComponent,
        FormViewer,
        WebscriptComponent,
        TagComponent,
        AboutComponent,
        FilesComponent,
        FormNodeViewer
    ],
    providers: [
        ...ATIVITI_FORM_PROVIDERS
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

