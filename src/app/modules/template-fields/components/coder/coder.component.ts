import { Component, OnInit } from '@angular/core';
import { TemplateFieldsService } from '../../services/template-fields.service';

@Component({
  selector: 'app-coder',
  templateUrl: './coder.component.html',
  styleUrls: ['./coder.component.css']
})
export class CoderComponent implements OnInit {

  isShowCode: boolean = false;

  constructor(public engine: TemplateFieldsService) { }

  ngOnInit(): void {
  }

  copyInputMessage(inputElement){
    //const inputElement = this.preview;
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

}
