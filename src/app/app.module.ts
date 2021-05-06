import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

/*import { SignatureGeneratorComponent } from './signature-generator/signature-generator.component';*/

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgprimeModule } from './modules/ngprime/ngprime.module';
import { MessageService } from 'primeng/api';

/*import { TemplateFieldsModule } from './modules/template-fields/template-fields.module';*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    /*SignatureGeneratorComponent*/
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgprimeModule,
    /*TemplateFieldsModule*/
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]

})
export class AppModule { }
