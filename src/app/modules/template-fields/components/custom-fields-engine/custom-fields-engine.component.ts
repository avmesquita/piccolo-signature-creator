import { Component, OnInit } from '@angular/core';
import { TemplateFieldsService } from '../../services/template-fields.service';

@Component({
  selector: 'app-custom-fields-engine',
  templateUrl: './custom-fields-engine.component.html',
  styleUrls: ['./custom-fields-engine.component.css']
})
export class CustomFieldsEngineComponent implements OnInit {

  constructor(public engine: TemplateFieldsService) { }

  ngOnInit(): void {
  }

}
