import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signature-generator',
  templateUrl: './signature-generator.component.html',
  styleUrls: ['./signature-generator.component.css']
})
export class SignatureGeneratorComponent implements OnInit {

  //mainImageFile: any[] = [];
  mainImageBase64: any;

  preview: string;
  template: any;

  name: string = "John Doe";
  phone: string = "+351 910233705"
  email: string = "john.doe@johndoe.com";

  instagram: string = "https://instagram.com/piccolo";
  facebook: string = "https://facebook.com/piccolo";
  youtube: string = "https://youtube.com/piccolo";

  constructor() {}

  ngOnInit(): void {
    this.template = "<h2>##name##</h2>" +
                   "Phone: ##phone##<br>" +
                   "Mail: ##mail##<br>" +
                   "<img src='##image-large##'>" ;
  }

  onMainImageUpload(event) {
    debugger;
    for(let file of event.files) {
      //this.mainImageFile.push(file);
      let me = this;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        me.mainImageBase64 = reader.result;
      };
    }
  }

  regenerateSignature(): void {
      /*

      this.preview = "<h2>" + this.name + "</h2>" +
                    "Phone: " + this.phone + "<br>" +
                    "Mail: " + this.email + "<br>" +
                    "<img src='" + this.mainImageBase64 + "'>";
      */
     debugger;
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
      //this.mainImageFile.push(file);
      let me = this;
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function () {
        me.template = reader.result;
      };
    }


  }
}
