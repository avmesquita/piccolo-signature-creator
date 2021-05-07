import { Component, OnInit } from '@angular/core';
import { TemplateFieldsService } from '../../services/template-fields.service';
import { Clipboard } from "@angular/cdk/clipboard"

@Component({
  selector: 'app-coder',
  templateUrl: './coder.component.html',
  styleUrls: ['./coder.component.css']
})
export class CoderComponent implements OnInit {

  isShowCode: boolean = false;

  constructor(public engine: TemplateFieldsService,
              private clipboard: Clipboard) { }

  ngOnInit(): void {
  }

  copyInputMessage(){
    this.clipboard.copy(this.engine.preview);
  }

  toggleCode(): void {
    this.isShowCode = !this.isShowCode;
  }

}
