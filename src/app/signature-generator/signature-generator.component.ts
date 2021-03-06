import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-signature-generator',
  templateUrl: './signature-generator.component.html',
  styleUrls: ['./signature-generator.component.css']
})
export class SignatureGeneratorComponent implements OnInit {

  /* BEGIN TABS */
  menuItens: MenuItem[];

  /* END TABS */
  mainImageBase64: any;

  preview: string;
  template: any;

  name: string = "John Doe";
  phone: string = "+351 910233705"
  email: string = "john.doe@johndoe.com";

  instagram: string = "https://instagram.com/piccolo";
  facebook: string = "https://facebook.com/piccolo";
  youtube: string = "https://youtube.com/piccolo";

  showsCode: boolean = false;

  constructor(private msgService: MessageService) {}

  ngOnInit(): void {
    this.menuItens = [
      {label: 'Parameters', icon: 'pi pi-fw pi-home'},
      {label: 'Template', icon: 'pi pi-fw pi-calendar'},
      {label: 'Variables', icon: 'pi pi-fw pi-pencil'},
      {label: 'Generate', icon: 'pi pi-fw pi-cog'},
      {label: 'Code', icon: 'pi pi-fw pi-align-justify'}
   ];


    this.template = "<h2>##name##</h2>" +
                   "Phone: ##phone##<br>" +
                   "Mail: ##mail##<br>" +
                   "<img src='##image-large##'>" ;
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

      k = k.replace(/##name##/gi,this.name);
      k = k.replace(/##phone##/gi,this.phone);
      k = k.replace(/##mail##/gi,this.email);
      k = k.replace(/##facebook##/gi,this.facebook);
      k = k.replace(/##instagram##/gi,this.instagram);
      k = k.replace(/##youtube##/gi,this.youtube);
      k = k.replace(/##image-large##/gi,this.mainImageBase64);
      this.preview = k;
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
        me.template = reader.result;
      };
    }
  }

  toggleCode(): void {
    this.showsCode = !this.showsCode;
  }

}
