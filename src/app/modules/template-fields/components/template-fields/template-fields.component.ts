import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TemplateFieldsService } from '../../services/template-fields.service';

@Component({
  selector: 'app-template-fields',
  templateUrl: './template-fields.component.html',
  styleUrls: ['./template-fields.component.css']
})
export class TemplateFieldsComponent implements OnInit {

  //engine: TemplateFieldsService;

  constructor() {
    //debugger;
    //this.engine = service;
   }

  ngOnInit(): void {
    /*
    debugger;
    this.engine.menuItens = [
      {label: 'Parameters', icon: 'pi pi-fw pi-home'},
      {label: 'Template', icon: 'pi pi-fw pi-calendar'},
      {label: 'Variables', icon: 'pi pi-fw pi-pencil'},
      {label: 'Generate', icon: 'pi pi-fw pi-cog'},
      {label: 'Code', icon: 'pi pi-fw pi-align-justify'}
   ];
   */
  }

  /*
  regenerateSignature(): void {
    let k = this.engine.template;

    k = k.replace(/##name##/gi,this.engine.name);
    k = k.replace(/##phone##/gi,this.engine.phone);
    k = k.replace(/##mail##/gi,this.engine.email);
    k = k.replace(/##facebook##/gi,this.engine.facebook);
    k = k.replace(/##instagram##/gi,this.engine.instagram);
    k = k.replace(/##youtube##/gi,this.engine.youtube);
    k = k.replace(/##image-large##/gi,this.engine.mainImageBase64);

    this.engine.preview = k;
}

copyInputMessage(inputElement){
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
      me.engine.template = reader.result;
    };
  }
}

toggleCode(): void {
  this.engine.showsCode = !this.engine.showsCode;
}
*/

}
