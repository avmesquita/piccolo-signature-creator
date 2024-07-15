import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFieldsComponent } from './components/template-fields/template-fields.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { CoderComponent } from './components/coder/coder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFieldsService } from './services/template-fields.service';
import { TemplateFieldsRoutingModule } from './template-fields-routing.module';
import { NgprimeModule } from '../ngprime/ngprime.module';

import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {TabViewModule} from 'primeng/tabview';
import { ScrollTopModule } from 'primeng/scrolltop';
import { CustomFieldsEngineComponent } from './components/custom-fields-engine/custom-fields-engine.component';
import { CustomFieldsDrawComponent } from './components/custom-fields-draw/custom-fields-draw.component';
import { ParametersEditorComponent } from './components/parameters-editor/parameters-editor.component';
import { ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TemplateFieldsRoutingModule,
    FileUploadModule,
    TabViewModule,
    HttpClientModule,
    NgprimeModule,
    ScrollTopModule,
    ClipboardModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule
  ],
  providers: [
    TemplateFieldsService,
    ConfirmationService,
    DialogService,
    DynamicDialogRef
],
  exports: [
    TemplateFieldsComponent,
    ParametersComponent,
    TemplatesComponent,
    CoderComponent,
    CustomFieldsEngineComponent,
    CustomFieldsDrawComponent,
    ParametersEditorComponent,
],
declarations: [
  TemplateFieldsComponent,
  ParametersComponent,
  TemplatesComponent,
  CoderComponent,
  CustomFieldsEngineComponent,
  CustomFieldsDrawComponent,
  ParametersEditorComponent,
]
})
export class TemplateFieldsModule { }
