import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {MenubarModule} from 'primeng/menubar';
import { SignatureGeneratorComponent } from './signature-generator/signature-generator.component';
import { CardModule } from 'primeng/card';
import { ScrollTopModule } from 'primeng/scrolltop';

import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignatureGeneratorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    ScrollTopModule,
    FileUploadModule,
    HttpClientModule,
    InputTextareaModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
