import { Component, OnInit } from '@angular/core';
import { TemplateFieldsService } from '../../services/template-fields.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  constructor(public engine: TemplateFieldsService) { }

  ngOnInit(): void {
  }

}
