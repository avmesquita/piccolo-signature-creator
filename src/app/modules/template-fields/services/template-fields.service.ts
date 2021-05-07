import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IMagicFieldType } from '../entities/imagic-field-type.interface';
import { IMagicField } from '../entities/imagic-field.interface';
import { Mock } from '../entities/mock-data.model';

@Injectable({
  providedIn: 'root'
})
export class TemplateFieldsService {

  fields: IMagicField[] = [];
  fieldtypes: IMagicFieldType[] = [];

  template: any;
  preview: string;
  parameters: any;

  /* FIELDS IS GOING TO CHANGE TO DYNAMIC FIELDS */
  name: string = "John Doe";
  phone: string = "+351 910233705"
  email: string = "john.doe@johndoe.com";

  instagram: string = "https://instagram.com/piccolo";
  facebook: string = "https://facebook.com/piccolo";
  youtube: string = "https://youtube.com/piccolo";

  mainImageBase64: any;
  /* END FIELDS*/

  showsCode: boolean = false;

  constructor() {
    this.template = "<h2>##name##</h2>\n" +
                    "Phone: <a href='tel:##phone##'>##phone##</a><br>\n" +
                    "Mail: <a href='mailto:##mail##'>##mail##</a><br>\n" +
                    "<img src='##image-large##'>\n" ;

    this.fieldtypes = this.getAllFieldType();
   }

  onMainImageUpload(event) {
    debugger;
    for(let file of event.files) {
      let me = this;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        me.mainImageBase64 = reader.result;
      };
    }
  }

  regenerateSignature(): void {
      let k = this.template;
      this.fields.forEach(element => {
        const replaceFactor = element.metadata;
        k = k.replaceAll(replaceFactor,element.value);
      });
      this.preview = k;
  }


  copyInputMessage(inputElement){
    //const inputElement = this.preview;
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  loadTemplate(event): void {
    for(let file of event.files) {
      let me = this;
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function () {
        me.template = reader.result;
      };
    }
  }

  toggleCode(): void {
    this.showsCode = !this.showsCode;
  }

  getAllFieldType(): IMagicFieldType[] {
    const mock = new Mock();
    return mock.fieldtypes;
  }


}
